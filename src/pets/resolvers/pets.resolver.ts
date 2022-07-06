import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PetsService } from '../services/pets.service';
import { Pet } from '../entities/pet.entity';
import { CreatePetInput } from '../dtos/pets.dto';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pet])
  async pets(): Promise<Pet[]> {
    return await this.petsService.findAll();
  }

  @Mutation((returns) => Pet)
  async createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }
}
