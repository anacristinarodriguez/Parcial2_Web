import { Injectable } from '@nestjs/common';
import { CreatePonenteDto } from './dto/create-ponente.dto';
import { UpdatePonenteDto } from './dto/update-ponente.dto';

@Injectable()
export class PonenteService {
  create(createPonenteDto: CreatePonenteDto) {
    return 'This action adds a new ponente';
  }

  findAll() {
    return `This action returns all ponente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ponente`;
  }

  update(id: number, updatePonenteDto: UpdatePonenteDto) {
    return `This action updates a #${id} ponente`;
  }

  remove(id: number) {
    return `This action removes a #${id} ponente`;
  }
}
