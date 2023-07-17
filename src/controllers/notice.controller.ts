import { Request, Response } from "express";
import { getAllNotice, getNoticeById, insertNotice, removeNoticeById, updateNoticeById } from "../services/notice.service";

async function getNotices( req: Request, res: Response ) {
    try {
        const
            response = await getAllNotice(),
            data = response ? response : 'NOT_FOUND';   
    
        console.log( data );
    
        res.json( data );
    
    } catch( error ) {
        console.log( `Error en la extracion del listado de noticias` );
        res.json({
            msg: 'ERROR_NOTICE_LIST'
        });
    }
}
async function createNotices( req: Request, res: Response ) {
    try {
        const data = await insertNotice( req.body );

        console.log( data );
        res.json( data );
    } catch ( error ) {
        console.log( `Error en la insercion de la noticia` );
        res.json({
            msg: 'ERROR_INSERT_NOTICIA'
        });
    }
  }
  async function getNoticeId ( req: Request, res: Response ) {
    const noticeId = req.params.id;
  
    try {
        const response = await getNoticeById( noticeId );
  
        console.log( res )
        res.json( response );
  
    } catch ( error ) {
        console.log( `Error en la extracion de la noticia con id: ${ noticeId }` );
        res.json({
            msg: 'ERROR_GET_NOTICE_BY_ID'
        });
    }
  
  
  }
  async function deleteNoticeById( req: Request, res: Response ) {

    const noticeId = req.params.id;
  
    try {
        const response = await removeNoticeById( noticeId );
  
        console.log( response );
        res.json( response );
  
    } catch ( error ) {
        console.log( `Error en la eliminacion de la noticia con id: ${ noticeId }` );
        res.json({
            msg: 'ERROR_DELETE_NOTICE_BY_ID'
        });
    }
  }
  async function updateNotice( req: Request, res: Response ) {
    const { params: { id } } = req;
    const { body } = req;    
  
    try {
        const response = await updateNoticeById( id, body );
  
        console.log( response );
        res.json( response );
    } catch ( error ) {
        console.log( `Error en la actualizacion de la noticia con id: ${ id }` );
        res.json({
            msg: 'ERROR_UPDATE_NOTICE_BY_ID'
        });
    }
  }
  
export{
    getNotices,
    createNotices,
    getNoticeId,
    deleteNoticeById,
    updateNotice

}