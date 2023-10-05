import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WageService } from './wage.service';
import { CreateWageDto } from './dto/create-wage.dto';
import { UpdateWageDto } from './dto/update-wage.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('wage')
@Controller('wage')
export class WageController {
  constructor(private readonly wageService: WageService) {}

  @Post()
  create(@Body() createWageDto: CreateWageDto) {
    return this.wageService.create(createWageDto);
  }

  @Get()
  findAll() {
    return this.wageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWageDto: UpdateWageDto) {
    return this.wageService.update(+id, updateWageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wageService.remove(+id);
  }
}
