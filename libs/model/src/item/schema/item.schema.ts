import { Schema ,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document} from 'mongoose';
export type ItemDocument = Item & Document;
@Schema({
    autoIndex:true,
    timestamps:{createdAt:"cratedAt",updatedAt:"updatedAt"}
})

export class Item{
    @Prop({required:true,index:true}) itemname:string;
    @Prop({required:true,index:true,unique:true}) itemNumber:string;
    @Prop({default:false}) clientBuyer:boolean;

    @Prop({default:1}) readonly modeVersion:number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
//manageHistoryModel((Item,ItemSchema,'Item'))