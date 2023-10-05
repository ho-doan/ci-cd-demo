import { Recruimentmanyposition } from "src/recruimentmanypositions/entities/recruimentmanyposition.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vacancy {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number
    @Column()
    name:string
    @Column()
    jobDescription:string
    @Column()
    jobRequirements:string
    @ManyToOne(()=> Recruimentmanyposition, (recruitingManyPosition) => recruitingManyPosition.id,{eager:true})
    @JoinColumn({name: 'recruitingManyPosition', referencedColumnName: 'id'})
    recruitingManyPosition: Recruimentmanyposition
}
