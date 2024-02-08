import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Country } from './country.model';

export type NetworkDocument = HydratedDocument<Network>;

@ObjectType()
@Schema()
export class Network {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  mnc: string;

  @Field()
  @Prop({ required: true })
  mcc: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Country' })
  country: Country;
}
export const networkSchema = SchemaFactory.createForClass(Network);
