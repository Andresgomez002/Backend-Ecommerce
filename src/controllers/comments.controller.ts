import { Request, Response } from "express";
import { getAllcomments, getCommentById, insertComment, removeCommentById, updatecommentrById } from "../services/comment.service";

async function getComment( req: Request, res: Response ) {
  try {
    const
        response = await getAllcomments(),
        data = response ? response : 'NOT_FOUND';   

    console.log( data );

    res.json( data );

} catch( error ) {
    console.log( `Error en la extracion del listado de comentarios` );
    res.json({
        msg: 'ERROR_COMMENTS_LIST'
    });
}
}
async function getCommentId ( req: Request, res: Response ) {
  const commentId = req.params.id;

  try {
      const response = await getCommentById( commentId );

      console.log( res )
      res.json( response );

  } catch ( error ) {
      console.log( `Error en la extracion del comentario con id: ${ commentId }` );
      res.json({
          msg: 'ERROR_GET_CHAPTER_BY_ID'
      });
  }


}
async function createComment( req: Request, res: Response ) {
  try {
    const data = await insertComment( req.body );
    console.log( data );
    res.json( data );
} catch ( error ) {
    console.log( `Error en la creacion del comentario` );
    res.json({
        msg: 'ERROR_INSERT_CHAPTER'
    });
} 
}
async function deleteComment( req: Request, res: Response ) {

  const commentId = req.params.id;

  try {
      const response = await removeCommentById( commentId );

      console.log( response );
      res.json( response );

  } catch ( error ) {
      console.log( `Error en la eliminacion del comentario con id: ${ commentId }` );
      res.json({
          msg: 'ERROR_DELETE_CHAPTER_BY_ID'
      });
  }
}
async function updateComment( req: Request, res: Response ) {
  const { params: { id } } = req;
  const { body } = req;    

  try {
      const response = await updatecommentrById( id, body );

      console.log( response );
      res.json( response );
  } catch ( error ) {
      console.log( `Error en la actualizacion del comentario con id: ${ id }` );
      res.json({
          msg: 'ERROR_UPDATE_CHAPTER_BY_ID'
      });
  }
}



export {

    createComment,
    getComment,
    getCommentId,
    deleteComment,
    updateComment
}