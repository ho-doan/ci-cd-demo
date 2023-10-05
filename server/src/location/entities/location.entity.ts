import { IsOptional } from "class-validator"
import { School } from "src/school/entities/school.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity()
export class Location {
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number
    @Column({type: 'nvarchar'})
    name:string
    @Column({type: 'nvarchar'})
    address:string
    @Column({type: 'nvarchar'})
    note:string
    @Column({type: 'nvarchar'})
    email:string
    //TODO FK:idtruong, trường
    // idtruong:number
    @ManyToOne(()=> School, (school) => school.id,{eager: true})
    @JoinColumn({name: 'school', referencedColumnName: 'id'})
    school: School;
}
