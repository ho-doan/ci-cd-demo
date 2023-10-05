import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NomineeService } from './nominee.service';
import { CreateNomineeDto } from './dto/create-nominee.dto';
import { UpdateNomineeDto } from './dto/update-nominee.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('nominee')
@Controller('nominee')
export class NomineeController {
  constructor(private readonly nomineeService: NomineeService) {}

  @Post()
  create(@Body() createNomineeDto: CreateNomineeDto) {
    return this.nomineeService.create(createNomineeDto);
  }

  @Get()
  findAll() {
    return this.nomineeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nomineeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNomineeDto: UpdateNomineeDto) {
    return this.nomineeService.update(+id, updateNomineeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomineeService.remove(+id);
  }
}
