import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsistenteService } from './asistente.service';
import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { UpdateAsistenteDto } from './dto/update-asistente.dto';

@Controller('asistente')
export class AsistenteController {
  constructor(private readonly asistenteService: AsistenteService) {}

  @Post()
  create(@Body() createAsistenteDto: CreateAsistenteDto) {
    return this.asistenteService.create(createAsistenteDto);
  }

  @Get()
  findAll() {
    return this.asistenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asistenteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsistenteDto: UpdateAsistenteDto) {
    return this.asistenteService.update(+id, updateAsistenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asistenteService.remove(+id);
  }
}
