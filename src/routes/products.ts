/** Archivo central de enrutamiento */
import { Router, Request, Response } from "express";

const router = Router();
// http://localhost:3000/api/products/
router.get( '/', ( req: Request, res: Response ) => {
    const msg = 'Products';

    console.log( msg );
    res.send( `<h1>${ msg }</h1>`)
});


export default router;