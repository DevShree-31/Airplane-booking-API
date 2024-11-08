const { StatusCodes } = require('http-status-codes')
const {errorResponse}=require('../utils/common/errorResponse')
const AppError=require('../utils/errors/app-error')

async function validateCreateRequest(req,res,next) {
    if(!req.body.name){
        errorResponse.message='Something went wrong while creating an airplane'
        errorResponse.error=new AppError('Model number not found in the oncoming request',StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    next()
}

module.exports={validateCreateRequest}