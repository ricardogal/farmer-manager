import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Safra } from '../../safras/safra/safra';

@Entity()
export class CulturaPlantada {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @ManyToOne(() => Safra, safra => safra.culturas)
  safra: Safra;
}
