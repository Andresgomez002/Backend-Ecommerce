/** Archivo central de enrutamiento */
import { Router, Request, Response } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct, partialUpdateProduct } from "../controllers/product.controller";
import { authenticationUser } from '../middlewares/authentication.middleware';


const router = Router();
// http://localhost:3000/api/products/
router.get( '/', authenticationUser, getProducts );                 // Obtiene lista de TODOS los productos
router.get( '/:id', getProduct );               // Obtiene producto por ID
router.post( '/', createProduct );              // Crea producto
router.put( '/:id', updateProduct );            // Actualiza TODOS los campos del producto
router.patch( '/:id', partialUpdateProduct );   // Actualiza algunos campos del producto
router.delete( '/:id', deleteProduct );         // Elimina el producto


export default router;