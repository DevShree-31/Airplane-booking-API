const {CityService}=require('../services')
const {StatusCodes}=require('http-status-codes')
const { successResponse, errorResponse } = require('../utils/common')

async function createCity(req,res){
    try {
        const city=await CityService.createCity({
        name:req.body.name
        })
        successResponse.data=city
        return res.status(StatusCodes.CREATED).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}

async function getCities(req,res){
    try {
        const cities=await CityService.getCities();
        successResponse.data=cities
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}
async function getCity(req,res){
    try {
        const city=await CityService.getCity(req.params.id);
        successResponse.data=city
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(error.statusCode).json(errorResponse)
    }
}
async function destroyCity(req,res){
    try {
        const city=await CityService.destroyCity(req.params.id);
        successResponse.data=city
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(error.statusCode).json(errorResponse)
    }
}
async function  updateCity(req,res) {
    try {
        const city=await CityService.updateCity(req.params.id,{
            name:req.body.name
        })
        successResponse.data=city
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}
module.exports={createCity,getCities,getCity,updateCity,destroyCity}