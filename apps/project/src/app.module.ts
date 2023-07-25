import { Module } from "@nestjs/common";
import { ItemController } from "./item/item.controller";
import { ItemService } from "./item/item.service";
import { ConfigModule } from '@nestjs/config'
import { join } from "path";
import { DatabaseModule } from "./db/database.module";
import { MongooseModule} from "@nestjs/mongoose";
import { Item, ItemSchema } from "@falcon/model";

@Module({
   imports:[
      ConfigModule.forRoot(
         { envFilePath:`${process.env.NODE_ENV || 'development'}.env`,}
      ),
      DatabaseModule,
      MongooseModule.forFeature([
         {name:Item.name,schema:ItemSchema}
      ])
   ],
   controllers:[
    ItemController
   ],
   providers:[
    ItemService
   ] 
})

export class AppModule {}