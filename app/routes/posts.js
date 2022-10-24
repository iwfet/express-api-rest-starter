import { Router } from "express";
import { PostService } from "../services/postService";
import { handleExceptions} from "../middlewares/errorHandlers"


export const routesPots = new Router();

routesPots.post("/create-post",handleExceptions(PostService.createPost.bind(PostService)))

