import { Router } from "express";
import * as profiles from "../controllers/profiles.controller";

const router = Router();

router.get("/", profiles.getAll);
router.get("/:id", profiles.getById);

router.post("/", profiles.create);
router.put("/:id", profiles.updateById);

router.delete("/", profiles.deleteAll);
router.delete("/:id", profiles.deleteById);

export default router;
