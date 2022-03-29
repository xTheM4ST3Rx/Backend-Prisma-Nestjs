import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

export class AuditMiddleWare implements NestMiddleware{
    use(req: Request, res: Response, next: Function) {

        const authHeader = req.headers["access-token"];

        if(!authHeader){
            return res.status(401).send({error: "Sem Token de acesso"})
        }else if(authHeader == "meegu"){
            return next();
        }else{
            return res.status(401).send({error: "token invalido"})
        }

    }

}