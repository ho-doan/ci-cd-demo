import { Course } from "src/course/entities/course.entity";
import { Discount } from "src/discount/entities/discount.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Price {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number
    @Column({type: 'float'})
    price: number
    //TODO: FK idgiamgia
    @ManyToOne(()=> Discount, (discount)=> discount.id,{eager:true})
    @JoinColumn({name: 'discount', referencedColumnName: 'id'})
    discount: Discount
    @ManyToOne(()=> Course,(course)=>course.id,{eager:true})
    @JoinColumn({name: 'course', referencedColumnName: 'id'})
    course: Course
}
