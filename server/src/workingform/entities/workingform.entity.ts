import { Recruitment } from "src/recruitment/entities/recruitment.entity";
import { Wage } from "src/wage/entities/wage.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WorkingForm {
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number
    @Column({type: 'nvarchar'})
    name:string
    //TODO: FK idluong
    @OneToOne(()=> Wage, (wage)=> wage.id, {eager:true})
    @JoinColumn({name: 'wage', referencedColumnName: 'id'})
    wage: Wage
    @ManyToOne(()=> Recruitment ,(recruitment)=>recruitment.id,{eager:true})
    @JoinColumn({name: 'recruitment', referencedColumnName: 'id'})
    recruitment: Recruitment
}
