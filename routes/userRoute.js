import Express from "express";
import { getUserDetails } from "../controllers/userControllers.js";

const router = Express.Router();

router.get('/', getUserDetails);

export default router;