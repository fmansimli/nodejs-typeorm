import { Router } from "express";
import * as categories from "../controllers/categories.controller";
import { validate } from "../middlewares/validate";
import { CreateCategoryDto } from "../validations/create-category.dto";

const router = Router();

router.get("/", categories.getAll);
router.get("/:id", categories.getById);

router.post("/", validate(CreateCategoryDto), categories.create);
router.put("/:id", categories.updateById);

router.delete("/", categories.deleteAll);
router.delete("/:id", categories.deleteById);

export default router;
