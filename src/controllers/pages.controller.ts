import { Request, Response } from "express";
import { getAllPages, getPageById, insertPage, removePagetById, updatePageById } from "../services/pages.service";


async function getPages( req: Request, res: Response ) {
  try {
    const
        response = await getAllPages(),
        data = response ? response : 'NOT_FOUND';   

    console.log( data );

    res.json( data );

} catch( error ) {
    console.log( `Error en la extracion del listado de paginas` );
    res.json({
        msg: 'ERROR_PAGES_LIST'
    });
}
  }
  async function getPage ( req: Request, res: Response ) {
 
    const pageId = req.params.id;

    try {
        const response = await getPageById( pageId );

        console.log( res )
        res.json( response );

    } catch ( error ) {
        console.log( `Error en la extracion de la pagina con id: ${ pageId }` );
        res.json({
            msg: 'ERROR_GET_PAGE_BY_ID'
        });
    }


}
  async function createPage( req: Request, res: Response ) {
    try {
      const data = await insertPage( req.body );
      console.log( data );
      res.json( data );
  } catch ( error ) {
      console.log( `Error en la creacion de la pagina` );
      res.json({
          msg: 'ERROR_INSERT_PAGE'
      });
  } 
  }
  async function deletePageById( req: Request, res: Response ) {

    const pageId = req.params.id;
  
    try {
        const response = await removePagetById( pageId );
  
        console.log( response );
        res.json( response );
  
    } catch ( error ) {
        console.log( `Error en la eliminacion de la pagina con id: ${ pageId }` );
        res.json({
            msg: 'ERROR_DELETE_PAGE_BY_ID'
        });
    }
  }
  async function updatePage( req: Request, res: Response ) {
    const { params: { id } } = req;
    const { body } = req;    
  
    try {
        const response = await updatePageById( id, body );
  
        console.log( response );
        res.json( response );
    } catch ( error ) {
        console.log( `Error en la actualizacion de la pagina con id: ${ id }` );
        res.json({
            msg: 'ERROR_UPDATE_PAGE_BY_ID'
        });
    }
  }
  
  export {
    getPages,
    createPage,
    getPage,
    deletePageById,
    updatePage
  }