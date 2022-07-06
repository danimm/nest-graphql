import { Module } from '@nestjs/common';
import { PetsService } from './services/pets.service';
import { PetsResolver } from './resolvers/pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { OwnersModule } from '../owners/owners.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OwnersModule],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
