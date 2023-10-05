import { Education } from 'src/education/entities/education.entity';
import { Personalinformation } from 'src/personalinformation/entities/personalinformation.entity';
import { School } from 'src/school/entities/school.entity';
import { WorkingForm } from 'src/workingform/entities/workingform.entity';
import { WorkingTime } from 'src/workingtime/entities/workingtime.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recruitment {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  //TODO: FK: idhocvan,idthongtincanhan,idhinhthuc,idtruong,idthoigianlamviec
  @OneToMany(()=> Education, (education)=> education.id,{eager: true})
  @JoinColumn({name: 'education', referencedColumnName: 'id'})
  education: Education
  @OneToMany(()=> Personalinformation, (personalInformation) =>personalInformation.id, {eager:true})
  @JoinColumn({name: 'personalInformation', referencedColumnName: 'id'})
  personalInformation: Personalinformation
  @OneToMany(()=> WorkingForm, (workingForm) => workingForm.id,{eager:true})
  @JoinColumn({name: 'workingForm', referencedColumnName: 'id'})
  workingForm: WorkingForm
  @OneToMany(()=> School, (school)=>school.id,{eager:true})
  @JoinColumn({name: 'school', referencedColumnName: 'id'})
  school: School
  @OneToMany(()=> WorkingTime, (workingTime) => workingTime.id,{eager:true})
  @JoinColumn({name: 'workingTime', referencedColumnName: 'id'})
  workingTime:WorkingTime
  @Column({type: 'nvarchar'})
  experience:string
  @Column({type: 'nvarchar'})
  language:string
  @Column({type: 'nvarchar'})
  languageCertificate:string
  @Column({type: 'nvarchar'})
  file:string
}
