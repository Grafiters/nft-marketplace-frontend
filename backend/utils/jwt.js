import jwt from "jsonwebtoken";
const jwtConfig = {};

const SECRET = process.env.HASH_SECRET

jwtConfig.sign = (text) => {
    const sign = jwt.sign({ text }, SECRET, { expiresIn: "1d" })

    return sign;
}

jwtConfig.verify = (text) => {
    const verify = jwt.verify(text, SECRET)
    return verify;
}

export default jwtConfig;