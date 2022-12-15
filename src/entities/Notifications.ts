import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Administrateurs } from "./Administrateurs";
import { Personnes } from "./Personnes";
import { StatusNotifications } from "./StatusNotifications";

@Index("fk_personne_id_notifications", ["personneId"], {})
@Index("fk_admin_id_notifications", ["adminId"], {})
@Index("fk_status_id_notifications", ["statusId"], {})
@Entity("notifications", { schema: "IMPOTS" })
export class Notifications {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "titre", length: 255 })
  titre: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "personne_id" })
  personneId: number;

  @Column("int", { name: "admin_id" })
  adminId: number;

  @Column("int", { name: "status_id" })
  statusId: number;

  @ManyToOne(
    () => Administrateurs,
    (administrateurs) => administrateurs.notifications,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "admin_id", referencedColumnName: "id" }])
  admin: Administrateurs;

  @ManyToOne(() => Personnes, (personnes) => personnes.notifications, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "personne_id", referencedColumnName: "id" }])
  personne: Personnes;

  @ManyToOne(
    () => StatusNotifications,
    (statusNotifications) => statusNotifications.notifications,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "status_id", referencedColumnName: "id" }])
  status: StatusNotifications;
}
