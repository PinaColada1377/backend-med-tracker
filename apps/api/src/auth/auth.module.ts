import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JWT } from 'config';
import { AuthLibModule } from '@libs/auth';
import * as Controllers from './controllers';
import * as Services from './services';

@Module({
  imports: [
    AuthLibModule,
    JwtModule.register({
      secret: JWT.SECRET_KEY,
    }),
  ],
  controllers: Object.values(Controllers),
  providers: Object.values(Services),
})
export class AuthModule { }
