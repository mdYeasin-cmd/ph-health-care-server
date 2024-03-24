import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import { AdminControllers } from "./admin.controller";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", AdminControllers.getAllFromDB);

export const AdminRoutes = router;
