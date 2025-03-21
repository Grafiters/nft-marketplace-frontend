import express from "express"
const router = express.Router()
import userController from "../../module/user.controller.js"

/**
 * @route POST api/user/auth
 * @description Register user route
 * @access Public
 */
router.post("/auth", userController.Auth);

export default router