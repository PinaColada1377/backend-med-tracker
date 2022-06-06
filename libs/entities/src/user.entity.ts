import { Expose, Exclude } from 'class-transformer';
import { Column, Entity, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';
import { MedicationEntity } from './medication.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity<UserEntity> {

  @Column({ unique: true })
  @Expose()
  @ApiProperty()
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column({ nullable: true })
  password: string;

  @OneToMany(
    () => MedicationEntity,
    (medication) => medication.user,
  )
  medications: MedicationEntity[];

}
