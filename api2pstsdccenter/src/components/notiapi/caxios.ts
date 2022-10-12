import { ForbiddenException } from "@nestjs/common";
import axios, { Axios, AxiosRequestConfig } from "axios";
import { error } from "console";
import { url } from "inspector";
import qs from 'qs';
import { catchError, lastValueFrom, map } from "rxjs";

export class Test {
    //Post
    async postMsg(ptMsg: string): Promise<boolean> {

        try{
            var tPost: string = ptMsg;
            const axios = require('axios');
            const { data } = await axios.post(
                'https://notify-api.line.me/api/notify',
                {
                    message: tPost
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer 62Y56OqLBpgR50ppPGwYVjvNvop9vqjhMQQlLWBTMqE'
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
                return false;
            }
            else{
                console.log('unexpected error: ', oEx);
                return false;
            }
            return false;
        }
        finally{
            
        }

        // axios.post('https://notify-api.line.me/api/notify')
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });


        // async getCatFacts() {
        //     const request = this.http
        //       .get('https://catfact.ninja/fact')
        //       .pipe(map((res) => res.data?.fact))
        //       .pipe(
        //         catchError(() => {
        //           throw new ForbiddenException('API not available');
        //         }),
        //       );

        //     const fact = await lastValueFrom(request);

        //     return {
        //       data: {
        //         fact,
        //       },
        //     };
        //   }


    }

}
