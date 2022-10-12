"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const orderentity_entity_1 = require("../../entitys/orderentity.entity");
const typeorm_2 = require("typeorm");
let OrderService = class OrderService {
    constructor(oReqpository) {
        this.oReqpository = oReqpository;
    }
    C_PRCaCreateOrder(Orderinterface) {
        try {
            return (0, rxjs_1.from)(this.oReqpository.save(Orderinterface));
        }
        catch (oEx) {
            throw new common_1.NotFoundException({
                message: ['Task not found']
            });
        }
    }
    async C_PRCaGetOrderAll(ptCompany, ptHeadder) {
        try {
            var oOrder = null;
            console.log('Header service :' + ptHeadder);
            if (ptHeadder == null) {
                return null;
            }
            else {
                let tSql = `SELECT
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
                            HD.FNHeaderCode = '${ptHeadder}'`;
                oOrder = await this.oReqpository.query(tSql);
                console.log(oOrder);
                return oOrder;
            }
        }
        catch (oEx) {
            throw new common_1.NotFoundException({
                message: ['Task not found']
            });
        }
    }
    async C_PRCaGetByOrder(pnOrderCode, ptCompany, ptHeadder) {
        try {
            var oOrder = null;
            console.log('Header service :' + ptHeadder);
            if (ptHeadder == null) {
                return null;
            }
            else {
                let tSql = `SELECT  
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
                        HD.FNHeaderCode = '${ptHeadder}'`;
                oOrder = await this.oReqpository.query(tSql);
                console.log(oOrder);
                return oOrder;
            }
        }
        catch (oEx) {
            throw new common_1.NotFoundException({
                message: ['Task not found']
            });
        }
    }
    async C_PRCaGetStaOrder(ptStatusOrder) {
        try {
            let tStatusFix = '';
            switch (ptStatusOrder) {
                case '1':
                    tStatusFix = 'Success';
                    break;
                case '2':
                    tStatusFix = 'Panding';
                    break;
                case '3':
                    tStatusFix = 'Cancell';
                    break;
            }
            console.log(tStatusFix);
            const oSql = await this.oReqpository.createQueryBuilder('TCNMOrder');
            oSql.select('TCNMOrder.FNOrderCode', 'rtOrderId');
            oSql.addSelect('TCNMOrder.FTStaOrder', 'rtStausOrder');
            oSql.addSelect('TCNMOrder.FDLastUpdate', 'rdLastUpdate');
            oSql.addSelect('TCNMOrder.FTCompany', 'rtCompany');
            oSql.andWhere('TCNMOrder.FTStaOrder = :tStatusFix', { tStatusFix });
            message: [oSql];
            return await oSql.execute();
        }
        catch (oEx) {
            throw new common_1.NotFoundException({
                message: ['Task not found']
            });
        }
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orderentity_entity_1.Orderentity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map