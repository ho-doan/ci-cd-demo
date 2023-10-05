import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalinformationService } from './personalinformation.service';
import { CreatePersonalinformationDto } from './dto/create-personalinformation.dto';
import { UpdatePersonalinformationDto } from './dto/update-personalinformation.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('personalInformation')
@Controller('personalinformation')
export class PersonalinformationController {
  constructor(private readonly personalinformationService: PersonalinformationService) {}

  @Post()
  create(@Body() createPersonalinformationDto: CreatePersonalinformationDto) {
    return this.personalinformationService.create(createPersonalinformationDto);
  }

  @Get()
  findAll() {
    return this.personalinformationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalinformationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalinformationDto: UpdatePersonalinformationDto) {
    return this.personalinformationService.update(+id, updatePersonalinformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalinformationService.remove(+id);
  }
}
