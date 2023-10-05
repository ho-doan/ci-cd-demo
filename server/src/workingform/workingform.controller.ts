import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkingformService } from './workingform.service';
import { CreateWorkingFormDto } from './dto/create-workingform.dto';
import { UpdateWorkingFormDto } from './dto/update-workingform.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('workingform')
@Controller('workingform')
export class WorkingformController {
  constructor(private readonly workingformService: WorkingformService) {}

  @Post()
  create(@Body() createWorkingformDto: CreateWorkingFormDto) {
    return this.workingformService.create(createWorkingformDto);
  }

  @Get()
  findAll() {
    return this.workingformService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workingformService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkingformDto: UpdateWorkingFormDto) {
    return this.workingformService.update(+id, updateWorkingformDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workingformService.remove(+id);
  }
}
