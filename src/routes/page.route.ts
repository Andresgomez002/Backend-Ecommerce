import {  Request, Response, Router } from "express";
import { createPage, deletePageById, getPage, getPages, updatePage } from "../controllers/pages.controller";
import { authenticationUser } from '../middlewares/authentication.middleware';
const router = Router();
router.get( '/', authenticationUser, getPages )
router.post( '/', authenticationUser, createPage)
router.get( '/:id', authenticationUser, getPage)
router.delete( '/:id', authenticationUser, deletePageById)
router.put( '/:id', authenticationUser, updatePage)




export default router;