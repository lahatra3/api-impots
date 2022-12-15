import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Notifications } from "./Notifications";

@Entity("status_notifications", { schema: "IMPOTS" })
export class StatusNotifications {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom_status", nullable: true, length: 100 })
  nomStatus: string | null;

  @OneToMany(() => Notifications, (notifications) => notifications.status)
  notifications: Notifications[];
}
