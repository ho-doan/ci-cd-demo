import { Routetype } from "src/routetype/entities/routetype.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Route {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number
    //TODO: FK idtenloailotrinh
    @ManyToOne(()=> Routetype,(routeType)=>routeType.id,{eager:true})
    @JoinColumn({name: 'routeType', referencedColumnName: 'id'})
    routeType: Routetype
    @Column()
    nameRoute:string
    @Column()
    time:number
}
