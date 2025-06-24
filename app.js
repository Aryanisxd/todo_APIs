import express from 'express' ;
import mongoose from 'mongoose' ;
import { Router } from 'express' ;
import dotenv from 'dotenv' ;


dotenv.config() ;

const app = express() ;
const router = Router() ; //its a secret way to miniamalistic design pattern 

app.use(express.json()) ;

Connect();//calling to connect with server and database

//getting the routes form all files through router 
import TodoRouter from './routes/todo.js' ;


//version one routes redirtecting 
//anything coming to this route will redirect to the endpoint i pointed in end 
app.use('/api/v1/todo', TodoRouter);




async function Connect(){

    try {

        await mongoose.connect (process.env.MONGO_URL);
        console.log('Connected to MongoDB')

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.log(error)
        
    }
}