import { PlanDefinition } from '../models/plan-definition.model';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { randomPrice, randomUsage } from "../../core/utils/randomNumber";

@Injectable()
export class PlanDefinitionsService {
  private planDefinitions: Map<string, PlanDefinition> = new Map();

  constructor() {
    this.init();
  }

  getList(): PlanDefinition[] {
    return Array.from(this.planDefinitions, ([, value]) => value);
  }

  getById(id: string): PlanDefinition | null {
    if (!this.planDefinitions.has(id)) {
      return null;
    }

    return this.planDefinitions.get(id);
  }

  private init(): void {
    for (let i = 0; i < 10; ) {
      const planDefinition = new PlanDefinition();
      planDefinition.id = uuid();
      planDefinition.name = `Plan definition ${++i}`;
      planDefinition.price = randomPrice();
      planDefinition.dataAmount = randomUsage()

      this.planDefinitions.set(planDefinition.id, planDefinition);
    }
  }
}
