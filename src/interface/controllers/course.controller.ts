import { Course } from "@/domain/models/Course";

export class CourseController{
    constructor(){
       
    }
   createCourse = async(req,res,next)=>{
    try {
        const courseData = req.body;
        const course = await Course.create(courseData);;
        res.status(201).json(course);
    } catch (error) {
        console.log(error)
    }
   }
   getAllCourse = async(req,res,next)=>{
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        console.log(error)
    }
   }
   getCourseById = async(req,res,next)=>{
    try {
        const course  = await Course.findById({_id:req.params.courseId})
        res.status(200).json(course);
    } catch (error) {
        console.log(error)
    }
   }
    
}