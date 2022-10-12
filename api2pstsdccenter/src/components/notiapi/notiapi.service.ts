import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { response } from 'express';
import { stringify } from 'querystring';
import { lastValueFrom, map, Observable, observeOn } from 'rxjs';
import { Msglineinterface } from 'src/interfaces/msglineinterface.interface';
import { MetadataAlreadyExistsError } from 'typeorm';
import { catchError } from 'rxjs';
import axios from 'axios';
import { type } from 'os';
import { Test } from './caxios';

@Injectable()
export class NotiapiService {
    http: any;

    constructor(private httpService: HttpService) { }

    //Create notification to Line
    async C_SEVxPOSTApiLine(ptMsg: string) {

        console.log('In Server' + ptMsg);
        // axios.defaults.baseURL = 'https://notify-api.line.me/api/notify';
        // axios.defaults.headers.common['Authorization'] = '62Y56OqLBpgR50ppPGwYVjvNvop9vqjhMQQlLWBTMqE';
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

        //  const option = {
        //     url: 'https://notify-api.line.me/api/notify',
        //     method: 'POST',
        //     headers:{
        //         'Accept': 'application/json',
              
        //         'Authorization': '62Y56OqLBpgR50ppPGwYVjvNvop9vqjhMQQlLWBTMqE'
        //     },
        //     params:{
        //         message:'Server Api Start...'
        //     }
        // }

        // axios(option);

        //https://api.publicapis.org/entries

        // this.httpService.get('https://api.coindesk.com/v1/bpi/currentprice.json').subscribe(oData =>{
        //     const data = oData;
        // console.log(data);
        // })
        

        //OK--------------
        // const axios = require('axios');
        // axios.get('https://api.publicapis.org/entries')
        // .then(function (response) {
        //     // handle success
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     // handle error
        //     console.log(error);
        //   })
        //   .then(function () {
        //     // always executed
        //   });


         //const axios = require('axios');
        // axios.get('https://httpbin.org/get')
        // .then(function (response) {
        //     // handle success
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     // handle error
        //     console.log(error);
        //   })
        //   .then(function () {
        //     // always executed
        //   });


        // axios.post('https://notify-api.line.me/api/notify', {
        //     message: 'Test Api Line'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        const oA = new Test();
        
        if(await oA.postMsg(ptMsg) == true)
        {
            console.log('Complete...');
        }
        else{
            console.log('Fail...');
        }
          




    }
}


