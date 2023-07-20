import { Request, Response } from "express";
import { getAllPlanes, getPlanById, insertPlan, removePlanById, updatePlanById } from "../services/plan.service";


async function getPlanes( req: Request, res: Response ) {
  try {
    const
        response = await getAllPlanes(),
        data = response ? response : 'NOT_FOUND';   

    console.log( data );

    res.json( data );

} catch( error ) {
    console.log( `Error en la extracion del listado de planes` );
    res.json({
        msg: 'ERROR_PLAN_LIST'
    });
}
}
async function getPlanId ( req: Request, res: Response ) {
  const planId = req.params.id;

  try {
      const response = await getPlanById( planId );

      console.log( res )
      res.json( response );

  } catch ( error ) {
      console.log( `Error en la extracion del plan con id: ${ planId }` );
      res.json({
          msg: 'ERROR_GET_PLAN_BY_ID'
      });
  }


}
async function createPlan( req: Request, res: Response ) {
  try {
    const data = await insertPlan( req.body );
    console.log( data );
    res.json( data );
} catch ( error ) {
    console.log( `Error en la creacion del capitulo` );
    res.json({
        msg: 'ERROR_INSERT_CHAPTER'
    });
} 
}
async function deletePlanById( req: Request, res: Response ) {

  const planId = req.params.id;

  try {
      const response = await removePlanById( planId );

      console.log( response );
      res.json( response );

  } catch ( error ) {
      console.log( `Error en la eliminacion del plan con id: ${ planId }` );
      res.json({
          msg: 'ERROR_DELETE_PLAN_BY_ID'
      });
  }
}
async function updatePlan( req: Request, res: Response ) {
  const { params: { id } } = req;
  const { body } = req;    

  try {
      const response = await updatePlanById( id, body );

      console.log( response );
      res.json( response );
  } catch ( error ) {
      console.log( `Error en la actualizacion del plan con id: ${ id }` );
      res.json({
          msg: 'ERROR_UPDATE_PLAN_BY_ID'
      });
  }
}



export {

    createPlan,
    getPlanes,
    getPlanId,
    deletePlanById,
    updatePlan
}