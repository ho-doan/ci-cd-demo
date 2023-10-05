import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasisalarlistService } from './basisalarlist.service';
import { CreateBasisalarlistDto } from './dto/create-basisalarlist.dto';
import { UpdateBasisalarlistDto } from './dto/update-basisalarlist.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('basisalarlist')
@Controller('basisalarlist')
export class BasisalarlistController {
  constructor(private readonly basisalarlistService: BasisalarlistService) {}

  @Post()
  create(@Body() createBasisalarlistDto: CreateBasisalarlistDto) {
    return this.basisalarlistService.create(createBasisalarlistDto);
  }

  @Get()
  findAll() {
    return this.basisalarlistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basisalarlistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasisalarlistDto: UpdateBasisalarlistDto) {
    return this.basisalarlistService.update(+id, updateBasisalarlistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basisalarlistService.remove(+id);
  }
}
