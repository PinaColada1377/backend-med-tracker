import { Expose, Type } from 'class-transformer';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'medication' })
export class MedicationEntity extends BaseEntity<MedicationEntity> {

  @Column({ unique: true })
  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  @Column()
  description: string;

  @Expose()
  @Column({ default: 0 })
  count: number;

  @Expose()
  @Column({ default: 0 })
  destinationCount: number;

  @Expose()
  @Column()
  @ApiProperty()
  userId: number;

  @Expose()
  @ApiProperty()
  @Type(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  user?: UserEntity;

}
