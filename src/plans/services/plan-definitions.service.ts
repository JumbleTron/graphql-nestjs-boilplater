import { PlanDefinition } from '../models/plan-definition.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PlanDefinitionsService {
  constructor(
    @InjectModel(PlanDefinition.name)
    private planDefinitionModel: Model<PlanDefinition>,
  ) {}

  async getList(): Promise<PlanDefinition[]> {
    return await this.planDefinitionModel.find().exec();
  }

  async getById(id: string): Promise<PlanDefinition | null> {
    return await this.planDefinitionModel.findById(id).exec();
  }
}
