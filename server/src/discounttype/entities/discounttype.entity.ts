import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Discounttype {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number
    @Column({type: 'nvarchar'})
    name: string
}
