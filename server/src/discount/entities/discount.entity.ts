import { Discounttype } from "src/discounttype/entities/discounttype.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Discount {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number
    @Column({type: 'nvarchar'})
    name:string
    @Column({type: 'float'})
    discount: number
    @Column({type: 'datetime'})
    startDay: Date
    @Column({type: 'datetime'})
    endDay: Date
    //TODO: FK idloaigiamgia
    @ManyToOne(()=> Discounttype, (discountType) => discountType.id, {eager:true})
    @JoinColumn({name: 'discountType', referencedColumnName: 'id'})
    discountType: Discounttype
}
