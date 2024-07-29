const express=require('express');
const app=express();
const mongoose=require('mongoose');
const routerurl=require('./routes/routess');
const cors=require('cors');

// middleware
app.use(express.json());
app.use(cors())


// routes
app.use("/app",routerurl);

if(mongoose.connect('mongodb+srv://sathishvalar:Sairocks418@cluster0.xu0gvvp.mongodb.net/final-site?retryWrites=true&w=majority&appName=Cluster0'));

{
    console.log("database is connected");
}

app.listen(4008,()=>
{
    console.log("server is running on port 4008");
});
