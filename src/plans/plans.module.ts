import { Module } from '@nestjs/common';
import { PlanDefinitionsService } from './services/plan-definitions.service';
import { PlanDefinitionResolver } from './resolvers/plan-definition.resolver';
import { CountriesService } from './services/countries.service';
import { CountryResolver } from './resolvers/country.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from './models/country.model';
import { NetworkService } from './services/network.service';
import { Network, networkSchema } from './models/network.model';
import {
  PlanDefinition,
  planDefinitionSchema,
} from './models/plan-definition.model';
import { PlanDefinitionFixture } from './fixtures/plan-definition.fixture';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlanDefinition.name, schema: planDefinitionSchema },
      { name: Country.name, schema: CountrySchema },
      { name: Network.name, schema: networkSchema },
    ]),
  ],
  controllers: [],
  providers: [
    CountriesService,
    NetworkService,
    PlanDefinitionsService,
    CountryResolver,
    PlanDefinitionResolver,
    PlanDefinitionFixture,
  ],
})
export class PlansModule {}
