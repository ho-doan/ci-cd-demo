import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateRecruimentmanypositionDto } from './dto/create-recruimentmanyposition.dto';
import { UpdateRecruimentmanypositionDto } from './dto/update-recruimentmanyposition.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recruimentmanyposition } from './entities/recruimentmanyposition.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecruimentmanypositionsService {
  constructor(
    @InjectRepository(Recruimentmanyposition)
    private repository: Repository<Recruimentmanyposition>,
  ) {}
  async create(CreateRecruimentmanypositionDto: CreateRecruimentmanypositionDto) {
    try {
      return await this.repository.save({
        recruitment:{
          id: CreateRecruimentmanypositionDto.recruitment
        },
        vanCanCy:{
          id: CreateRecruimentmanypositionDto.vanCanCy
        },
        technology:{
          id: CreateRecruimentmanypositionDto.technology
        },
        workexperience: CreateRecruimentmanypositionDto.workexperience,
        applicationstatus: CreateRecruimentmanypositionDto.applicationstatus,
        confirmemployment: CreateRecruimentmanypositionDto.confirmemployment,
        contract:{
          id: CreateRecruimentmanypositionDto.contract
        },
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id});
  }

  async update(id: number, UpdateRecruimentmanypositionDto: UpdateRecruimentmanypositionDto) {
    console.log('recruitment', UpdateRecruimentmanypositionDto.recruitment);
    console.log('vanCanCy', UpdateRecruimentmanypositionDto.vanCanCy);
    console.log('technology', UpdateRecruimentmanypositionDto.technology);
    console.log('contract', UpdateRecruimentmanypositionDto.contract);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const recruimentmanyposition = new Recruimentmanyposition();
    recruimentmanyposition.workexperience = UpdateRecruimentmanypositionDto.workexperience;
    recruimentmanyposition.applicationstatus = UpdateRecruimentmanypositionDto.applicationstatus;
    recruimentmanyposition.confirmemployment = UpdateRecruimentmanypositionDto.confirmemployment;
    return this.repository.update(id, recruimentmanyposition);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
