import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contract } from './entities/contract.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(Contract)
    private repository: Repository<Contract>,
  ) {}
  async create(CreateContractDto: CreateContractDto) {
    try {
      return await this.repository.save({
        startDay: CreateContractDto.startDay,
        endDay: CreateContractDto.endDay,
        sighDay: CreateContractDto.sighDay,
        content: CreateContractDto.content,
        signatureTimes: CreateContractDto.signatureTimes,
        duration: CreateContractDto.duration,
        wageAgreement: CreateContractDto.wageAgreement,
        nominee: {
          id: CreateContractDto.nominee
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
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateContractDto: UpdateContractDto) {
    console.log('nominee' , UpdateContractDto.nominee);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const contract = new Contract();
    contract.startDay = UpdateContractDto.startDay;
    contract.endDay = UpdateContractDto.endDay;
    contract.sighDay = UpdateContractDto.sighDay;
    contract.content = UpdateContractDto.content;
    contract.signatureTimes = UpdateContractDto.signatureTimes;
    contract.duration = UpdateContractDto.duration;
    contract.wageAgreement = UpdateContractDto.wageAgreement;
    return this.repository.update(id, contract);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
