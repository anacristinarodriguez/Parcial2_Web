import { Injectable } from '@nestjs/common';
import { CreateAuditorioDto } from './dto/create-auditorio.dto';
import { UpdateAuditorioDto } from './dto/update-auditorio.dto';

@Injectable()
export class AuditorioService {
  create(createAuditorioDto: CreateAuditorioDto) {
    return 'This action adds a new auditorio';
  }

  findAll() {
    return `This action returns all auditorio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditorio`;
  }

  update(id: number, updateAuditorioDto: UpdateAuditorioDto) {
    return `This action updates a #${id} auditorio`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditorio`;
  }
}
