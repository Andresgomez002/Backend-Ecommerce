import { Request, Response, Router } from "express";
import { createNotices, getNotices } from "../controllers/notice.controller";

const router = Router();
router.get( '/', getNotices)
router.post( '/', createNotices)



export default router;