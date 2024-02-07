import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  isoAlpha2: string;

  @Field()
  isoAlpha3: string;
}
