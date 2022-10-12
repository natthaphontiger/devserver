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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logentity = void 0;
const typeorm_1 = require("typeorm");
let Logentity = class Logentity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Logentity.prototype, "FNLogCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Logentity.prototype, "FTAppCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Logentity.prototype, "FTMenu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Logentity.prototype, "FTFunction", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Logentity.prototype, "FTLogMsg", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Logentity.prototype, "FDCreateDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Logentity.prototype, "FTStaLog", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Logentity.prototype, "FTCompany", void 0);
Logentity = __decorate([
    (0, typeorm_1.Entity)({ name: 'TCNMLog' })
], Logentity);
exports.Logentity = Logentity;
//# sourceMappingURL=logentity.entity.js.map