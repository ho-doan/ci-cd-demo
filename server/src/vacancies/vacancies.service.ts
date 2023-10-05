import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacancy } from './entities/vacancy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VacanciesService {
  constructor(
    @InjectRepository(Vacancy)
    private repository: Repository<Vacancy>,
  ) {}
  async create(CreateVacancyDto: CreateVacancyDto) {
    return await this.repository.save({
      name: CreateVacancyDto.name,
      jobDescription: CreateVacancyDto.jobDescription,
      jobRequirements: CreateVacancyDto.jobRequirements
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateVacancyDto: UpdateVacancyDto) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const vacancy = new Vacancy();
    vacancy.name = UpdateVacancyDto.name;
    vacancy.jobDescription = UpdateVacancyDto.jobDescription,
    vacancy.jobRequirements = UpdateVacancyDto.jobRequirements
    return this.repository.update(id, vacancy);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
