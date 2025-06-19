import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { NastsModule } from 'src/transports/nasts.module';

@Module({
  controllers: [UsersController],
  providers: [],
  imports: [NastsModule]
})
export class UsersModule {}
