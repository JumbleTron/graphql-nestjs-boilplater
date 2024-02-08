import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Country } from './country.model';

export type PlanDefinitionDocument = HydratedDocument<PlanDefinition>;

@ObjectType()
@Schema()
export class PlanDefinition {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field(() => Int, {
    description: 'Data amount in MB',
  })
  @Prop({ required: true })
  dataAmount: number;

  @Field(() => Int, {
    description: 'Price in US cents',
  })
  @Prop({ required: true })
  price: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Country' }] })
  countries: Country[];
}

export const planDefinitionSchema =
  SchemaFactory.createForClass(PlanDefinition);
