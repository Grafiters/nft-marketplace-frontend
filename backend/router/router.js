import express from "express"
const routes = express.Router();

import userRoutes from "./api/user.router.js"

//All route of users
routes.use("/user", userRoutes);

export default routes