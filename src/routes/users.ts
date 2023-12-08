import { Router } from "express";
import * as users from "../controllers/users.controller";

const router = Router();

router.get("/", users.getAll);
router.get("/:id", users.getById);

router.post("/", users.create);
router.put("/:id", users.updateById);

router.delete("/", users.deleteAll);
router.delete("/:id", users.deleteById);

export default router;
