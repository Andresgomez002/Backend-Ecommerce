
import { Schema, model } from "mongoose";

const planSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        precio: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);

const planModel = model( 'Planes', planSchema  );


export default planModel;