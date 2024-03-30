import express from "express";
import { AdminControllers } from "./admin.controller";
import validatedRequest from "../../middlewares/validatedRequest";
import { adminValidationSchemas } from "./admin.validations";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  AdminControllers.getAllFromDB
);

router.get(
  "/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  AdminControllers.getByIdFrom
);

router.patch(
  "/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validatedRequest(adminValidationSchemas.update),
  AdminControllers.updateIntoDB
);

router.delete(
  "/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  AdminControllers.deleteFromDB
);

router.delete(
  "/soft/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  AdminControllers.softDeleteFromDB
);

export const AdminRoutes = router;
