import express from "express";
import mongoose from "mongoose";
import { PORT,mongoodbUrl } from "./config.js";

import booksroute from './routes/booksRoute.js'
import cors from 'cors';



const app =express();

//middleware for parsing request body
app.use(express.json());

// Midaleware for handling Cors policy to evter the error in te broser not the server
app.use(cors());
// or use this 
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-type']
// }))



app.get('/',(req ,res)=>{
console.log(req);
return res.status(234).send('Welcome to MERN Stack toutot')

});

app.use('/books',booksroute);

mongoose.connect(mongoodbUrl)
.then(()=>{
    console.log('App conected to database');
    app.listen(PORT,()=>{
        console.log(`App is listing to port :${PORT}`);
    });
})
.catch((err)=>{console.log(err);
})