import { Request, Response, Router } from "express";
import {createChapter, deleteChapterById, getChapterId, getChapters, updateChapter} from "../controllers/chapter.controller";
import { authenticationUser } from '../middlewares/authentication.middleware';
const router = Router();

router.post( '/',authenticationUser, createChapter);
router.get( '/',authenticationUser, getChapters);
router.get( '/:id',authenticationUser,getChapterId)
router.delete( '/:id',authenticationUser,deleteChapterById)
router.put( '/:id',authenticationUser, updateChapter)

export default router;