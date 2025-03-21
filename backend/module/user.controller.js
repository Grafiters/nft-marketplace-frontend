import { HttpStatusCode } from "axios";
import usersSchema from "../schema/users.schema.js"
import otherHelper from "../utils/helper.js"
import jwtConfig from "../utils/jwt.js"
import {ethers} from 'ethers'

const userController = {}

userController.Auth = async (req, res, next) => {
    const { message, signature } = req.body;

    try {
        const recoverAddress = ethers.verifyMessage(message, signature)

        if (!recoverAddress) {
            return otherHelper.sendResponse(
                res,
                HttpStatusCode.UnprocessableEntity,
                null,
                null,
                "user info"
            )
        }
        // const user = await usersSchema.findOne({
        //     address: recoverAddress,
        //     chainId: 0
        // })
    
        // if (!user) {
        //     const newUser = new usersSchema()
        //     newUser.address = recoverAddress;
        //     newUser.chainId = 0
    
        //     await newUser.save();
        // }
    
        // const data = await usersSchema.findOne({
        //     address: recoverAddress,
        //     chainId: 0
        // })
    
        const token = jwtConfig.sign(recoverAddress)

        return otherHelper.sendResponse(
            res,
            HttpStatusCode.Ok,
            {
                user: recoverAddress,
                token: token
            },
            null,
            "user info",
            token
        )
    } catch (error) {
        next(error)
    }
}

// userController.Update = async (req, res, next) => {
//     const { description, sosmed } = req.body
// }

export default userController;