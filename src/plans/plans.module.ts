import { Module } from '@nestjs/common';
import { PlanDefinitionsService } from './services/plan-definitions.service';
import { PlanDefinitionResolver } from './resolvers/plan-definition.resolver';
import { CountriesService } from './services/countries.service';
import { CountryResolver } from './resolvers/country.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [
    CountriesService,
    PlanDefinitionsService,
    CountryResolver,
    PlanDefinitionResolver,
  ],
})
export class PlansModule {}
