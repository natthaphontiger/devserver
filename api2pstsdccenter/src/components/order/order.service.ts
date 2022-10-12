import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { format } from 'path';
import { from, Observable } from 'rxjs';
import { Orderentity } from 'src/entitys/orderentity.entity';
import { Headeruuid } from 'src/interfaces/headeruuid.interface';
import { Orderinterface } from 'src/interfaces/orderinterface.interface';
import { Resulitinterface } from 'src/interfaces/resulitinterface.interface';
import { createQueryBuilder, DataSource, Repository } from 'typeorm';

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(Orderentity)
        private readonly oReqpository: Repository<Orderentity>
    ) { }


    //Post create Order
    C_PRCaCreateOrder(Orderinterface): Observable<Orderinterface> {
        try {
            return from(this.oReqpository.save(Orderinterface));
        }
        catch (oEx) {
            throw new NotFoundException({
                message: ['Task not found']
            })
        }

    }

    //Get Order All
    async C_PRCaGetOrderAll(ptCompany: string, ptHeadder: string): Promise<Orderinterface> {
        try {
            var oOrder: Orderinterface = null;
            console.log('Header service :' + ptHeadder)

            if (ptHeadder == null) {
                return null;
            }
            else {

                let tSql =
                    `SELECT
                            ORD.FNOrderCode AS rnOrderCode,
                            ORD.FTCompany AS rtCompany,
                            ORD.FTStaOrder AS rtStaOrder,
                            ORD.FDLastUpdate AS rdLastUpdate
                        FROM 
                            TCNMOrder ORD WITH(NOLOCK)
                            INNER JOIN TCNMHeadderKey HD WITH(NOLOCK) ON
                            HD.FTCompany = ORD.FTCompany
                        WHERE
                            ORD.FTCompany = '${ptCompany}' AND
                            HD.FNHeaderCode = '${ptHeadder}'`

                oOrder = await this.oReqpository.query(tSql);
                console.log(oOrder);
                return oOrder;


                // const oSql = await this.oReqpository.createQueryBuilder('TCNMOrder');
                // oSql.select('TCNMOrder.FNOrderCode','rtOrderId');
                // oSql.addSelect('TCNMOrder.FTStaOrder','rtStausOrder');
                // oSql.addSelect('TCNMOrder.FDLastUpdate','rdLastUpdate');
                // oSql.addSelect('TCNMOrder.FTCompany','rtCompany');
                // oSql.andWhere('TCNMOrder.FTCompany = :ptCompany',{ptCompany});


                // oOrder = await oSql.execute();
                // console.log(oOrder);
                // return oOrder;
            }
        }
        catch (oEx) {
            throw new NotFoundException({
                message: ['Task not found']
            })
        }

    }

    //Get By Item Order
    async C_PRCaGetByOrder(pnOrderCode: number, ptCompany: string, ptHeadder: string): Promise<Orderinterface> {
        try {

            var oOrder: Orderinterface = null;
            console.log('Header service :' + ptHeadder)

            if (ptHeadder == null) {
                return null;
            }
            else {
                let tSql =
                    `SELECT  
                        ORD.FNOrderCode AS rnOrderCode,
                        ORD.FTCompany AS rtCompany,
                        ORD.FTStaOrder AS rtStaOrder,
                        ORD.FDLastUpdate AS rdLastUpdate
                    FROM 
                        TCNMOrder ORD WITH(NOLOCK)
                        INNER JOIN TCNMHeadderKey HD WITH(NOLOCK) ON
                        HD.FTCompany = ORD.FTCompany
                    WHERE
                        ORD.FNOrderCode = '${pnOrderCode}' AND
                        ORD.FTCompany = '${ptCompany}' AND
                        HD.FNHeaderCode = '${ptHeadder}'`

                oOrder = await this.oReqpository.query(tSql);
                console.log(oOrder);
                return oOrder;
            }

            // const oSql = await this.oReqpository.createQueryBuilder('TCNMOrder');
            // oSql.select('TCNMOrder.FNOrderCode', 'rtOrderId');
            // oSql.addSelect('TCNMOrder.FTStaOrder', 'rtStausOrder');
            // oSql.addSelect('TCNMOrder.FDLastUpdate', 'rdLastUpdate');
            // oSql.addSelect('TCNMOrder.FTCompany', 'rtCompany');
            // oSql.andWhere('TCNMOrder.FNOrderCode = :pnOrderCode', { pnOrderCode })
            // oSql.andWhere('TCNMOrder.FTCompany = :ptCompany', { ptCompany })
            // return await oSql.execute();
        }
        catch (oEx) {
            throw new NotFoundException({
                message: ['Task not found']
            })
        }
    }

    //Get Status Order
    async C_PRCaGetStaOrder(ptStatusOrder: string): Promise<Orderinterface> {
        try {
            let tStatusFix: String = '';

            switch (ptStatusOrder) {
                case '1':
                    tStatusFix = 'Success'
                    break;
                case '2':
                    tStatusFix = 'Panding'
                    break;
                case '3':
                    tStatusFix = 'Cancell'
                    break;
            }

            console.log(tStatusFix);

            const oSql = await this.oReqpository.createQueryBuilder('TCNMOrder');
            oSql.select('TCNMOrder.FNOrderCode', 'rtOrderId');
            oSql.addSelect('TCNMOrder.FTStaOrder', 'rtStausOrder');
            oSql.addSelect('TCNMOrder.FDLastUpdate', 'rdLastUpdate');
            oSql.addSelect('TCNMOrder.FTCompany', 'rtCompany');
            oSql.andWhere('TCNMOrder.FTStaOrder = :tStatusFix', { tStatusFix })

            message: [oSql];

            return await oSql.execute();

        }
        catch (oEx) {
            throw new NotFoundException({
                message: ['Task not found']
            })
        }
    }





}
