import express from "express";
import { createData, fetchDataById } from "../controllers/dataController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/:id").post(protect,createData)
router.route("/getdata").get(protect,fetchDataById)

export default router;
