import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Propriedade } from '../../propriedades/propriedade/propriedade';

@Entity()
export class Produtor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  cpfCnpj: string;

  @Column()
  nome: string;

  @OneToMany(() => Propriedade, propriedade => propriedade.produtor, { cascade: true })
  propriedades: Propriedade[];
}
