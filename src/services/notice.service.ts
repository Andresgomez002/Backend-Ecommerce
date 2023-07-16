
import { Notice } from "../interfaces/notice.interface";
import NoticeModel from "../models/notice.model";

const insertNotice = async ( product: Notice ) => {
    const response = await NoticeModel.create( product );

    return response;
}
const getAllNotice = async () => {
    return await NoticeModel.find({});
}
export{
    insertNotice,
    getAllNotice
}