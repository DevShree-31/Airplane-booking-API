const { StatusCodes } = require('http-status-codes')
const {AirplaneRepository}=require('../repositories')
const AppError = require('../utils/errors/app-error')
const airplaneRepository=new AirplaneRepository()//create new instance of this

async function createAirplane(data){
    try {
        const response=await airplaneRepository.create(data)
        return response
    } catch (error) {
        if(error.name==="SequalizeValidationError"){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err)
            })
            throw AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw AppError('Cannot create a new airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports={createAirplane}