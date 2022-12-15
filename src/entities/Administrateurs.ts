import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Notifications } from "./Notifications";

@Entity("administrateurs", { schema: "IMPOTS" })
export class Administrateurs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @Column("varchar", { name: "prenoms", length: 255 })
  prenoms: string;

  @Column("varchar", { name: "tel", length: 20 })
  tel: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("text", { name: "password" })
  password: string;

  @Column("varchar", { name: "path_photo", nullable: true, length: 255 })
  pathPhoto: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", {
    name: "fonction",
    length: 255,
    default: "admin",
  })
  fonction: string;

  @OneToMany(() => Notifications, (notifications) => notifications.admin)
  notifications: Notifications[];
}
