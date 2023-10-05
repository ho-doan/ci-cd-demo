import { School } from "src/school/entities/school.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number
    @Column({type: 'nvarchar'})
    name:string
    //TODO idtruong
    // idtruong
    @ManyToOne(() => School,(school)=> school.id,{eager: true})
    @JoinColumn({name: 'school', referencedColumnName: 'id'})
    school: School
}
