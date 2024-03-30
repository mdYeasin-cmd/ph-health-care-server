import { Request, Response } from "express";
import { userService } from "./user.service";
import catchAsync from "../../../shared/catchAsync";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.createAdmin(req);

  res.status(200).json({
    sucess: true,
    message: "Admin is created successfully!",
    data: result,
  });
});

export const userController = {
  createAdmin,
};
