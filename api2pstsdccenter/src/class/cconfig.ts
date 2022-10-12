import { Cvb } from "./cvb";
import { Cnotiserver } from "./notiapi/cnotiserver";

export class Cconfig
{
        //Process Get config
        public static C_GETxConfig():boolean{
            try{

                Cvb.tVB_TokenApiLine = '62Y56OqLBpgR50ppPGwYVjvNvop9vqjhMQQlLWBTMqE';
                Cvb.tVB_UrlNotiLine = 'https://notify-api.line.me/api/notify';


                Cnotiserver.C_POSTbSyncNotiLine("Cconfig" + "|","C_GETxConfig" + "|","Load Config Complete");
                return true;
            }
            catch(oEx)
            {
                Cnotiserver.C_POSTbSyncNotiLine("Cconfig" + "|","C_GETxConfig" + "|","Load Config Complete");
                return false;

            }
        }

}