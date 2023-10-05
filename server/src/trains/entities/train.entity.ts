import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Train {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;
  @Column()
  image: string;
  @Column()
  name: string;
  @Column({ type: 'datetime' })
  time: Date;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column({
    name: 'output_commitment',
  })
  outputCommitment: boolean;
}
