import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/User/user.route";
import { AdminRoutes } from "./app/modules/Admin/admin.route";

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "PH Health Care server is running...",
  });
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", AdminRoutes);

export default app;
