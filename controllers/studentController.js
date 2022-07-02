const Student=require('../models/studentModel');
const allStudents=async(req,res)=>{
    const student_data=await Student.find();
    res.render('index',{student_data});
}
const singleStudentData=async(req,res)=>{
    const id=req.params.id;
    const student_data=await Student.findById(id);
    res.render('view',{student_data});
}

const addStudent=(req,res)=>{
    res.render('create');
}
const submitStudentData=async(req,res)=>{
    // console.log(req.body);
    // console.log(req.file);
    await Student.create({
        ...req.body,
        photo:req.file.filename
    });
    res.redirect('/student');
}
const deleteStudentData=async(req,res)=>{
    const id=req.params.id;
    await Student.findByIdAndDelete(id);
    res.redirect('/student');
}
const editStudentData=async(req,res)=>{
    const id=req.params.id;
    const update_student_data=await Student.findById(id);
    res.render('edit',{update_student_data});
}
const UpdateStudentDataSubmit=async(req,res)=>{
    const id=req.params.id;
    await Student.findByIdAndUpdate(id,{
        ...req.body,
        photo:req.file.filename
    });
    res.redirect('/student');
}
module.exports={
    allStudents,
    addStudent,
    submitStudentData,
    singleStudentData,
    deleteStudentData,
    editStudentData,
    UpdateStudentDataSubmit
}