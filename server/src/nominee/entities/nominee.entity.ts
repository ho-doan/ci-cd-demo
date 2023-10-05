import { Contract } from "src/contract/entities/contract.entity";
import { Possitionapplied } from "src/possitionapplied/entities/possitionapplied.entity";
import { Wage } from "src/wage/entities/wage.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Nominee {
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number
    @Column()
    name:string
    //FK: idloaivitriungtuyen
    @OneToMany(()=> Possitionapplied, (possitionapplied)=>possitionapplied.id, {eager: true})
    @JoinColumn({name: 'possitionapplied', referencedColumnName: 'id'})
    possitionapplied: Possitionapplied
    @ManyToOne(()=> Contract, (contract) => contract.id,{eager: true})
    @JoinColumn({name: 'contract' ,referencedColumnName: 'id'})
    contract: Contract
    // FK: idluong
    @OneToOne(()=> Wage, (wage)=> wage.id, {eager:true})
    @JoinColumn({name: 'wage', referencedColumnName: 'id'})
    wage: Wage
}
