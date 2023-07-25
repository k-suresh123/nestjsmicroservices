import { Controller, Get,UseInterceptors } from "@nestjs/common";
import { ItemService } from "./item.service";
//import { RolesGuard } from "@falcon/auth";
//import { Roles } from "libs/common/src/decorator";
//import { APIResponseDTO , ResTransformInterceptor } from "@falcon/common";
//import { Role } from "libs/common/src/enum/roles";

//@UseInterceptors(new ResTransformInterceptor() )
//@Roles(Role.Buyer,Role.ClientBuyer,Role.SupplierProjectManager)

@Controller()
export class ItemController{
    constructor(private readonly itemService:ItemService){}

    @Get()
    async getItem(){
        return this.itemService.addItem();
    }
}