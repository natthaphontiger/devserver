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
exports.LogController = void 0;
const common_1 = require("@nestjs/common");
const log_service_1 = require("./log.service");
const common_2 = require("@nestjs/common");
const cmlreslog_1 = require("../../models/cmlreslog");
let LogController = class LogController {
    constructor(oService) {
        this.oService = oService;
    }
    C_POSToCreaerOrder(post, ptKeyid) {
        const oLog = new cmlreslog_1.Cmlreslog();
        const aoLog = [];
        console.log(post.FNLogCode + "|" +
            post.FTAppCode + "|" +
            post.FTCompany + "|" +
            post.FTFunction + "|" +
            post.FTLogMsg + "|" +
            post.FTMenu + "|" +
            post.FTStaLog);
        oLog.rtData = this.oService.C_PRCoInsertLog(post, ptKeyid);
        oLog.rtResCode = '200';
        oLog.rtResDetail = 'Insert data  success';
        console.log('Res : ' + JSON.stringify(oLog));
        return oLog;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_2.Headers)('x-api-key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", cmlreslog_1.Cmlreslog)
], LogController.prototype, "C_POSToCreaerOrder", null);
LogController = __decorate([
    (0, common_1.Controller)('log'),
    __metadata("design:paramtypes", [log_service_1.LogService])
], LogController);
exports.LogController = LogController;
//# sourceMappingURL=log.controller.js.map