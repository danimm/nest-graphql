import { Module } from '@nestjs/common';
import { PetsService } from './services/pets.service';
import { PetsController } from './controllers/pets.controller';
import { PetsResolver } from './resolvers/pets.resolver';

@Module({
  controllers: [PetsController],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
