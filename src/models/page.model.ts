
import { Schema, model } from "mongoose";

const pageSchema = new Schema(
    {
        url: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: false
        },
        capituloId: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);

const pageModel = model( 'page', pageSchema  );


export default pageModel;