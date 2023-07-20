
import { Schema, model } from "mongoose";

const commentSchema = new Schema(
    {
        comentario: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        noticeId: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);

const commentModel = model( 'comments', commentSchema  );


export default commentModel;