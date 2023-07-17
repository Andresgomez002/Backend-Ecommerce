
import { Notice } from "../interfaces/notice.interface";
import NoticeModel from "../models/notice.model";

const insertNotice = async ( product: Notice ) => {
    const response = await NoticeModel.create( product );

    return response;
}
const getAllNotice = async () => {
    return await NoticeModel.find({});
}
const getNoticeById = async ( noticeId: string ) => {
    return await NoticeModel.findOne({ _id: noticeId });
}
const removeNoticeById = async ( noticeId: string ) => {
    return await NoticeModel.findOneAndRemove({ _id: noticeId });
}
const updateNoticeById = async ( noticeId: string, updateNotice: Notice ) => {
    return await NoticeModel.findOneAndUpdate( 
        { _id: noticeId },    
        updateNotice,          
        { new: true }           
    );
}
export{
    insertNotice,
    getAllNotice,
    getNoticeById,
    removeNoticeById,
    updateNoticeById
}