import { Openinschedule } from "src/openinschedule/entities/openinschedule.entity";
import { Personalinformation } from "src/personalinformation/entities/personalinformation.entity";
import { Studytime } from "src/studytime/entities/studytime.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Registerforstudy {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number
    //TODO: FK idthongtincanhan,idlichkhaigiang,idthoigianhoc
    @ManyToOne(()=> Personalinformation, (personalInformation) => personalInformation.id,{eager:true})
    @JoinColumn({name: 'personalInformation', referencedColumnName: 'id'})
    personalInformation: Personalinformation
    @ManyToOne(()=> Openinschedule,(openingSchedule)=>openingSchedule.id,{eager:true})
    @JoinColumn({name: 'openingSchedule', referencedColumnName: 'id'})
    openingSchedule: Openinschedule
    @ManyToOne(()=> Studytime,(studyTime)=> studyTime.id,{eager:true})
    @JoinColumn({name: 'studyTime', referencedColumnName: 'id'})
    studyTime: Studytime
    @Column({type: 'datetime'})
    registrationDate:Date
}
