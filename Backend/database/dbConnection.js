import mongoose from "mongoose";

export const dbConnection= ()=>{
    mongoose.connect(process.env.MONGO_URI ,{
        dbName: "RESTAURANT"
    } )
    .then(()=>{
        console.log("connected to db successfully")
    }).catch(()=>{
        console.log(`some error in you db ! ${err}`)
    })

    
}