const express= require('express');
const path=require('path');
const port=process.env.PORT  || 8000
const logger=require('./middleware/logger')
const app=express();
const errorHandler=require('./middleware/error');
const notfound=require('./middleware/notfound')
//body parser middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//logger middleware
app.use(logger)


const posts=require('./routes/posts')




app.use('/api/posts', posts)

app.use(notfound)


//Error Handler
app.use(errorHandler);



app.listen(port,()=>console.log(`listening server is running on ${port}`));