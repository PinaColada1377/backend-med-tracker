import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '@libs/entities';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {

  public getUser(conditions: Partial<UserEntity>): Promise<UserEntity> {
    return this.findOne({ where: conditions });
  }

}
