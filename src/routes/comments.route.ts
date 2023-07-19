import { Request, Response, Router } from "express";
import { authenticationUser } from '../middlewares/authentication.middleware';
const router = Router();

router.get('/', (req: Request, res:Response)=>{
    res.json({
        msg: 'aqui van los comentarios'
    })
})


export default router;