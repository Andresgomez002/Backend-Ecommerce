import { Request, Response } from "express";
import { insertProduct } from "../services/product.service";


async function getProducts( req: Request, res: Response ) {
    console.log( `Obtiene todos los productos` );
    res.send( `Obtiene todos los productos`);
}
async function getProduct ( req: Request, res: Response ) {
    console.log( `Obtiene un producto por ID` );
    res.send( `Obtiene un producto por ID` );
}
async function createProduct( req: Request, res: Response ) {
    try {
        const data = await insertProduct( req.body );

        console.log( data );
        res.json( data );
    } catch ( error ) {
        console.log( `Error en la insercion del producto` );
        res.json({
            msg: 'ERROR_INSERT_PRODUCT'
        });
    }
}
async function updateProduct( req: Request, res: Response ) {
    console.log( `Actualiza un producto por ID` );
    res.send(`Actualiza un producto por ID`);
}
async function deleteProduct( req: Request, res: Response ) {
    console.log( `Elimina un producto por ID` );
    res.send(`Elimina un producto por ID` );
}

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};