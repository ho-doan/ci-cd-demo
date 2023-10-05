import { Injectable } from '@nestjs/common';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Train } from './entities/train.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrainsService {
  constructor(
    @InjectRepository(Train)
    private repository: Repository<Train>,
  ) {}
  create(dto: CreateTrainDto) {
    return this.repository.save({
      description: dto.description,
      image: dto.image,
      name: dto.name,
      outputCommitment: dto.outputCommitment,
      price: dto.price,
      time: dto.time,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findBy({
      id: id,
    });
  }

  update(id: number, dto: UpdateTrainDto) {
    return this.repository.update(id, {
      description: dto.description,
      image: dto.image,
      name: dto.name,
      outputCommitment: dto.outputCommitment,
      price: dto.price,
      time: dto.time,
    });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
