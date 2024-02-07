import { Module } from '@nestjs/common';
import { PlanDefinitionsService } from './services/plan-definitions.service';
import { PlanDefinitionResolver } from './resolvers/plan-definition.resolver';
import { CountriesService } from './services/countries.service';
import { CountryResolver } from './resolvers/country.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from './models/country.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
  ],
  controllers: [],
  providers: [
    CountriesService,
    PlanDefinitionsService,
    CountryResolver,
    PlanDefinitionResolver,
  ],
})
export class PlansModule {}
