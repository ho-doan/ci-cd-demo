import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkingtimeService } from './workingtime.service';
import { CreateWorkingtimeDto } from './dto/create-workingtime.dto';
import { UpdateWorkingtimeDto } from './dto/update-workingtime.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('workingtime')
@Controller('workingtime')
export class WorkingtimeController {
  constructor(private readonly workingtimeService: WorkingtimeService) {}

  @Post()
  create(@Body() createWorkingtimeDto: CreateWorkingtimeDto) {
    return this.workingtimeService.create(createWorkingtimeDto);
  }

  @Get()
  findAll() {
    return this.workingtimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workingtimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkingtimeDto: UpdateWorkingtimeDto) {
    return this.workingtimeService.update(+id, updateWorkingtimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workingtimeService.remove(+id);
  }
}
