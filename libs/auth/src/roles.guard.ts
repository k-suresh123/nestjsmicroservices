import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from '@nestjs/core';
import { Observable } from "rxjs";
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector:Reflector){}
  
  canActivate(context: ExecutionContext): boolean{
      const roles = this.reflector.get<string[]>('roles',context.getHandler());

      if(!roles){
        return true;
      }

      const request = context.switchToHttp().getRequest();
      if(request.user && request.user.roles ){
        if(request.headers.selectedrole && !request.user.roles.includes(request.headers.selectedrole)){
            return false;
        }

        for(const role of request.user.roles){
              if(roles.includes(role)){
                if(request.headers.selectedrole){
                    request.user.roles = [request.headers.selectedrole];
                }
                return true;
              }
        }
      }

      return false;
  }


}