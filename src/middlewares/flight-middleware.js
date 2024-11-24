const { StatusCodes } = require('http-status-codes')
const {errorResponse}=require('../utils/common/errorResponse')
const AppError=require('../utils/errors/app-error')
const { compareTime } = require('../utils/helpers/compareTime')

async function validateCreateRequest(req,res,next) {
    if(!req.body.flightNumber){
        errorResponse.message='Something went wrong while creating an flight'
        errorResponse.error=new AppError('flight number not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    if(!req.body.airplaneId){
        errorResponse.message='Something went wrong while creating an flight'
        errorResponse.error=new AppError('Flight AirplaneId not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    if(!req.body.departureCityId){
        errorResponse.message='Something went wrong while creating an flight'
        errorResponse.error=new AppError(' departureCityId not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }    
    if(!req.body.arrivalCityId){
        errorResponse.message='Something went wrong while creating an flight'
        errorResponse.error=new AppError(' arrivalCityId not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    if(!req.body.arrivalTime){
        errorResponse.message='Something went wrong while creating an flight'
        errorResponse.error=new AppError(' arrivalTime not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    if(!req.body.departureTime){
        errorResponse.message='Something went wrong while creating an flight'
        errorResponse.error=new AppError(' departureTime not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    if(!req.body.price){
        errorResponse.message='Something went wrong while creating an flight'
        errorResponse.error=new AppError(' price not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    if(!req.body.totalSeats){
        errorResponse.message='Something went wrong while creating an flight'
        errorResponse.error=new AppError(' totalSeats not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    if(compareTime(req.body.arrivalTime,req.body.departureTime)){
        errorResponse.message='Something went wrong while creating an flight'
        errorResponse.error=new AppError(' arrivalTime is greater than departureTime not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    next()
}

module.exports={validateCreateRequest}