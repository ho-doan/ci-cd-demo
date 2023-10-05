import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
// import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    // GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    //   autoSchemaFile: true,
    //   driver: ApolloFederationDriver,
    //   plugins: [ApolloServerPluginInlineTrace()],
    //   buildSchemaOptions: {
    //     orphanedTypes: [Product],
    //   },
    // }),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
