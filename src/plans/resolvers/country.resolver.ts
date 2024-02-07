import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Country } from '../models/country.model';
import { CountriesService } from '../services/countries.service';
import { Network } from '../models/network.model';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private countriesService: CountriesService) {}

  @ResolveField('networks', () => [Network])
  async getNetworks(@Parent() country: Country) {
    return this.countriesService.getNetworksForCountry(country.id);
  }
}
