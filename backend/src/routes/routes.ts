import { Router } from "express";
import { validateSchema } from "../middleware/validateShema";
import { productRegisterSchema } from "../schema/registerClientSchema";

const routes = Router();

routes.get("/product",);
routes.post("/product", validateSchema(productRegisterSchema),);

export default routes;