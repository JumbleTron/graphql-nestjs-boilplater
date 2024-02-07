import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PlanDefinition } from '../models/plan-definition.model';
import { PlanDefinitionsService } from '../services/plan-definitions.service';
import { Country } from '../models/country.model';
import { CountriesService } from '../services/countries.service';

@Resolver(() => PlanDefinition)
export class PlanDefinitionResolver {
  constructor(
    private planDefinitionService: PlanDefinitionsService,
    private countriesService: CountriesService,
  ) {}

  @Query(() => [PlanDefinition])
  async planDefinitions() {
    return this.planDefinitionService.getList();
  }

  @Query(() => PlanDefinition)
  async planDefinition(@Args('id', { type: () => ID }) id: string) {
    return this.planDefinitionService.getById(id);
  }

  @ResolveField('countries', () => [Country])
  async getCountries(@Parent() planDefinition: PlanDefinition) {
    return this.countriesService.getCountriesForPlanDefinition(
      planDefinition.id,
    );
  }
}
