import express from 'express'   ;
import mongoose from 'mongoose'   ;
import route from './route/routes.js';
import cors from 'cors' ;
import bodyParser from 'body-parser';



const URL='mongodb://harry:harry@cluster0-shard-00-00.ipud2.mongodb.net:27017,cluster0-shard-00-01.ipud2.mongodb.net:27017,cluster0-shard-00-02.ipud2.mongodb.net:27017/CRUD?ssl=true&replicaSet=atlas-zu8j4t-shard-0&authSource=admin&retryWrites=true&w=majority'
 




const app=express()  ;

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/users',route)

 const PORT=8000 ;




 mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => { 
    // we need .then becausew
    //it returns a promise 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})