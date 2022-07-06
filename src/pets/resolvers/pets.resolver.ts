import { Resolver, Query } from '@nestjs/graphql';
import { PetsService } from '../services/pets.service';
import { Pet } from '../entities/pet.entity';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pet])
  async pets(): Promise<Pet[]> {
    return await this.petsService.findAll();
  }
}
