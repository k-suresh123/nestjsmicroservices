import { Module } from "@nestjs/common";
import { CustomerItemController } from "./customeritem/customerItem.controller";
import { CustomerItemService } from "./customeritem/customerItem.service";

@Module({
   imports:[],
   controllers:[
      CustomerItemController
   ],
   providers:[
      CustomerItemService
   ] 
})

export class CustomerModule {}