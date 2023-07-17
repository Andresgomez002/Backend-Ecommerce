import {  Router } from "express";
import { createNotices, deleteNoticeById, getNoticeId, getNotices } from "../controllers/notice.controller";

const router = Router();
router.get( '/', getNotices)
router.get( '/:id', getNoticeId)
router.post( '/', createNotices)
router.delete( '/:id', deleteNoticeById)



export default router;