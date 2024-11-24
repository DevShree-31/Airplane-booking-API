const { StatusCodes } = require('http-status-codes')
const {errorResponse}=require('../utils/common/errorResponse')
const AppError=require('../utils/errors/app-error')

async function validateCreateRequest(req,res,next) {
    if(!req.body.name){
        errorResponse.message='Something went wrong while creating an airport'
        errorResponse.error=new AppError('Airport name not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    if(!req.body.code){
        errorResponse.message='Something went wrong while creating an airport'
        errorResponse.error=new AppError('Airport code not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    if(!req.body.cityID){
        errorResponse.message='Something went wrong while creating an airport'
        errorResponse.error=new AppError('Airport cityID not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    next()
}

module.exports={validateCreateRequest}