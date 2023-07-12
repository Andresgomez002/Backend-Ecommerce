/** Archivo central de enrutamiento */
import { Router, Request, Response } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct, partialUpdateProduct } from "../controllers/product.controller";
import { authenticationUser } from '../middlewares/authentication.middleware';


const router = Router();
// http://localhost:3000/api/products/
router.get( '/', getProducts );                 // Obtiene lista de TODOS los productos
router.get( '/:id', getProduct );               // Obtiene producto por ID
router.post( '/', authenticationUser, createProduct );              // Crea producto
router.put( '/:id', authenticationUser, updateProduct );            // Actualiza TODOS los campos del producto
router.patch( '/:id', authenticationUser, partialUpdateProduct );   // Actualiza algunos campos del producto
router.delete( '/:id', authenticationUser, deleteProduct );         // Elimina el producto
router.get( '/user/:id', authenticationUser, (req: Request, res: Response) => {
res.json({
    msg: ' Obtener productos por usuario'
});
});

export default router;