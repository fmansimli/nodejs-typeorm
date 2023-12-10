import { Router } from "express";
import * as posts from "../controllers/posts.controller";
import { validate } from "../middlewares/validate";
import { CreatePostDto } from "../validations/create-post.dto";

const router = Router();

router.get("/", posts.getAll);
router.get("/:id", posts.getById);

router.post("/", validate(CreatePostDto), posts.create);
router.put("/:id", posts.updateById);

router.delete("/", posts.deleteAll);
router.delete("/:id", posts.deleteById);

export default router;
