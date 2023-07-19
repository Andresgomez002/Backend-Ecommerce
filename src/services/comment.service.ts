import { Comment } from "../interfaces/comments.interface";
import commentModel from "../models/comment.model";

const insertComment = async ( product: Comment ) => {
    const response = await commentModel.create( product );

    return response;
}
const getAllcomments = async () => {
    return await commentModel.find({});
}
const getCommentById = async ( commentId: string ) => {
    return await commentModel.findOne({ _id: commentId });
}
const removeCommentById = async ( commentId: string ) => {
    return await commentModel.findOneAndRemove({ _id: commentId });
}
const updatecommentrById = async ( commentId: string, updateComment: Comment ) => {
    return await commentModel.findOneAndUpdate( 
        { _id: commentId },    
        updateComment,          
        { new: true }           
    );
}
export{
  insertComment,
  getAllcomments,
  getCommentById,
  removeCommentById,
  updatecommentrById
}