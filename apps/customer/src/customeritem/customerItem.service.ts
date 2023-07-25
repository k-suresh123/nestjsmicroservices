import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomerItemService{
 
    constructor(){}
 
      async addItem(){
        console.log("service");
        return "customerService";
      }

     
}