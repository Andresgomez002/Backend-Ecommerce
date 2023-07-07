/** La estructura que definamos aqui se vera reflejada en nuestra base de datos */
import { Schema, model } from "mongoose";


/** Define estructura de datos en la base de datos requerida por Mongoose*/
const authSchema = new Schema(
    // Objeto principal definira atributos del modelo
    {
        nombre: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true,
            default: 'registered'
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }

    },
    // Definira configuraciones que se pueden aplicar en Mongoose para ese objeto
    {
        timestamps: true
    }
);

/** Define el Modelo a partir de la estructura requerida por Mongoose */
const AuthModel = model( 'Users', authSchema  );


export default AuthModel;