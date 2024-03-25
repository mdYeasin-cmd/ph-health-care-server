import express from "express";
import { AdminControllers } from "./admin.controller";
import validatedRequest from "../../middlewares/validatedRequest";
import { adminValidationSchemas } from "./admin.validations";

const router = express.Router();

router.get("/", AdminControllers.getAllFromDB);

router.get("/:id", AdminControllers.getByIdFrom);

router.patch(
  "/:id",
  validatedRequest(adminValidationSchemas.update),
  AdminControllers.updateIntoDB
);

router.delete("/:id", AdminControllers.deleteFromDB);

router.delete("/soft/:id", AdminControllers.softDeleteFromDB);

export const AdminRoutes = router;
