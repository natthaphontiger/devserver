"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const cnotiserver_1 = require("../class/notiapi/cnotiserver");
const csp_1 = require("../class/csp");
let LoggerMiddleware = class LoggerMiddleware {
    constructor() {
        this.oSyncNotiLine = new cnotiserver_1.Cnotiserver();
        this.OSaveLog = new csp_1.Csp();
    }
    use(req, res, next) {
        console.log('Process Req : ' + req.url);
        console.log('Process Req : ' + req.method);
        console.log('Request process middleware');
        if (cnotiserver_1.Cnotiserver.C_POSTbSyncNotiLine("Middleware", "Request API", "User : " + req.url)) {
            csp_1.Csp.SP_INSbSaveLog("Middleware", "Request API", "User : " + req.url);
        }
        else {
            csp_1.Csp.SP_INSbSaveLog("Middleware", "Request API", "Sync Noti Line Fail...");
        }
        next();
    }
};
LoggerMiddleware = __decorate([
    (0, common_1.Injectable)()
], LoggerMiddleware);
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map