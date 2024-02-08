import { Module } from '@nestjs/common';
import { PlansModule } from '../plans/plans.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      //autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/nestjs'),
    PlansModule,
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
