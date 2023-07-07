/** Archivo central de enrutamiento */
import { Router, Request, Response } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.controller";


const router = Router();
// http://localhost:3000/api/auth/register
router.post( '/register', ( req: Request, res: Response) => {
    console.log( 'Registra usuario' );
    res.send( 'Registra usuario' );
});
router.post( '/login', ( req: Request, res: Response ) => {
    console.log( 'Login usuario' );
    res.send( 'Login usuario' );
});


export default router;