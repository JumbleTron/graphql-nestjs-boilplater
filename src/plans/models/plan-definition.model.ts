import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PlanDefinition {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int, {
    description: 'Data amount in MB',
  })
  dataAmount: number;

  @Field(() => Int, {
    description: 'Price in US cents',
  })
  price: number;
}
