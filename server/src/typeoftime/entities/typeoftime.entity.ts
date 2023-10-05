import { Studytime } from "src/studytime/entities/studytime.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Typeoftime {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number
    @Column()
    typeOfTime:string
    @ManyToOne(()=> Studytime ,(studytime)=> studytime.id,{eager:true})
    @JoinColumn({name: 'studyTime', referencedColumnName:'id'})
    studyTime: Studytime
}
