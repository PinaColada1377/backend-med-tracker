import { IsNumber, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class IdParamDTO {
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  @IsNumber()
  id: number;
}
