import { Item, ItemDocument } from "@falcon/model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";


@Injectable()
export class ItemService{
 
    constructor(
      @InjectModel(Item.name) private itemModel:Model<ItemDocument>
    ){}
 
      async addItem(){
        const itemData =new this.itemModel({
          itemname :"itemname",
          itemNumber:"1",
          clientBuyer:true,
        });

       const data = await itemData.save();

        return data;
      }

     
}