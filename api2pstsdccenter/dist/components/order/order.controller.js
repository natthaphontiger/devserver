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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const order_service_1 = require("./order.service");
const common_2 = require("@nestjs/common");
let OrderController = class OrderController {
    constructor(oService) {
        this.oService = oService;
    }
    C_POSToCreaerOrder(post) {
        console.log(post.FNOrderCode + "|" + post.FTStaOrder + "|" + post.FDLastUpdate + "|" + post.FTCompany);
        return this.oService.C_PRCaCreateOrder(post);
    }
    C_GETOrderAll(ptCompay, ptKeyid) {
        try {
            console.log('Get Success' + ptCompay);
            console.log('Header : ' + ptKeyid);
            return this.oService.C_PRCaGetOrderAll(ptCompay, ptKeyid);
        }
        catch (oEx) {
            throw new common_1.NotFoundException({
                message: ['Task By Order All not found!']
            });
        }
    }
    C_GEToByOrder(ptOrderCode, ptCompany, ptKeyid) {
        try {
            console.log('Get Success' + ptOrderCode + ' ' + ptCompany);
            return this.oService.C_PRCaGetByOrder(ptOrderCode, ptCompany, ptKeyid);
        }
        catch (oEx) {
            throw new common_1.NotFoundException({
                message: ['Task not found! By Order ID']
            });
        }
    }
    C_GEToStaOrder(ptStatus) {
        try {
            console.log('Get Sta Order Success' + ptStatus);
            return this.oService.C_PRCaGetStaOrder(ptStatus);
        }
        catch (oEx) {
            throw new common_1.NotFoundException({
                message: ['Task not found! By Order ID']
            });
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], OrderController.prototype, "C_POSToCreaerOrder", null);
__decorate([
    (0, common_1.Get)("orderAll/:FTCompany"),
    __param(0, (0, common_1.Param)('FTCompany')),
    __param(1, (0, common_2.Headers)('x-api-key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "C_GETOrderAll", null);
__decorate([
    (0, common_1.Get)('/orderCode/:FNOrderCode/:FTCompany'),
    __param(0, (0, common_1.Param)('FNOrderCode')),
    __param(1, (0, common_1.Param)('FTCompany')),
    __param(2, (0, common_2.Headers)('x-api-key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "C_GEToByOrder", null);
__decorate([
    (0, common_1.Get)("/Status/:FTStaOrder"),
    __param(0, (0, common_1.Param)('FTStaOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "C_GEToStaOrder", null);
OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map