import { Education } from "src/education/entities/education.entity";
import { Recruitment } from "src/recruitment/entities/recruitment.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class School {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;
    @Column()
    name: string;
    @ManyToOne(()=> Education, (education)=>education.id,{eager: true})
    @JoinColumn({name: 'education', referencedColumnName: 'id'})
    education: Education
    @ManyToOne(()=> Recruitment, (recruitment)=>recruitment.id,{eager: true})
    @JoinColumn({name: 'recruitment', referencedColumnName: 'id'})
    recruitment: Recruitment
}
