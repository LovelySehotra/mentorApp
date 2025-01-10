import { Router} from "express";
import UserRouter from "./user.router";
import CourseRouter from "./course.router"

const appRouter = Router();
appRouter.use("/users",UserRouter);
appRouter.use("/courses",CourseRouter)

export {appRouter};