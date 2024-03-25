import { NextFunction, Request, Response } from "express";
import { AdminServices } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters = pick(req.query, adminFilterableFields);
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);

    const result = await AdminServices.getAllFromDB(filters, options);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data fetched!",
      meta: result.meta,
      data: result.data,
    });
  } catch (error: any) {
    next(error);
  }
};

const getByIdFrom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const result = await AdminServices.getByIdFrom(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data fetched by id!",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const updateIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const result = await AdminServices.updateIntoDB(id, data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data updated!",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const deleteFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await AdminServices.deleteFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data deleted!",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const softDeleteFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await AdminServices.softDeleteFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data deleted!",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const AdminControllers = {
  getAllFromDB,
  getByIdFrom,
  updateIntoDB,
  deleteFromDB,
  softDeleteFromDB,
};
