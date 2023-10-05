import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudytimeService } from './studytime.service';
import { CreateStudytimeDto } from './dto/create-studytime.dto';
import { UpdateStudytimeDto } from './dto/update-studytime.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('studyTime')
@Controller('studytime')
export class StudytimeController {
  constructor(private readonly studytimeService: StudytimeService) {}

  @Post()
  create(@Body() createStudytimeDto: CreateStudytimeDto) {
    return this.studytimeService.create(createStudytimeDto);
  }

  @Get()
  findAll() {
    return this.studytimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studytimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudytimeDto: UpdateStudytimeDto) {
    return this.studytimeService.update(+id, updateStudytimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studytimeService.remove(+id);
  }
}
