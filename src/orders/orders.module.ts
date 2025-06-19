import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { NastsModule } from 'src/transports/nasts.module';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [NastsModule]
})
export class OrdersModule {}
