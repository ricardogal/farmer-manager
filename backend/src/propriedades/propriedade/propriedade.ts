import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Produtor } from '../../produtores/produtor/produtor';
import { Safra } from '../../safras/safra/safra';

@Entity()
export class Propriedade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column('float')
  areaTotal: number;

  @Column('float')
  areaAgricultavel: number;

  @Column('float')
  areaVegetacao: number;

  @ManyToOne(() => Produtor, produtor => produtor.propriedades)
  produtor: Produtor;

  @OneToMany(() => Safra, safra => safra.propriedade, { cascade: true })
  safras: Safra[];
}
