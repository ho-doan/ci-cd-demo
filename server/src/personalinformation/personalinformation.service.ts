import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonalinformationDto } from './dto/create-personalinformation.dto';
import { UpdatePersonalinformationDto } from './dto/update-personalinformation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Personalinformation } from './entities/personalinformation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonalinformationService {
  constructor(
    @InjectRepository(Personalinformation)
    private repository: Repository<Personalinformation>,
  ) {}
  async create(CreatePersonalinformationDto: CreatePersonalinformationDto) {
    return await this.repository.save({
      fullName: CreatePersonalinformationDto.fullName,
      dayOfBirth: CreatePersonalinformationDto.dayOfBirth,
      sex: CreatePersonalinformationDto.sex,
      phone: CreatePersonalinformationDto.phone,
      email: CreatePersonalinformationDto.email,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdatePersonalinformationDto: UpdatePersonalinformationDto) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const personalInformation = new Personalinformation();
    personalInformation.fullName = UpdatePersonalinformationDto.fullName;
    personalInformation.dayOfBirth = UpdatePersonalinformationDto.dayOfBirth;
    personalInformation.sex = UpdatePersonalinformationDto.sex;
    personalInformation.phone = UpdatePersonalinformationDto.phone;
    personalInformation.email = UpdatePersonalinformationDto.email;
    return this.repository.update(id, personalInformation);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
