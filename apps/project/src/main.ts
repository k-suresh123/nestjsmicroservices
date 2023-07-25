import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import * as cors from "cors"; 
import { ExceptionFilter } from "@falcon/common";
import { requestmiddleware } from "@falcon/common"; 


async function bootstrap(){
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('svcproject');
    app.useGlobalPipes(new ValidationPipe());
    app.use(cors());
   // app.useGlobalFilters(new ExceptionFilter());
    //app.use(requestmiddleware)
    console.log("3003")
    await app.listen(3003);
}

bootstrap();

