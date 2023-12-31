
import { Schema, model } from "mongoose";

const chapterSchema = new Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        mangaId: {
            type: String,
            required: true
        },
        pages: {
            type: Number,
            required: true
        }
    },

    {
        timestamps: true
    }
);

const ChapterModel = model( 'capitulo', chapterSchema  );


export default ChapterModel;