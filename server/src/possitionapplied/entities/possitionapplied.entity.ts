import { Nominee } from "src/nominee/entities/nominee.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Possitionapplied {
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number
    @Column()
    name:string
    @ManyToOne(()=> Nominee, (nominee)=> nominee.id,{eager:true})
    @JoinColumn({name: 'nominee', referencedColumnName: 'id'})
    nominee: Nominee
}
