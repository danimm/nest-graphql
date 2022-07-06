import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from '../dto/create-owner.input';
import { UpdateOwnerInput } from '../dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from '../entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  ) {}
  async create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownerRepository.create(createOwnerInput);
    return this.ownerRepository.save(newOwner);
  }

  findAll() {
    return this.ownerRepository.find();
  }

  async findOne(id: number) {
    return this.ownerRepository.findOneOrFail({
      where: { id },
    });
  }

  // async update(id: number, updateOwnerInput: UpdateOwnerInput) {
  //   return `This action updates a #${id} owner`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} owner`;
  // }
}
