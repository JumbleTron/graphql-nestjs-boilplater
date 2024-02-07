import { Injectable } from '@nestjs/common';
import { Country } from '../models/country.model';
import { Network } from '../models/network.model';
import { v4 as uuid } from 'uuid';
import { randomMnc } from '../../core/utils/randomNumber';

@Injectable()
export class CountriesService {
  private networks: Map<string, Network> = new Map();

  getCountriesForPlanDefinition(id: string): Country[] {
    const country = new Country();
    country.id = id;
    country.name = 'Poland';
    country.isoAlpha2 = 'PL';
    country.isoAlpha3 = 'POL';

    return [country];
  }

  getNetworksForCountry(id: string): Network[] {
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
