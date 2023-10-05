import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Routetype {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number
    @Column()
    typeName: string
    @Column()
    time: number
}
