import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './components/order/order.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Headerentity } from './entitys/headerentity.entity';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { OrderController } from './components/order/order.controller';
import { HttpModule } from '@nestjs/axios';
import { NotiapiModule } from './components/notiapi/notiapi.module';
import { LogModule } from './components/log/log.module';


@Module({
  imports: [
    NotiapiModule,
    HttpModule,
    OrderModule,
    LogModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      //host:'localhost\\SQLEXPRESS',
      host: 'localhost\\sqlexpress',
      port: 1433,
      username: 'sa',
      password: '2622',
      database: 'tsdc_dev',
      autoLoadEntities: true,
      synchronize: true,
      options: {
        encrypt: false
      }
    }),
    TypeOrmModule.forFeature([Headerentity])

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  
  



  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .exclude(
      {path:'order',method:RequestMethod.GET},
      {path:'order',method:RequestMethod.POST},
      )
      .forRoutes(OrderController);
  }


}
