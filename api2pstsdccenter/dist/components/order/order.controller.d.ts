import { Observable } from 'rxjs';
import { Orderinterface } from 'src/interfaces/orderinterface.interface';
import { OrderService } from './order.service';
export declare class OrderController {
    private oService;
    oOrder: Promise<Orderinterface>;
    constructor(oService: OrderService);
    C_POSToCreaerOrder(post: Orderinterface): Observable<Orderinterface>;
    C_GETOrderAll(ptCompay: string, ptKeyid: string): Promise<Orderinterface>;
    C_GEToByOrder(ptOrderCode: number, ptCompany: string, ptKeyid: string): Promise<Orderinterface>;
    C_GEToStaOrder(ptStatus: string): Promise<Orderinterface>;
}
