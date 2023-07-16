import { Request, Response, Router } from "express";
import {createChapter, deleteChapterById, getChapterId, getChapters, updateChapter} from "../controllers/chapter.controller";
const router = Router();

router.post( '/', createChapter);
router.get( '/', getChapters);
router.get( '/:id', getChapterId)
router.delete( '/:id', deleteChapterById)
router.put( '/:id', updateChapter)

export default router;