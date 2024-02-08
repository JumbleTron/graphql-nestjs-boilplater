import { Injectable } from '@nestjs/common';
import { Country } from '../models/country.model';
import { Network } from '../models/network.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CountriesService {
  private networks: Map<string, Network> = new Map();

  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
  ) {}

  async getCountriesForPlanDefinition(id: string): Promise<Country[]> {
    return await this.countryModel
      .find({
        planDefinition: {
          id,
        },
      })
      .exec();
  }
}
