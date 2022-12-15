import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Habilitations } from "./Habilitations";
import { Personnes } from "./Personnes";
import { StatusPaiements } from "./StatusPaiements";

@Index("fk_status_id_paiements", ["statusId"], {})
@Index("fk_personne_id_paiements", ["personneId"], {})
@Index("fk_habilitation_id_paiements", ["habilitationId"], {})
@Entity("paiements", { schema: "IMPOTS" })
export class Paiements {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "titre", length: 255 })
  titre: string;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @Column("varchar", { name: "path_piece_jointe", length: 255 })
  pathPieceJointe: string;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "status_id" })
  statusId: number;

  @Column("int", { name: "personne_id" })
  personneId: number;

  @Column("int", { name: "habilitation_id" })
  habilitationId: number;

  @Column("datetime", { name: "date_paye", nullable: true })
  datePaye: Date | null;

  @Column("int", { name: "admin_id_traitement", nullable: true })
  adminIdTraitement: number | null;

  @Column("int", { name: "admin_id_paye", nullable: true })
  adminIdPaye: number | null;

  @ManyToOne(() => Habilitations, (habilitations) => habilitations.paiements, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "habilitation_id", referencedColumnName: "id" }])
  habilitation: Habilitations;

  @ManyToOne(() => Personnes, (personnes) => personnes.paiements, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "personne_id", referencedColumnName: "id" }])
  personne: Personnes;

  @ManyToOne(
    () => StatusPaiements,
    (statusPaiements) => statusPaiements.paiements,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "status_id", referencedColumnName: "id" }])
  status: StatusPaiements;
}
