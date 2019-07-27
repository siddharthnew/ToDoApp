import express from "express"
export class Router{
    constructor(){}
        public static ConfigRoutes(app: express.Application):void{

            app.get('/',(req:express.Request,res:express.Response)=>{
                res.status(200).json({
                    "success":"server is running"
                })
            })
        }
    }

