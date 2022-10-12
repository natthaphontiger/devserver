import { error } from "console";
import { Csp } from "../csp";
import { Cvb } from "../cvb";

export class Cnotiserver
{

    //Post sync API Line
    public static async C_POSTbSyncNotiLine(ptManu:string,ptFunction:string,ptMsg:string):Promise<boolean>
    {
        try{

            const oC_TokenLine = new  Cvb()
            if(ptManu == '' || ptManu == null){return false;}
            if(ptFunction == '' || ptFunction == null){return false;}
            if(ptMsg == '' || ptMsg == null){return false;}

            const tTokenLine:string = Cvb.tVB_TokenApiLine;

            const axios = require('axios');
            const { data } = await axios.post(
                `${Cvb.tVB_UrlNotiLine}`,    //Url Api Line
                {
                    message: ptManu +'|'+ ptFunction +'|'+ ptMsg
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${tTokenLine}`   //Token Api line
                    },
                },
            );
    
            console.log(JSON.stringify(data, null, 4));
            console.log('Class : ' + ptMsg);

            return true;

        }
        catch(oEx)
        {
            const axiosError = require('axios');
            if(axiosError.isAxiosError(error)){
                console.log('error message: ', oEx.message);
                Csp.SP_INSbSaveLog("Cnotiserver" + "|","C_POSTbSyncNotiLine" + "|",oEx.message)
                return false;
            }
            else{
                console.log('unexpected error: ', oEx);
                Csp.SP_INSbSaveLog("Cnotiserver" + "|","C_POSTbSyncNotiLine" + "|",oEx.message)
                return false;
            }
            return false;
       
        }
        finally{

        }
    }

}