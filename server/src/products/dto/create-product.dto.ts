// import { ArgsType, Field, InputType } from '@nestjs/graphql';

// @ArgsType()
// @InputType()
export class CreateProductDto {
  // @Field()
  fullName: string;
  // @Field()
  description: string;
  // @Field({ nullable: true })
  userCreate?: string;
  // @Field()
  category: number;
}
