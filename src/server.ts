import  express from "express";
import * as bodyparser from "body-parser";
import{DB} from "./startup/db"
import{Router}  from "./startup/route"

class ToDoApp {
    app: express.Application;
     constructor() {
        //code to eshtablish a local server
        this.app =  express();
        this.app.listen(3000, 'localhost', () => { console.log("server  is ruuning on Port 3000") });
        Router.ConfigRoutes(this.app);
        this.configBodyParser();
        DB.connectMonoDb();
      
    }

    private configBodyParser(){
        //code to view the Body
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended:false}));
    }
    
}

export const todoApp=new ToDoApp();