import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PossitionappliedService } from './possitionapplied.service';
import { CreatePossitionappliedDto } from './dto/create-possitionapplied.dto';
import { UpdatePossitionappliedDto } from './dto/update-possitionapplied.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('possitionapplied')
@Controller('possitionapplied')
export class PossitionappliedController {
  constructor(private readonly possitionappliedService: PossitionappliedService) {}

  @Post()
  create(@Body() createPossitionappliedDto: CreatePossitionappliedDto) {
    return this.possitionappliedService.create(createPossitionappliedDto);
  }

  @Get()
  findAll() {
    return this.possitionappliedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.possitionappliedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePossitionappliedDto: UpdatePossitionappliedDto) {
    return this.possitionappliedService.update(+id, updatePossitionappliedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.possitionappliedService.remove(+id);
  }
}
