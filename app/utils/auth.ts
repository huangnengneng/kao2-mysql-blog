//加密解密
import Jwt, { JwtPayload, TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import config from "../config";
function sign(data: any) { //加密
    return Jwt.sign({ admin: data }, config.jwt.jwt_secret as string, { expiresIn: config.jwt.jwt_expire })
}

// 解密
function verify(token: string): { admin: JwtPayload | string | null, error: TokenExpiredError | JsonWebTokenError | null } {
    try {
        const res = Jwt.verify(token, config.jwt.jwt_secret as string)
        return {
            admin: res,
            error: null as TokenExpiredError | JsonWebTokenError | null
        }
    } catch (err) {
        return { admin: null, error: err as TokenExpiredError | JsonWebTokenError | null }
    }
}
export {
    sign, verify
}