import mongoose from "mongoose"
const todoSchema= new mongoose.Schema({
name: { type: String, required:true ,unique:true },
description: String,
craetedDate:{ type:Date, default:Date.now()},
completed:{ type:Boolean, default:false}
}
);
export const todoModel=mongoose.model('todo',todoSchema);