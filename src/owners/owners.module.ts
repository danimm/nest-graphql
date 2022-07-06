import { Module } from '@nestjs/common';
import { OwnersService } from './services/owners.service';
import { OwnersResolver } from './resolvers/owners.resolver';

@Module({
  providers: [OwnersResolver, OwnersService],
})
export class OwnersModule {}
