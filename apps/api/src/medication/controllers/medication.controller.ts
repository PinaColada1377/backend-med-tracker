import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Auth, RequestWithUser } from '@libs/auth';
import { IdParamDTO } from '@libs/dtos';
import {
  CreateMedicationBodyDTO,
  GetMedicationListParamsDTO,
  GetMedicationListResponseDTO,
  MedicationResponseDTO,
  UpdateMedicationBodyDTO,
} from '../dtos/medication.controller.dtos';
import { MedicationService } from '../services';

@ApiTags('medication')
@Controller('medication')
export class MedicationController {

  constructor(
    private readonly medicationService: MedicationService,
  ) {
  }

  @Get()
  @Auth()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: GetMedicationListResponseDTO })
  async getMedicationList(
    @Req() { user }: RequestWithUser,
      @Query() query: GetMedicationListParamsDTO,
  ): Promise<GetMedicationListResponseDTO> {
    return new GetMedicationListResponseDTO(
      await this.medicationService.getMedicationList(user.id, query),
    );
  }

  @Post()
  @Auth()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: MedicationResponseDTO })
  async createMedication(
    @Req() { user }: RequestWithUser,
      @Body() body: CreateMedicationBodyDTO,
  ): Promise<MedicationResponseDTO> {
    await this.medicationService.createMedication(user.id, body);
    return new MedicationResponseDTO();
  }

  @Patch(':id')
  @Auth()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: MedicationResponseDTO })
  async updateMedication(
    @Req() { user }: RequestWithUser,
      @Param() { id }: IdParamDTO,
      @Body() body: UpdateMedicationBodyDTO,
  ): Promise<MedicationResponseDTO> {
    await this.medicationService.updateMedication(user.id, id, body);
    return new MedicationResponseDTO();
  }

}
