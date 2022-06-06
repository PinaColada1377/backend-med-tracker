import { EntityRepository, Repository } from 'typeorm';
import { MedicationEntity } from '@libs/entities';
import { MEDICATION_LIST_SORT_TYPES } from '../constants';
import { GetMedicationListParamsDTO } from '../dtos/medication.controller.dtos';

@EntityRepository(MedicationEntity)
export class MedicationRepository extends Repository<MedicationEntity> {

  getMedicationList(userId: number, query: GetMedicationListParamsDTO): Promise<MedicationEntity[]> {
    const {
      sort,
      order,
      search,
    } = query;

    const qb = this.createQueryBuilder('m')
      .where('m.userId = :userId', { userId });

    if (search) {
      qb.andWhere('m.name ILIKE :search', { search: this.getSearchString(search) });
    }

    qb.orderBy(this.getMedicationListSortField(order), sort as 'ASC'|'DESC');
    return qb.getMany();
  }

  private getSearchString(search: string): string {
    search = search.replace(/%/g, '\\%').replace(/'/g, '\'\'');
    const searchString = `%${search.toLocaleLowerCase()}%`;
    return searchString;
  }

  private getMedicationListSortField(order: string): string {
    switch (order) {
    case MEDICATION_LIST_SORT_TYPES.NAME:
      return 'm."name"';
    case MEDICATION_LIST_SORT_TYPES.CHANGE_DATE:
      return 'm."updatedAt"';
    default:
      return 'm."updatedAt"';
    }
  }
}
