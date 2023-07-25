import { ArgumentsHost, Catch,HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost} from '@nestjs/core';


@Catch()
export class ExceptionFilter implements ExceptionFilter{
    constructor(private httpAdapterHost:HttpAdapterHost){}

    catch(exception: any, host:ArgumentsHost){
       const ctx = host.switchToHttp();
       let status = HttpStatus.INTERNAL_SERVER_ERROR;
       let msg = "Inter server Error";

       if(exception instanceof HttpException){
        status = exception.getStatus();
        msg = exception.message;
       }

       const { httpAdapter} = this.httpAdapterHost;
       const responsePayLoad = {
        statusCode: status,
        message:msg
       }

    }
}