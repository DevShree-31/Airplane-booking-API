const {AirportService}=require('../services')
const {StatusCodes}=require('http-status-codes')
const { successResponse, errorResponse } = require('../utils/common')
async function createAirport(req,res){
    try {
        const airport=await AirportService.createAirport({
        name:req.body.name,
        code:req.body.code,
        address:req.body.address,
        cityID:req.body.cityID
        })
        successResponse.data=airport
        return res.status(StatusCodes.CREATED).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}
async function getAirports(req,res){
    try {
        const airports=await AirportService.getAirports();
        successResponse.data=airports
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}

async function getAirport(req,res){
    try {
        const airport=await AirportService.getAirport(req.params.id);
        successResponse.data=airport
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(error.statusCode).json(errorResponse)
    }
}
async function destroyAirport(req,res){
    try {
        const airport=await AirportService.destroyAirport(req.params.id);
        successResponse.data=airport
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(error.statusCode).json(errorResponse)
    }
}
async function  updateAirport(req,res) {
    try {
        const airport=await AirportService.updateAirport(req.params.id,{
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityID:req.body.cityID
        })
        successResponse.data=airport
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}
module.exports={
    createAirport,getAirports,getAirport,destroyAirport,updateAirport
}