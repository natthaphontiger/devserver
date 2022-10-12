"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const console_1 = require("console");
class Test {
    async postMsg(ptMsg) {
        try {
            var tPost = ptMsg;
            const axios = require('axios');
            const { data } = await axios.post('https://notify-api.line.me/api/notify', {
                message: tPost
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer 62Y56OqLBpgR50ppPGwYVjvNvop9vqjhMQQlLWBTMqE'
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
                return false;
            }
            else {
                console.log('unexpected error: ', oEx);
                return false;
            }
            return false;
        }
        finally {
        }
    }
}
exports.Test = Test;
//# sourceMappingURL=caxios.js.map