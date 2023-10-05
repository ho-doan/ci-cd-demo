import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegisterforstudyDto } from './dto/create-registerforstudy.dto';
import { UpdateRegisterforstudyDto } from './dto/update-registerforstudy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Registerforstudy } from './entities/registerforstudy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterforstudyService {
  constructor(
    @InjectRepository(Registerforstudy)
    private repository: Repository<Registerforstudy>,
  ) {}
  async create(CreateRegisterforstudyDto: CreateRegisterforstudyDto) {
    try {
      return await this.repository.save({
        personalInformation:{
          id: CreateRegisterforstudyDto.personalInformation
        },
        openingSchedule:{
          id: CreateRegisterforstudyDto.openingSchedule
        },
        studyTime:{
          id: CreateRegisterforstudyDto.studyTime
        },
        registrationDate: CreateRegisterforstudyDto.registrationDate,
      });
    } catch (error) {
      
    }
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateRegisterforstudyDto: UpdateRegisterforstudyDto) {
    console.log('personalInformation',UpdateRegisterforstudyDto.personalInformation);
    console.log('openingSchedule',UpdateRegisterforstudyDto.openingSchedule);
    console.log('studyTime',UpdateRegisterforstudyDto.studyTime);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const registerForStudy = new Registerforstudy();
    registerForStudy.registrationDate = UpdateRegisterforstudyDto.registrationDate;
    return this.repository.update(id, registerForStudy);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
