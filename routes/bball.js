import { Router } from "express";
import * as controllers from "../controllers/bballer.js";

const router = Router();

router.get("/", controllers.getBallers);
router.get("/team/:id", controllers.getTeam);
router.get("/:id", controllers.getBaller);
router.get("/firstname/:name", controllers.getballplayername);
router.post("/", controllers.createBaller);
router.put("/:id", controllers.updateBaller);
router.delete("/:id", controllers.deleteBaller);

export default router;