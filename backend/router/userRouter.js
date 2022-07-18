import { register, login, getAllUsers } from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/users").get(getAllUsers);

export default router;
