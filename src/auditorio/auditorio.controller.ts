import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuditorioService } from './auditorio.service';
import { CreateAuditorioDto } from './dto/create-auditorio.dto';
import { UpdateAuditorioDto } from './dto/update-auditorio.dto';

@Controller('auditorio')
export class AuditorioController {
  constructor(private readonly auditorioService: AuditorioService) {}

  @Post()
  create(@Body() createAuditorioDto: CreateAuditorioDto) {
    return this.auditorioService.create(createAuditorioDto);
  }

  @Get()
  findAll() {
    return this.auditorioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditorioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuditorioDto: UpdateAuditorioDto) {
    return this.auditorioService.update(+id, updateAuditorioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditorioService.remove(+id);
  }
}
