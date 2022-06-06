import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthLibModule } from '@libs/auth';
import * as Controllers from './controllers';
import * as Services from './services';
import * as Repository from './repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature(Object.values(Repository)),
    AuthLibModule,
  ],
  controllers: Object.values(Controllers),
  providers: Object.values(Services),
})
export class MedicationModule { }
