import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Education } from './entities/education.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EducationService {
 constructor(
  @InjectRepository(Education)
  private repository: Repository<Education>,
 ){}
 async create(createEducationDto:CreateEducationDto){
  try {
    return await this.repository.save({
      mediumScore: createEducationDto.mediumScore,
      graduation: createEducationDto.graduation,
      school: {
        id: createEducationDto.school
      }
    })
  } catch (error) {
    return new InternalServerErrorException();
  }
 }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({id:id});
  }

  async update(id: number, updateEducationDto: UpdateEducationDto) {
    console.log('school' , updateEducationDto.school);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const education = new Education();
    education.mediumScore = updateEducationDto.mediumScore;
    education.graduation = updateEducationDto.graduation;
    return this.repository.update(id, education);
  }

 async remove(id: number) {
   const rec = await this.findOne(id);
   if(rec === undefined){
    throw new NotFoundException();
   }
   return this.repository.delete(id);
  }
}
