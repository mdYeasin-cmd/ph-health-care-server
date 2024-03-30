import express from "express";
import { userRoutes } from "../modules/User/user.route";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { AutheRoutes } from "../modules/Auth/auth.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/auth",
    route: AutheRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
