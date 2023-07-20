import { Request, Response, Router } from "express";
import { authenticationUser } from '../middlewares/authentication.middleware';
import { createComment, deleteComment, getComment, getCommentId, updateComment } from "../controllers/comments.controller";
const router = Router();

router.get('/', getComment)
router.get( '/:id', getCommentId)
router.post( '/', createComment)
router.delete( '/:id', deleteComment)
router.put( '/:id', updateComment)

export default router;