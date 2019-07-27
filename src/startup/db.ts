import mongoose from "mongoose";
export class DB{
    private static connectionString: string="mongodb://localhost:27017/TodoDb";//TodoDb- database name

    public static connectMonoDb(){
        mongoose.connect(this.connectionString,{useNewUrlParser:true}).then(
            ()=>{
                console.log("DB Connection Success");
            })
            .catch(
                err=>{
                    console.log("DB Connection Failed");
                    console.log(console.error());

                    
                }
            )
            }

}