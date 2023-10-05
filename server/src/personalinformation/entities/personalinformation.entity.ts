import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Personalinformation {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number
    @Column()
    fullName:string
    @Column()
    dayOfBirth:Date
    @Column()
    sex:string
    @Column()
    phone:number
    @Column()
    email: string
}
