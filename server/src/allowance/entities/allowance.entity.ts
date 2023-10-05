import { Wage } from "src/wage/entities/wage.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Allowance {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number
    @Column()
    allowanceCoefficient:number
    @Column()
    subsidiesSalary: number
    @Column()
    startDay:Date
    @Column()
    endDay:Date
    @ManyToOne(()=> Wage, (wage) => wage.id,{eager:true})
    @JoinColumn({name: 'wage', referencedColumnName: 'id'})
    wage: Wage
}
