import { Schema ,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document} from 'mongoose';
export type CustomerItemDocument = CustomerItem & Document;
@Schema({
    autoIndex:true,
    timestamps:{createdAt:"cratedAt",updatedAt:"updatedAt"}
})

export class CustomerItem{
    @Prop({required:true,index:true}) customername:string;
    @Prop({required:true,index:true,unique:true}) customerNumber:string;
    @Prop({default:false}) clientBuyer:boolean;

    @Prop({default:1}) readonly modeVersion:number;
}

export const CustomerItemSchema = SchemaFactory.createForClass(CustomerItem);
//manageHistoryModel((Item,ItemSchema,'Item'))