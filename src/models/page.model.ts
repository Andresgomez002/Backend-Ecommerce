
import { Schema, model } from "mongoose";

const pageSchema = new Schema(
    {
        url: {
            type: String,
            required: true
        },
        numeroPage: {
            type: Number,
            required: false
        },
        capituloId: {
            type: String,
            required: false
        }
    },

    {
        timestamps: true
    }
);

const pageModel = model( 'page', pageSchema  );


export default pageModel;