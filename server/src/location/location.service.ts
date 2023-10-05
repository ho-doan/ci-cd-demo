import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { CreateLocationDto } from "./dto/create-location.dto";
import {Location} from './entities/location.entity';


@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private repository : Repository<Location>,
  ){}
  async create(createLocationDto: CreateLocationDto) {
    try {
      return await this.repository.save({
        name: createLocationDto.name,
        address: createLocationDto.address,
        note: createLocationDto.note,
        email: createLocationDto.email,
        school: {
          id: createLocationDto.school
        }
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
  
    async update(id: number, updateLocationDto: UpdateLocationDto) {
      console.log('school',updateLocationDto.school)
      const rec = await this.findOne(id);
      if (rec === undefined) {
        throw new NotFoundException();
      }
      const location = new Location();
      location.name = UpdateLocationDto.name;
      location.address = updateLocationDto.address;
      location.note = updateLocationDto.note;
      location.email = updateLocationDto.email;
      return this.repository.update(id, location);
    }
  
    async remove(id: number) {
      const rec = await this.findOne(id);
      if (rec === undefined) {
        throw new NotFoundException();
      }
      return this.repository.delete(id);
    }
}
