import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../../../ormconfig';
import { AuthModule } from './auth';
import { MedicationModule } from './medication';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    MedicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
