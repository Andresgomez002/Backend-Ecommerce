import { Request, Response, Router } from "express";
import { authenticationUser } from '../middlewares/authentication.middleware';
import { createPlan, deletePlanById, getPlanId, getPlanes, updatePlan } from "../controllers/plan.controller";
const router = Router();

router.get('/', getPlanes)
router.get( '/:id', getPlanId)
router.post( '/', createPlan)
router.delete( '/:id', deletePlanById)
router.put( '/:id', updatePlan)

export default router;