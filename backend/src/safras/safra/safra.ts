import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Propriedade } from '../../propriedades/propriedade/propriedade';
import { CulturaPlantada } from '../../culturas/cultura-plantada/cultura-plantada';

@Entity()
export class Safra {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ano: string;

  @ManyToOne(() => Propriedade, propriedade => propriedade.safras)
  propriedade: Propriedade;

  @OneToMany(() => CulturaPlantada, cultura => cultura.safra, { cascade: true })
  culturas: CulturaPlantada[];
}
