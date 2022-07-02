const mongoose=require('mongoose');

const connectDB=()=>{
    try{
        const connect=mongoose.connect(process.env.MONGO_DB);
        console.log('Database Connection ok');
    }
    catch(err){
        console.log('Db connection failed')
    }
}
module.exports=connectDB
