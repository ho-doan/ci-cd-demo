import { Course } from "src/course/entities/course.entity";
import { School } from "src/school/entities/school.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Openinschedule {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number
    //TODO: FK idkhoahoc,
    @ManyToOne(()=> Course, (course)=> course.id,{eager:true})
    @JoinColumn({name: 'course', referencedColumnName: 'id'})
    course: Course
    @Column({type: 'nvarchar'})
    openingDay:Date
    //TODO: FK idtruong
    @ManyToOne(()=> School, (school)=> school.id,{eager:true})
    @JoinColumn({name: 'school', referencedColumnName: 'id'})
    school: School
    @Column({type: 'datetime'})
    schedule:Date
    @Column({type: 'int'})
    time:number
    @Column({type: 'int'})
    totalNumberOfStudents:number
}
