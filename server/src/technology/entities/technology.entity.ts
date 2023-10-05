import { Recruimentmanyposition } from "src/recruimentmanypositions/entities/recruimentmanyposition.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Technology {
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number
    @Column()
    name:string
    @ManyToOne(()=> Recruimentmanyposition, (recruitingManyPositions)=> recruitingManyPositions.id,{eager:true})
    @JoinColumn({name: 'recruitingManyPositions' , referencedColumnName: 'id'})
    recruitingManyPositions: Recruimentmanyposition
}
