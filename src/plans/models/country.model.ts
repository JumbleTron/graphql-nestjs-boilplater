import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { PlanDefinition } from './plan-definition.model';
import { Network } from "./network.model";

export type CountryDocument = HydratedDocument<Country>;

@ObjectType()
@Schema()
export class Country {
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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'PlanDefinition' })
  planDefinition: PlanDefinition;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Network' }] })
  networks: Network[];
}
export const CountrySchema = SchemaFactory.createForClass(Country);
