"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cnotiserver = void 0;
const console_1 = require("console");
const csp_1 = require("../csp");
const cvb_1 = require("../cvb");
class Cnotiserver {
    static async C_POSTbSyncNotiLine(ptManu, ptFunction, ptMsg) {
        try {
            const oC_TokenLine = new cvb_1.Cvb();
            if (ptManu == '' || ptManu == null) {
                return false;
            }
            if (ptFunction == '' || ptFunction == null) {
                return false;
            }
            if (ptMsg == '' || ptMsg == null) {
                return false;
            }
            const tTokenLine = cvb_1.Cvb.tVB_TokenApiLine;
            const axios = require('axios');
            const { data } = await axios.post(`${cvb_1.Cvb.tVB_UrlNotiLine}`, {
                message: ptManu + '|' + ptFunction + '|' + ptMsg
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${tTokenLine}`
                },
            });
            console.log(JSON.stringify(data, null, 4));
            console.log('Class : ' + ptMsg);
            return true;
        }
        catch (oEx) {
            const axiosError = require('axios');
            if (axiosError.isAxiosError(console_1.error)) {
                console.log('error message: ', oEx.message);
                csp_1.Csp.SP_INSbSaveLog("Cnotiserver" + "|", "C_POSTbSyncNotiLine" + "|", oEx.message);
                return false;
            }
            else {
                console.log('unexpected error: ', oEx);
                csp_1.Csp.SP_INSbSaveLog("Cnotiserver" + "|", "C_POSTbSyncNotiLine" + "|", oEx.message);
                return false;
            }
            return false;
        }
        finally {
        }
    }
}
exports.Cnotiserver = Cnotiserver;
//# sourceMappingURL=cnotiserver.js.map