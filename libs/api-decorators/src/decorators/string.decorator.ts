import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { isDefined, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { ERRORS } from '@libs/constants';
import { Decorator } from './decorator.type';

type PropertyStringParams = {
  isOptional?: boolean;
  minLength?: number;
  maxLength?: number;
  example?: string;
  pattern?: RegExp;
};

export function ApiPropertyString({ isOptional, minLength, maxLength, example, pattern }: PropertyStringParams = {}): Decorator {
  const propertyOptions: ApiPropertyOptions = {
    type: String,
    example,
    ...(pattern && { pattern: pattern.toString() }),
    ...(minLength && { minLength }),
    ...(maxLength && { maxLength }),
  };

  return applyDecorators(
    ...isOptional
      ? [IsOptional(), ApiPropertyOptional(propertyOptions)]
      : [ApiProperty(propertyOptions)],
    IsString(),
    ...!isNaN(minLength)
      ? [MinLength(minLength, { message: ERRORS.TOO_SHORT_STRING, context: { minLength } })]
      : [],
    ...!isNaN(maxLength)
      ? [MaxLength(maxLength, { message: ERRORS.TOO_LONG_STRING, context: { maxLength } })]
      : [],
    ...isDefined(pattern)
      ? [Matches(pattern, { message: ERRORS.NOT_MATCHES_TO_PATTERN, context: { pattern: pattern.toString() } })]
      : [],
  );
}
