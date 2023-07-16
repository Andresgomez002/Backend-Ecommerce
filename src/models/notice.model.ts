
import { Schema, model } from "mongoose";

const noticeSchema = new Schema(

    {
        titulo: {
            type: String,
            required: true
        },
        subtitulo: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        }, 
        deliveryDate: {
            type: Date,
            required: false
        }
    },

    {
        timestamps: true
    }
);

const NoticeModel = model( 'Notices', noticeSchema  );


export default NoticeModel;