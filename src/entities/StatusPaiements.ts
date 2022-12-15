import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Paiements } from "./Paiements";

@Entity("status_paiements", { schema: "IMPOTS" })
export class StatusPaiements {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom_status", nullable: true, length: 100 })
  nomStatus: string | null;

  @OneToMany(() => Paiements, (paiements) => paiements.status)
  paiements: Paiements[];
}
