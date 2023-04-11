import { Router } from "express";
import ballerRoutes from "./bball.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/bball", ballerRoutes);


export default router;