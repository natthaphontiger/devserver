import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { throws } from 'assert';
import { get } from 'http';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { Orderinterface } from 'src/interfaces/orderinterface.interface';
import { Resulitinterface } from 'src/interfaces/resulitinterface.interface';
import { brotliDecompressSync } from 'zlib';
import { OrderService } from './order.service';
import { Headers } from '@nestjs/common';

@Controller('order')
export class OrderController {
    oOrder: Promise<Orderinterface>;

    constructor(private oService: OrderService) { }


    //Create Order
    @Post()
    C_POSToCreaerOrder(@Body() post: Orderinterface): Observable<Orderinterface> {
        console.log(post.FNOrderCode + "|" + post.FTStaOrder + "|" + post.FDLastUpdate + "|" + post.FTCompany);
        return this.oService.C_PRCaCreateOrder(post);
    }


    //Get Order All
    @Get("orderAll/:FTCompany")
    C_GETOrderAll(
        @Param('FTCompany') ptCompay: string,
        @Headers('x-api-key') ptKeyid: string
    ): Promise<Orderinterface> {
        try {
            console.log('Get Success' + ptCompay);
            console.log('Header : ' + ptKeyid);
            return this.oService.C_PRCaGetOrderAll(ptCompay, ptKeyid);
        }
        catch (oEx) {
            throw new NotFoundException({
                message: ['Task By Order All not found!']
            })
        }
    }


    //Get By Order status Success
    @Get('/orderCode/:FNOrderCode/:FTCompany')
    C_GEToByOrder(
        @Param('FNOrderCode') ptOrderCode: number,
        @Param('FTCompany') ptCompany: string,
        @Headers('x-api-key') ptKeyid: string
        )
        : Promise<Orderinterface> {
        try {
            console.log('Get Success' + ptOrderCode + ' ' + ptCompany);
            return this.oService.C_PRCaGetByOrder(ptOrderCode, ptCompany,ptKeyid);
        }
        catch (oEx) {
            throw new NotFoundException({
                message: ['Task not found! By Order ID']
            })
        }
    }

    //Get Status Order
    @Get("/Status/:FTStaOrder")
    C_GEToStaOrder(@Param('FTStaOrder') ptStatus: string): Promise<Orderinterface> {
        try {

            console.log('Get Sta Order Success' + ptStatus);
            return this.oService.C_PRCaGetStaOrder(ptStatus);
        }
        catch (oEx) {
            throw new NotFoundException({
                message: ['Task not found! By Order ID']
            })
        }

    }





}
