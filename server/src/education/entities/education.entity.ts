import { Recruitment } from "src/recruitment/entities/recruitment.entity";
import { School } from "src/school/entities/school.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Education {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number
    //FK idtruong
    @OneToMany(()=> School ,(shool)=> shool.id,{eager: true})
    @JoinColumn({name: 'school', referencedColumnName:'id'})
    school: School
    @Column({type: 'float'})
    mediumScore:number
    @Column({type: 'datetime'})
    graduation:Date
    @ManyToOne(()=> Recruitment, (recruitment)=> recruitment.id,{eager: true})
    @JoinColumn({name: 'recruitment', referencedColumnName: 'id'})
    recruitment: Recruitment
}
