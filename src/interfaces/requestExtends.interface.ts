import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
export interface RequestExtends extends Request {
    authUser?: JwtPayload | {userId: string, rol: string, name: string}
}