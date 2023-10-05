import { Typeoftime } from "src/typeoftime/entities/typeoftime.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Studytime {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number
    @Column()
    nameTime:string
    //TODO: FK idloaithoigianhoc
    @OneToMany(()=> Typeoftime, (typeOfTime)=>typeOfTime.id,{eager:true})
    @JoinColumn({name: 'typeOfTime', referencedColumnName: 'id'})
    typeOfTime: Typeoftime
}
