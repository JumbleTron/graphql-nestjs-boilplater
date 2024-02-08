import { InjectModel } from '@nestjs/mongoose';
import { PlanDefinition } from '../models/plan-definition.model';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Country } from '../models/country.model';
import { Network } from '../models/network.model';

@Injectable()
export class PlanDefinitionFixture implements OnModuleInit {
  private enabled = false;
  constructor(
    @InjectModel(PlanDefinition.name)
    private planDefinitionModel: Model<PlanDefinition>,
    @InjectModel(Country.name)
    private countryModel: Model<Country>,
    @InjectModel(Network.name)
    private networkModel : Model<Network>,
  ) {}

  async onModuleInit(): Promise<void> {
    if (!this.enabled) {
      return;
    }

    const documents = [];
    for (let i = 0; i < 10; i++) {
      const planDefinition = new PlanDefinition();
      planDefinition.name = faker.lorem.words(1);
      planDefinition.price = Number(faker.finance.amount({ min: 1000 }));
      planDefinition.dataAmount = faker.number.int({
        min: 1024,
        max: 1024 * 10,
      });
      const country = new Country();
      country.name = faker.location.country();
      country.isoAlpha3 = faker.location.countryCode('alpha-3');
      country.isoAlpha2 = faker.location.countryCode('alpha-2');

      const network = new Network();
      network.name = faker.lorem.words(1);
      network.mnc = faker.number.int({ min: 100, max: 500 }).toString();
      network.mcc = faker.number.int({ min: 100, max: 500 }).toString();

      const networkDoc = await this.networkModel.create(network);
      country.networks = [networkDoc];
      const countryDoc = await this.countryModel.create(country);

      planDefinition.countries = [countryDoc];
      documents.push(planDefinition);
    }
    await this.planDefinitionModel.insertMany(documents);
  }
}
