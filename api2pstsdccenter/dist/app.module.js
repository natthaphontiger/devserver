"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const order_module_1 = require("./components/order/order.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const headerentity_entity_1 = require("./entitys/headerentity.entity");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const order_controller_1 = require("./components/order/order.controller");
const axios_1 = require("@nestjs/axios");
const notiapi_module_1 = require("./components/notiapi/notiapi.module");
const log_module_1 = require("./components/log/log.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .exclude({ path: 'order', method: common_1.RequestMethod.GET }, { path: 'order', method: common_1.RequestMethod.POST })
            .forRoutes(order_controller_1.OrderController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            notiapi_module_1.NotiapiModule,
            axios_1.HttpModule,
            order_module_1.OrderModule,
            log_module_1.LogModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mssql',
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
            typeorm_1.TypeOrmModule.forFeature([headerentity_entity_1.Headerentity])
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map