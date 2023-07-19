import {  Request, Response, Router } from "express";

const router = Router();
router.get( '/', (req: Request, res: Response)=>{
    res.json({
        msg: 'aqui va el comtrolador para obtener paginass'
    })
})




export default router;