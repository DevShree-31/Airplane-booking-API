const {CityService}=require('../services')
const {StatusCodes}=require('http-status-codes')
const { successResponse, errorResponse } = require('../utils/common')

async function createCity(req,res){
    try {
        const airplane=await CityService.createCity({
        name:req.body.name
        })
        successResponse.data=airplane
        return res.status(StatusCodes.CREATED).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}

module.exports={createCity}