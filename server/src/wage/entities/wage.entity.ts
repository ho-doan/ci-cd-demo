import { Allowance } from "src/allowance/entities/allowance.entity";
import { Basisalarlist } from "src/basisalarlist/entities/basisalarlist.entity";
import { WorkingTime } from "src/workingtime/entities/workingtime.entity";
import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wage {
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number
    //FK: idphucap
    @OneToMany(()=> Allowance, (allowance)=> allowance.id,{eager:true})
    @JoinColumn({name: 'allowance', referencedColumnName: 'id'})
    allowance: Allowance
    //FK: iddmluong
    @OneToMany(()=> Basisalarlist,(basicSalaryList) => basicSalaryList.id,{eager: true})
    @JoinColumn({name: 'basicSalaryList' , referencedColumnName: 'id'})
    basicSalaryList: Basisalarlist
    //FK: idthoigianlamviec
    @OneToOne(()=> WorkingTime,(workingTime) => workingTime.id,{eager: true})
    @JoinColumn({name: 'workingTime' , referencedColumnName: 'id'})
    workingTime:WorkingTime
}
