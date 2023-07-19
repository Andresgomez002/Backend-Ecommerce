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
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        chapters: {
            type: Number,
            required: true
        },
        ranking: {
            type: Number,
            default: 0
        },
        category: {
            type: String,
            default: 'Uncategorized'
        }, 
        userID: {
            type: String,
            required: true
        }, 
        deliveryDate: {
            type: Date,
            default: new Date
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