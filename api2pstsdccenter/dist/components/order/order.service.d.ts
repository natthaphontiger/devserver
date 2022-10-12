import { Observable } from 'rxjs';
import { Orderentity } from 'src/entitys/orderentity.entity';
import { Orderinterface } from 'src/interfaces/orderinterface.interface';
import { Repository } from 'typeorm';
export declare class OrderService {
    private readonly oReqpository;
    constructor(oReqpository: Repository<Orderentity>);
    C_PRCaCreateOrder(Orderinterface: any): Observable<Orderinterface>;
    C_PRCaGetOrderAll(ptCompany: string, ptHeadder: string): Promise<Orderinterface>;
    C_PRCaGetByOrder(pnOrderCode: number, ptCompany: string, ptHeadder: string): Promise<Orderinterface>;
    C_PRCaGetStaOrder(ptStatusOrder: string): Promise<Orderinterface>;
}
