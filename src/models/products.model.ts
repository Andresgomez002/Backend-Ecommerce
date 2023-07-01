/** La estructura que definamos aqui se vera reflejada en nuestra base de datos */
import { Schema, model } from "mongoose";


/** Define estructura de datos en la base de datos requerida por Mongoose*/
const productSchema = new Schema(
    // Objeto principal definira atributos del modelo
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: false
        },
        description: {
            type: String
        }
    },
    // Definira configuraciones que se pueden aplicar en Mongoose para ese objeto
    {
        timestamps: true
    }
);

/** Define el Modelo a partir de la estructura requerida por Mongoose */
const ProductModel = model( 'Products', productSchema  );


export default ProductModel;