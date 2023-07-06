import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/products.model";

const insertProduct = async ( product: Product ) => {
    const response = await ProductModel.create( product );

    return response;
}

const getAllProducts = async () => {
    return await ProductModel.find({});
}

const getProductById = async ( productId: string ) => {
    return await ProductModel.findOne({ _id: productId });
}

const removeProductById = async ( productId: string ) => {
    return await ProductModel.findOneAndRemove({ _id: productId });
}

const updateProductById = async ( productId: string, updateProduct: Product ) => {
    return await ProductModel.findOneAndUpdate( 
        { _id: productId },     // Id del documento que deseamos actualizar
        updateProduct,          // El documento por el que vamos a actualizar 
        { new: true }           // Configuracion para el comando Update
    );
}


export {
    insertProduct,
    getAllProducts,
    getProductById,
    removeProductById,
    updateProductById
}