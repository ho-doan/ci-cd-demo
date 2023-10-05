import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecruimentmanypositionsService } from './recruimentmanypositions.service';
import { CreateRecruimentmanypositionDto } from './dto/create-recruimentmanyposition.dto';
import { UpdateRecruimentmanypositionDto } from './dto/update-recruimentmanyposition.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('recruimentmanypositions')
@Controller('recruimentmanypositions')
export class RecruimentmanypositionsController {
  constructor(private readonly recruimentmanypositionsService: RecruimentmanypositionsService) {}

  @Post()
  create(@Body() createRecruimentmanypositionDto: CreateRecruimentmanypositionDto) {
    return this.recruimentmanypositionsService.create(createRecruimentmanypositionDto);
  }

  @Get()
  findAll() {
    return this.recruimentmanypositionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recruimentmanypositionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecruimentmanypositionDto: UpdateRecruimentmanypositionDto) {
    return this.recruimentmanypositionsService.update(+id, updateRecruimentmanypositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recruimentmanypositionsService.remove(+id);
  }
}
