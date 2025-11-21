import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PonenteService } from './ponente.service';
import { CreatePonenteDto } from './dto/create-ponente.dto';
import { UpdatePonenteDto } from './dto/update-ponente.dto';

@Controller('ponente')
export class PonenteController {
  constructor(private readonly ponenteService: PonenteService) {}

  @Post()
  create(@Body() createPonenteDto: CreatePonenteDto) {
    return this.ponenteService.create(createPonenteDto);
  }

  @Get()
  findAll() {
    return this.ponenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ponenteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePonenteDto: UpdatePonenteDto) {
    return this.ponenteService.update(+id, updatePonenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ponenteService.remove(+id);
  }
}
