import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoutetypeService } from './routetype.service';
import { CreateRoutetypeDto } from './dto/create-routetype.dto';
import { UpdateRoutetypeDto } from './dto/update-routetype.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('routetype')
@Controller('routetype')
export class RoutetypeController {
  constructor(private readonly routetypeService: RoutetypeService) {}

  @Post()
  create(@Body() createRoutetypeDto: CreateRoutetypeDto) {
    return this.routetypeService.create(createRoutetypeDto);
  }

  @Get()
  findAll() {
    return this.routetypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routetypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoutetypeDto: UpdateRoutetypeDto) {
    return this.routetypeService.update(+id, updateRoutetypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routetypeService.remove(+id);
  }
}
