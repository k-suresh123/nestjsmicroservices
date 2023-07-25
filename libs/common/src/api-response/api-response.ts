export class APIResponseDTO{
    statusCode:number;
    message:string;
    data:any;

constructor({statusCode= 200,message='OK',data=null}:{statusCode?:number,message?:string,data?:any}={}){
    this.statusCode = statusCode;
    this.message=message;
    if(data!= null){
        this.data =data;
    }
}
}