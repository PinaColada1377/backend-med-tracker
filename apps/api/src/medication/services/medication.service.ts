import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ERRORS } from '@libs/constants';
import { MedicationEntity } from '@libs/entities';
import { CreateMedicationBodyDTO, GetMedicationListParamsDTO, UpdateMedicationBodyDTO } from '../dtos/medication.controller.dtos';
import { MedicationRepository } from '../repositories';

@Injectable()
export class MedicationService {

  constructor(
    private readonly medicationRepository: MedicationRepository,
  ) {}

  async createMedication(userId: number, body: CreateMedicationBodyDTO): Promise<void> {
    await this.medicationRepository.save({
      ...body,
      userId,
    });
  }

  async updateMedication(userId: number, medicationId: number, body: UpdateMedicationBodyDTO): Promise<void> {
    const medication = await this.getMedicationOrFail({ id: medicationId, userId });

    if (
      body.destinationCount
      && medication.count > body.destinationCount
      || medication.destinationCount < body.count
    ) {
      throw new BadRequestException([{ field: '', message: ERRORS.DESTINATION_LESS_THEN_COUNT }]);
    }

    await this.medicationRepository.update({ id: medication.id }, body);
  }

  async getMedicationList(userId: number, query: GetMedicationListParamsDTO): Promise<{ items: MedicationEntity[] }> {
    const items = await this.medicationRepository.getMedicationList(userId, query);
    return {
      items,
    };
  }

  async getMedicationOrFail(conditions: Partial<MedicationEntity>): Promise<MedicationEntity> {
    const medication = await this.medicationRepository.findOne({ where: conditions });
    if (!medication) {
      throw new NotFoundException([{ field: '', message: ERRORS.MEDICATION_NOT_FOUND }]);
    }
    return medication;

  }

}
