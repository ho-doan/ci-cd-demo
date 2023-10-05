import { Price } from "src/price/entities/price.entity";
import { Route } from "src/route/entities/route.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number
    @Column()
    name:string
    //TODO: FK idlotrinh,idgia
    @ManyToOne(()=> Route, (route)=>route.id, {eager:true})
    @JoinColumn({name: 'route', referencedColumnName: 'id'})
    route: Route
    @OneToMany(()=> Price, (price)=> price.id,{eager:true})
    @JoinColumn({name: 'price', referencedColumnName: 'id'})
    price: Price
    @Column()
    content:string
    @Column()
    quantity:number
    @Column()
    scholarshipExcellence:string
}
