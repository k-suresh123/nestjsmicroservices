import{Injectable,NestInterceptor,ExecutionContext,CallHandler }from '@nestjs/common' 
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { APIResponseDTO } from '@falcon/common';
export interface Response<T>{
    data:T;
}

@Injectable()
export class ResTransformInterceptor<T> 
implements NestInterceptor<T, Response<T>>
{
    intercept(
        context: ExecutionContext,
         next: CallHandler,
         ): Observable<Response<T>> {
        const ctx = context.switchToHttp();
        const res = ctx.getResponse();

        return next.handle().pipe(
            map((data) =>{
                if(data instanceof APIResponseDTO){
                    if(data.statusCode !== undefined){
                        res.status(data.statusCode);
                    }
                }
                return data;
            })
        )
    }
}
