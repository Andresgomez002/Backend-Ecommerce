import { Chapter } from "../interfaces/chapter.interface";
import ChapterModel from "../models/chapter.model";

const insertChapter = async ( product: Chapter ) => {
    const response = await ChapterModel.create( product );

    return response;
}
const getAllChapters = async () => {
    return await ChapterModel.find({});
}
const getChapterById = async ( chapterId: string ) => {
    return await ChapterModel.findOne({ _id: chapterId });
}
const removeChaptertById = async ( chapterId: string ) => {
    return await ChapterModel.findOneAndRemove({ _id: chapterId });
}
const updateChapterById = async ( chapterId: string, updateChapter: Chapter ) => {
    return await ChapterModel.findOneAndUpdate( 
        { _id: chapterId },    
        updateChapter,          
        { new: true }           
    );
}
export{
    insertChapter,
    getAllChapters,
    getChapterById,
    removeChaptertById,
    updateChapterById
}