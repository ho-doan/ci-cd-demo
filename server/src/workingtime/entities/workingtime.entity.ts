import { Recruitment } from "src/recruitment/entities/recruitment.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WorkingTime {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number
    @Column({type: 'datetime'})
    startDay: Date
    @Column({type: 'datetime'})
    endDay: Date
    @ManyToOne(()=> Recruitment, (recruitment)=> recruitment.id,{eager:true})
    @JoinColumn({name: 'recruitment', referencedColumnName: 'id'})
    recruitment:Recruitment
}
