import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscounttypeService } from './discounttype.service';
import { CreateDiscounttypeDto } from './dto/create-discounttype.dto';
import { UpdateDiscounttypeDto } from './dto/update-discounttype.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('discounttype')
@Controller('discounttype')
export class DiscounttypeController {
  constructor(private readonly discounttypeService: DiscounttypeService) {}

  @Post()
  create(@Body() createDiscounttypeDto: CreateDiscounttypeDto) {
    return this.discounttypeService.create(createDiscounttypeDto);
  }

  @Get()
  findAll() {
    return this.discounttypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discounttypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscounttypeDto: UpdateDiscounttypeDto) {
    return this.discounttypeService.update(+id, updateDiscounttypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discounttypeService.remove(+id);
  }
}
