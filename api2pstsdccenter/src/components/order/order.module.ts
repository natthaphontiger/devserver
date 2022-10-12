import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orderentity } from 'src/entitys/orderentity.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Orderentity])
  ],
  providers: [OrderService],
  controllers:[OrderController]
})
export class OrderModule {}
