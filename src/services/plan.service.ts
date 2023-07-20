import { Plan } from "../interfaces/plan.interface";
import planModel from "../models/plan.model";


const insertPlan = async ( product: Plan ) => {
    const response = await planModel.create( product );

    return response;
}
const getAllPlanes = async () => {
    return await planModel.find({});
}
const getPlanById = async ( planId: string ) => {
    return await planModel.findOne({ _id: planId });
}
const removePlanById = async ( planId: string ) => {
    return await planModel.findOneAndRemove({ _id: planId });
}
const updatePlanById = async ( planId: string, updatePlan: Plan ) => {
    return await planModel.findOneAndUpdate( 
        { _id: planId },    
        updatePlan,          
        { new: true }           
    );
}
export{
    insertPlan,
    getAllPlanes,
    getPlanById,
    removePlanById,
    updatePlanById
}