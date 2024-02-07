import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Network {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  mnc: string;

  @Field()
  mcc: string;
}
