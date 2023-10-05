import { Nominee } from "src/nominee/entities/nominee.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contract {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number
    @Column({type: 'datetime'})
    startDay:Date
    @Column({type: 'datetime'})
    endDay:Date
    @Column({type: 'datetime'})
    sighDay:Date
    @Column({type: 'nvarchar'})
    content:string
    @Column({type: 'int'})
    signatureTimes:number
    @Column({type: 'nvarchar'})
    duration:string
    @Column({type: 'int'})
    wageAgreement:number
    //FK: idvitrituyendung
    @OneToMany(()=> Nominee, (nominee) => nominee.id, {eager: true})
    @JoinColumn({name: 'nominee' , referencedColumnName: 'id'})
    nominee: Nominee
}
