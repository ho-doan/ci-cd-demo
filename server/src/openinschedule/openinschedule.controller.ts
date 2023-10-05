import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpeninscheduleService } from './openinschedule.service';
import { CreateOpeninscheduleDto } from './dto/create-openinschedule.dto';
import { UpdateOpeninscheduleDto } from './dto/update-openinschedule.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('openinschedule')
@Controller('openinschedule')
export class OpeninscheduleController {
  constructor(private readonly openinscheduleService: OpeninscheduleService) {}

  @Post()
  create(@Body() createOpeninscheduleDto: CreateOpeninscheduleDto) {
    return this.openinscheduleService.create(createOpeninscheduleDto);
  }

  @Get()
  findAll() {
    return this.openinscheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.openinscheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpeninscheduleDto: UpdateOpeninscheduleDto) {
    return this.openinscheduleService.update(+id, updateOpeninscheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.openinscheduleService.remove(+id);
  }
}
