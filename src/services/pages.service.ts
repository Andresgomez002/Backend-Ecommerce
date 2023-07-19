import { Chapter } from "../interfaces/chapter.interface";
import pageModel from "../models/page.model";

const getAllPages = async () => {
    return await pageModel.find({});
}
const insertPage = async ( product: Chapter ) => {
    const response = await pageModel.create( product );

    return response;
}
const getPageById = async ( pageId: string ) => {
    return await pageModel.findOne({ _id: pageId });
}

const removePagetById = async ( pageId: string ) => {
    return await pageModel.findOneAndRemove({ _id: pageId });
}
const updatePageById = async ( pageId: string, updatePage: Chapter ) => {
    return await pageModel.findOneAndUpdate( 
        { _id: pageId },    
        updatePage,          
        { new: true }           
    );
}

export {
    getAllPages,
    insertPage,
    getPageById,
    removePagetById,
    updatePageById
}