import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Paiements } from "./Paiements";
import { Notifications } from "./Notifications";

@Entity("personnes", { schema: "IMPOTS" })
export class Personnes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @Column("varchar", { name: "prenoms", length: 255 })
  prenoms: string;

  @Column("date", { name: "date_naissance" })
  dateNaissance: string;

  @Column("varchar", { name: "lieu_naissance", length: 255 })
  lieuNaissance: string;

  @Column("varchar", { name: "cin", length: 12 })
  cin: string;

  @Column("date", { name: "date_cin" })
  dateCin: string;

  @Column("varchar", { name: "lieu_cin", length: 255 })
  lieuCin: string;

  @Column("varchar", { name: "adresse", length: 255 })
  adresse: string;

  @Column("varchar", { name: "tel1", length: 20 })
  tel1: string;

  @Column("varchar", { name: "tel2", nullable: true, length: 20 })
  tel2: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

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
    default: "user",
  })
  fonction: string;

  @OneToMany(() => Paiements, (paiements) => paiements.personne)
  paiements: Paiements[];

  @OneToMany(() => Notifications, (notifications) => notifications.personne)
  notifications: Notifications[];
}
