import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Paiements } from "./Paiements";
import { Personnes } from "./Personnes";

@Index("fk_personne_id_habilitations", ["personneId"], {})
@Entity("habilitations", { schema: "IMPOTS" })
export class Habilitations {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom_habilitation", length: 255 })
  nomHabilitation: string;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "path_piece_justificative", length: 255 })
  pathPieceJustificative: string;

  @Column("varchar", { name: "path_photo", length: 255 })
  pathPhoto: string;

  @Column("int", { name: "personne_id" })
  personneId: number;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Paiements, (paiements) => paiements.habilitation)
  paiements: Paiements[];

  @ManyToOne(() => Personnes, (personnes) => personnes.habilitations, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "personne_id", referencedColumnName: "id" }])
  personne: Personnes;
}
