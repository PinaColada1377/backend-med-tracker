import { ApiProperty, ApiPropertyOptional, PickType } from '@nestjs/swagger';
import { Expose, Transform, Type } from 'class-transformer';
import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { SORT_DIRECTION } from '@libs/constants/common.constatns';
import { ConstructableDTO } from '@libs/dtos';
import { MedicationEntity } from '@libs/entities';
import { MEDICATION_LIST_SORT_TYPES } from '../constants';

export class MedicationResponseDTO {

}

export class GetMedicationListParamsDTO {

  @ApiProperty({
    required: false,
    default: SORT_DIRECTION.ASC,
    enum: Object.values(SORT_DIRECTION),
  })
  @IsEnum(SORT_DIRECTION)
  sort: string = SORT_DIRECTION.ASC;

  @ApiProperty({
    required: false,
    default: MEDICATION_LIST_SORT_TYPES.CHANGE_DATE,
    enum: Object.values(MEDICATION_LIST_SORT_TYPES),
  })
  @IsEnum(MEDICATION_LIST_SORT_TYPES)
  order: string = MEDICATION_LIST_SORT_TYPES.CHANGE_DATE;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value && value.trim())
  search: string;

}

export class MedicationInfo extends PickType(
  MedicationEntity,
  ['id', 'name', 'description', 'count', 'destinationCount'],
) {

}

export class GetMedicationListResponseDTO extends ConstructableDTO<GetMedicationListResponseDTO> {

  @Expose()
  @ApiProperty({ isArray: true, type: MedicationInfo })
  @Type(() => MedicationInfo)
  items: MedicationInfo[];

}

export class CreateMedicationBodyDTO {

  @ApiProperty()
  @IsString()
  @Type(() => String)
  name: string;

  @ApiProperty()
  @IsString()
  @Type(() => String)
  description: string;

  @ApiPropertyOptional()
  @IsInt()
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  destinationCount?: number;

  @ApiPropertyOptional()
  @IsInt()
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  count?: number;

}

export class UpdateMedicationBodyDTO {

  @ApiProperty()
  @IsString()
  @Type(() => String)
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsString()
  @Type(() => String)
  @IsOptional()
  description?: string;

  @ApiPropertyOptional()
  @IsInt()
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  destinationCount?: number;

  @ApiPropertyOptional()
  @IsInt()
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  count?: number;

}
