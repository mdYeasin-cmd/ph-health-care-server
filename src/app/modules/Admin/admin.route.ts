import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import { AdminControllers } from "./admin.controller";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", AdminControllers.getAllFromDB);

router.get("/:id", AdminControllers.getByIdFrom);

router.patch("/:id", AdminControllers.updateIntoDB);

router.delete("/:id", AdminControllers.deleteFromDB);

router.delete("/soft/:id", AdminControllers.softDeleteFromDB);

export const AdminRoutes = router;
