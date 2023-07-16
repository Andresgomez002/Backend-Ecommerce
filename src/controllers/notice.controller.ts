import { Request, Response } from "express";
import { getAllNotice, insertNotice } from "../services/notice.service";

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
export{
    getNotices,
    createNotices

}