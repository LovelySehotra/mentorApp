import { Router } from "express";
import { CourseController } from "../controllers/course.controller";
const courseController = new CourseController();

const router = Router()
router.route("/")
    .post(courseController.createCourse)
    .get(courseController.getAllCourse)
router.route("/:courseId").get(courseController.getCourseById)
export default router