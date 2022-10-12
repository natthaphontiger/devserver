"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cconfig = void 0;
const cvb_1 = require("./cvb");
const cnotiserver_1 = require("./notiapi/cnotiserver");
class Cconfig {
    static C_GETxConfig() {
        try {
            cvb_1.Cvb.tVB_TokenApiLine = '62Y56OqLBpgR50ppPGwYVjvNvop9vqjhMQQlLWBTMqE';
            cvb_1.Cvb.tVB_UrlNotiLine = 'https://notify-api.line.me/api/notify';
            cnotiserver_1.Cnotiserver.C_POSTbSyncNotiLine("Cconfig" + "|", "C_GETxConfig" + "|", "Load Config Complete");
            return true;
        }
        catch (oEx) {
            cnotiserver_1.Cnotiserver.C_POSTbSyncNotiLine("Cconfig" + "|", "C_GETxConfig" + "|", "Load Config Complete");
            return false;
        }
    }
}
exports.Cconfig = Cconfig;
//# sourceMappingURL=cconfig.js.map