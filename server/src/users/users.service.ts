import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}
  create(dto: CreateUserDto) {
    return this.repository.save({
      fullName: dto.name,
      createDate: new Date(),
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({
      id: id,
    });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, {
      fullName: dto.name,
      createDate: new Date(),
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
