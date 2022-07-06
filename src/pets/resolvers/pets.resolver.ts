import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { PetsService } from '../services/pets.service';
import { Pet } from '../entities/pet.entity';
import { CreatePetInput } from '../dtos/pets.dto';
import { Owner } from '../../owners/entities/owner.entity';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pet])
  async pets(): Promise<Pet[]> {
    return await this.petsService.findAll();
  }

  @Query((returns) => Pet)
  async getPets(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return await this.petsService.findOne(id);
  }

  // Nested queries!
  @ResolveField((returns) => Owner)
  async owner(@Parent() pet: Pet) {
    return this.petsService.getOwner(pet.ownerId);
  }

  @Mutation((returns) => Pet)
  async createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }
}
