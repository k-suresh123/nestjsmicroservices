import { NestFactory } from "@nestjs/core";
import { CustomerModule } from "./customer.module";
import { ValidationPipe } from "@nestjs/common";
import * as cors from "cors"; 


async function bootstrap(){
    const app = await NestFactory.create(CustomerModule);
    app.setGlobalPrefix('svcCustomer');
    app.useGlobalPipes(new ValidationPipe());
    app.use(cors());
    //app.use(requestmiddleware)
    console.log("3004")
    await app.listen(3004);
}

bootstrap();

