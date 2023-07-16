import { Request, Response } from "express";
import { getAllChapters, getChapterById, insertChapter, removeChaptertById, updateChapterById } from "../services/chapter.service";

async function getChapters( req: Request, res: Response ) {
  try {
    const
        response = await getAllChapters(),
        data = response ? response : 'NOT_FOUND';   // Pendiente

    console.log( data );

    res.json( data );

} catch( error ) {
    console.log( `Error en la extracion del listado de capitulos` );
    res.json({
        msg: 'ERROR_CHAPTER_LIST'
    });
}
}
async function getChapterId ( req: Request, res: Response ) {
  const chapterId = req.params.id;

  try {
      const response = await getChapterById( chapterId );

      console.log( res )
      res.json( response );

  } catch ( error ) {
      console.log( `Error en la extracion del capitulo con id: ${ chapterId }` );
      res.json({
          msg: 'ERROR_GET_CHAPTER_BY_ID'
      });
  }


}
async function createChapter( req: Request, res: Response ) {
  try {
    const data = await insertChapter( req.body );
    console.log( data );
    res.json( data );
} catch ( error ) {
    console.log( `Error en la creacion del capitulo` );
    res.json({
        msg: 'ERROR_INSERT_CHAPTER'
    });
} 
}
async function deleteChapterById( req: Request, res: Response ) {
  // Obtengo ID del producto enviado como parametro en la URL
  const chapterId = req.params.id;

  try {
      const response = await removeChaptertById( chapterId );

      console.log( response );
      res.json( response );

  } catch ( error ) {
      console.log( `Error en la eliminacion del Capitulo con id: ${ chapterId }` );
      res.json({
          msg: 'ERROR_DELETE_CHAPTER_BY_ID'
      });
  }
}
async function updateChapter( req: Request, res: Response ) {
  const { params: { id } } = req;
  const { body } = req;    

  try {
      const response = await updateChapterById( id, body );

      console.log( response );
      res.json( response );
  } catch ( error ) {
      console.log( `Error en la actualizacion del capitulo con id: ${ id }` );
      res.json({
          msg: 'ERROR_UPDATE_CHAPTER_BY_ID'
      });
  }
}



export {

    createChapter,
    getChapters,
    getChapterId,
    deleteChapterById,
    updateChapter
}