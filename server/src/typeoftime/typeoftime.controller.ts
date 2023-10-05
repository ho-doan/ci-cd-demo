import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeoftimeService } from './typeoftime.service';
import { CreateTypeoftimeDto } from './dto/create-typeoftime.dto';
import { UpdateTypeoftimeDto } from './dto/update-typeoftime.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('typeOfTime')
@Controller('typeoftime')
export class TypeoftimeController {
  constructor(private readonly typeoftimeService: TypeoftimeService) {}

  @Post()
  create(@Body() createTypeoftimeDto: CreateTypeoftimeDto) {
    return this.typeoftimeService.create(createTypeoftimeDto);
  }

  @Get()
  findAll() {
    return this.typeoftimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeoftimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeoftimeDto: UpdateTypeoftimeDto) {
    return this.typeoftimeService.update(+id, updateTypeoftimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeoftimeService.remove(+id);
  }
}
