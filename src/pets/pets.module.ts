import { Module } from '@nestjs/common';
import { PetsService } from './services/pets.service';
import { PetsController } from './controllers/pets.controller';
import { PetsResolver } from './resolvers/pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  controllers: [PetsController],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
