import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
@Entity()
export class User {
  @ApiProperty({
    description: 'id user',
    default: randomUUID(),
    type: UUID,
  })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @ApiProperty({
    description: 'full name user',
    default: 'Nguyen Van A',
    type: 'string',
  })
  @Column()
  fullName: string;
  @ApiProperty({
    description: 'date time create user',
    default: Date.now(),
    type: Date,
  })
  @Column({ type: 'datetime' })
  createDate: Date;
}
