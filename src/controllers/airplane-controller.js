const {AirplaneService}=require('../services')
const {StatusCodes}=require('http-status-codes')
const { successResponse, errorResponse } = require('../utils/common')
async function createAirplane(req,res){
    try {
        const airplane=await AirplaneService.createAirplane({
        modelNumber:req.body.modelNumber,
        capacity:req.body.capacity
        })
        successResponse.data=airplane
        return res.status(StatusCodes.CREATED).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}
async function getAirplanes(req,res){
    try {
        const airplanes=await AirplaneService.getAirplanes();
        successResponse.data=airplanes
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (err) {
        errorResponse.error=err
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}
module.exports={
    createAirplane,getAirplanes
}