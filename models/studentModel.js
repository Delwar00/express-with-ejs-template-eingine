const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    name:{
        type:String
        // required:[true, 'Name Field Required']
    },
    email:{
        type:String
        // required:[true,'Email Field Required'],
        // unique:true
    },
    phone:{
        type:String
        // required:[true,'Cell Field Required'],
        // unique:true
    },
    photo:{
        type:String
        // default:'avatar.png'
    }
},{
    timestamps:true
});
module.exports=mongoose.model('Student',studentSchema);