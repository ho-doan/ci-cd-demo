import { join } from "path";
import { Contract } from "src/contract/entities/contract.entity";
import { Recruitment } from "src/recruitment/entities/recruitment.entity";
import { Technology } from "src/technology/entities/technology.entity";
import { Vacancy } from "src/vacancies/entities/vacancy.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recruimentmanyposition {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number
    //FK: idtuyendung 
    @ManyToMany(()=> Recruitment , (recruitment)=> recruitment.id, {eager:true})
    @JoinColumn({name: 'recruitment', referencedColumnName: 'id'})
    // FK idvitrituyendung
    @ManyToMany(()=> Vacancy,(vanCanCy)=> vanCanCy.id,{eager: true})
    @JoinColumn({name: 'vanCanCy', referencedColumnName: 'id'})
    //FK: idcongnghe
    @ManyToMany(()=> Technology, (technology)=> technology.id, {eager:true})
    @JoinColumn({name: 'technology', referencedColumnName: 'id'})
    @Column({type: 'nvarchar'})
    workexperience:string
    @Column({type: 'nvarchar'})
    applicationstatus:string
    @Column({type: 'nvarchar'})
    confirmemployment:string
    //FK: idhopdong
    @ManyToOne(()=> Contract, (contract) => contract.id, {eager: true})
    @JoinColumn({name: 'contract' , referencedColumnName: 'id'})
    contract: Contract
    @ManyToOne(()=> Recruitment, (recruitment) => recruitment.id, {eager: true})
    @JoinColumn({name: 'recruitment' , referencedColumnName: 'id'})
    recruitment: Recruitment
}
