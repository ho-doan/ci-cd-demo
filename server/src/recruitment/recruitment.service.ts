import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { UpdateRecruitmentDto } from './dto/update-recruitment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recruitment } from './entities/recruitment.entity';

@Injectable()
export class RecruitmentService {
  constructor(
    @InjectRepository(Recruitment)
    private repository: Repository<Recruitment>,
  ) {}
  async create(createRecruitmentDto: CreateRecruitmentDto) {
    try {
      return await this.repository.save({
        
        personalInformation:{
          id: createRecruitmentDto.personalInformation
        },
        workingForm:{
          id: createRecruitmentDto.workingForm
        },
        school:{
          id: createRecruitmentDto.school
        },
        workingTime:{
          id: createRecruitmentDto.workingTime
        },
        experience: createRecruitmentDto.experience,
        language: createRecruitmentDto.language,
        languageCertificate: createRecruitmentDto.languageCertificate,
        file: createRecruitmentDto.file,
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, updateRecruitmentDto: UpdateRecruitmentDto) {
    console.log('education', updateRecruitmentDto.education);
    console.log('personalInformation', updateRecruitmentDto.personalInformation);
    console.log('workingForm', updateRecruitmentDto.workingForm);
    console.log('school', updateRecruitmentDto.school);
    console.log('workingTime', updateRecruitmentDto.workingTime);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const recruitment = new Recruitment();
    recruitment.experience = updateRecruitmentDto.experience;
    recruitment.language = updateRecruitmentDto.language;
    recruitment.languageCertificate = updateRecruitmentDto.languageCertificate;
    recruitment.file = updateRecruitmentDto.file;
    return this.repository.update(id, recruitment);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
