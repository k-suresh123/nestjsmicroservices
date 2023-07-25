import {Request,Response, NextFunction } from "express";
import { Role } from "../enum/roles";


export function requestmiddleware(req:Request,res:Response,next:NextFunction){
  const selectedRole:any = req.headers.selectedrole;
  if(req.url && req.url.split('/').length < 3){
    next();
  }else if(!selectedRole){
    return res.status(400).json({
        "statusCode":400,
        "message":"selectedRole should not be empty in header"
    })
  }else if(selectedRole != null && !Object.values(Role).includes(selectedRole)){
  return res.status(400).json({
    "statusCode":400,
    "message":"each value in desingnation role must be one of the following values"+ Object.values(Role).join(', ')
  })
  }else{
    next();
  }
}