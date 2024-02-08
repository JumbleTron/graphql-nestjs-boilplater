import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Country } from '../models/country.model';
import { Network } from '../models/network.model';
import { NetworkService } from '../services/network.service';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private networkService: NetworkService) {}

  @ResolveField('networks', () => [Network])
  async getNetworks(@Parent() country: Country) {
    return this.networkService.getNetworkForCountry(country.id);
  }
}
