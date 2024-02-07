import { Injectable } from '@nestjs/common';
import { Country } from '../models/country.model';
import { Network } from '../models/network.model';
import { v4 as uuid } from 'uuid';
import { randomMnc } from '../../core/utils/randomNumber';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CountriesService {
  private networks: Map<string, Network> = new Map();

  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
  ) {}

  getCountriesForPlanDefinition(id: string): Country[] {
    const country = new Country();
    country.id = id;
    country.name = 'Poland';
    country.isoAlpha2 = 'PL';
    country.isoAlpha3 = 'POL';

    return [country];
  }

  async getNetworksForCountry(id: string): Promise<Network[]> {
    const country = await this.countryModel.findById(id).exec();
    console.log(country);

    this.networks.clear();
    this.init(id);
    return Array.from(this.networks, ([, value]) => value);
  }

  private init(id: string): void {
    for (let i = 0; i < 10; i++) {
      const network = new Network();
      network.id = uuid();
      network.name = `Network ${i}`;
      network.mcc = id;
      network.mnc = randomMnc();

      this.networks.set(network.id, network);
    }
  }
}
