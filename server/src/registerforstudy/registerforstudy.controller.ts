import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterforstudyService } from './registerforstudy.service';
import { CreateRegisterforstudyDto } from './dto/create-registerforstudy.dto';
import { UpdateRegisterforstudyDto } from './dto/update-registerforstudy.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('registerforstudy')
@Controller('registerforstudy')
export class RegisterforstudyController {
  constructor(private readonly registerforstudyService: RegisterforstudyService) {}

  @Post()
  create(@Body() createRegisterforstudyDto: CreateRegisterforstudyDto) {
    return this.registerforstudyService.create(createRegisterforstudyDto);
  }

  @Get()
  findAll() {
    return this.registerforstudyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerforstudyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterforstudyDto: UpdateRegisterforstudyDto) {
    return this.registerforstudyService.update(+id, updateRegisterforstudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerforstudyService.remove(+id);
  }
}
