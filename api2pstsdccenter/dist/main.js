"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cconfig_1 = require("./class/cconfig");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/tsdc/v1/');
    await app.listen(3000);
    cconfig_1.Cconfig.C_GETxConfig();
}
bootstrap();
//# sourceMappingURL=main.js.map