import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Route } from './entities/route.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RouteService {
  constructor(
    @InjectRepository(Route)
    private repository: Repository<Route>,
  ) {}
  async create(CreateRouteDto: CreateRouteDto) {
    try {
      return await this.repository.save({
        routeType:{
          id: CreateRouteDto.routeType
        },
        nameRoute: CreateRouteDto.nameRoute,
        time: CreateRouteDto.time,
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

  async update(id: number, UpdateRouteDto: UpdateRouteDto) {
    console.log('routeType', UpdateRouteDto.routeType);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const route = new Route();
    route.nameRoute = UpdateRouteDto.nameRoute;
    route.time = UpdateRouteDto.time;
    return this.repository.update(id, route);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
