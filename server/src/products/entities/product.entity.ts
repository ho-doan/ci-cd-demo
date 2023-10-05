import {
  ArgsType,
  Directive,
  Field,
  ID,
  InputType,
  ObjectType,
} from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
// @ObjectType()
// @Directive('@key(fields: "id")')
export class Product {
  // @Field(() => ID)
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  // @Field()
  // @Column({ type: 'nvarchar' })
  // fullName: string;
  // @Field()
  @Column({ type: 'nvarchar' })
  description: string;
  //TODO: hodoan
  // @Field({ nullable: true })
  @Column({ type: 'nvarchar' })
  userCreate?: string;
  // @Field(() => String)
  @IsOptional()
  @ManyToOne(() => Category, (category) => category.id, { eager: true })
  @JoinColumn({ name: 'category', referencedColumnName: 'id' })
  category: Category;
}
