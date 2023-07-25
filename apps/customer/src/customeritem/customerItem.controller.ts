import { Controller, Get } from "@nestjs/common";
import { CustomerItemService } from "./customerItem.service";

@Controller()
export class CustomerItemController{
    constructor(private readonly itemService:CustomerItemService){}

    @Get()
    async getItem(){
        return this.itemService.addItem();
    }
}