const express=require('express');
const multer=require('multer');
const path=require('path');
const router=express.Router();
const { allStudents,addStudent,submitStudentData,singleStudentData,deleteStudentData,editStudentData,UpdateStudentDataSubmit } = require('../controllers/studentController');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../assets/uploads/'));
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname);
    }
})
const upload=multer({
    storage:storage
})

const studentMulter=upload.single('photo');

router.get('/',allStudents);
router.get('/add-student',addStudent);
router.post('/submit',studentMulter,submitStudentData);
router.get('/:id',singleStudentData);
router.get('/delete/:id',deleteStudentData);
router.get('/edit/:id',editStudentData);
router.post('/update/:id',studentMulter,UpdateStudentDataSubmit);

module.exports=router;