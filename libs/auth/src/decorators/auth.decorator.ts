import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCookieAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { COOKIE } from '@libs/constants';

export function Auth(): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void {
  return applyDecorators(
    UseGuards(AuthGuard('jwt')),
    ApiCookieAuth(COOKIE.ACCESS_TOKEN),
    ApiBearerAuth(COOKIE.ACCESS_TOKEN),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}
