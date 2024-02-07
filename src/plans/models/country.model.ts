import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from "mongoose";

export type CountryDocument = HydratedDocument<Country>;

@ObjectType()
@Schema()
export class Country {
  @Prop({ required: true })
  _id: string;

  @Field(() => ID)
  id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  isoAlpha2: string;

  @Field()
  @Prop({ required: true })
  isoAlpha3: string;
}
export const CountrySchema = SchemaFactory.createForClass(Country);
