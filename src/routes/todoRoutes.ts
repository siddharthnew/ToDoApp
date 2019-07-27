import{Router} from "express"
import {TodoController} from "./../controller/todoController"

let todoControllerobj=new TodoController();
export const todoRoutes : Router= Router();

todoRoutes.post('/create', todoControllerobj.createToDo);
todoRoutes.get('/',todoControllerobj.GetAllToDo);

