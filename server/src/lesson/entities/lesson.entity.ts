import { Route } from "src/route/entities/route.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number
    @Column()
    name: string
    //TODO: FK idlotrinh
    @ManyToOne(()=> Route, (route)=> route.id,{eager:true})
    @JoinColumn({name: 'route', referencedColumnName:'id'})
    route: Route
}
