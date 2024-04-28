import express from "express";
import { PaymentController } from "./payment.controller";

const rounter = express.Router();

rounter.get("/ipn", PaymentController.validatePayment);

rounter.post("/init-payment/:appointmentId", PaymentController.initPayment);

export const PaymentRoutes = rounter;
