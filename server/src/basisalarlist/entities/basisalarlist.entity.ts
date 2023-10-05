import { Wage } from "src/wage/entities/wage.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Basisalarlist {
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number
    @Column()
    coefficientsSalary:number
    @Column()
    basicSalary:number
    @Column()
    startDay:Date
    @Column()
    endDay:Date
    @ManyToOne(()=> Wage, (wage) => wage.id,{eager:true})
    @JoinColumn({name: 'wage', referencedColumnName: 'id'})
    wage: Wage
}
