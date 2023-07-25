import {Module } from "@nestjs/common";
import { ConfigModule,ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Module({
    imports:[
        MongooseModule.forRootAsync({
            imports:[ConfigModule],
            useFactory:async (configService:ConfigService) =>({
                uri:'mongodb://localhost:27017/test'
            }),
            inject:[ConfigService]
        })
    ],
})

export class DatabaseModule{
    onApplicationBootstrap(){
        mongoose.set("strictQuery",true);
        mongoose.connect("mongodb://localhost:27017/test")
    }
}