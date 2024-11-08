const { StatusCodes } = require('http-status-codes')
const {AirplaneRepository}=require('../repositories')
const AppError = require('../utils/errors/app-error')
const airplane = require('../models/airplane')
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
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getAirplanes(){
    try {
        const airplanes=await airplaneRepository.getAll()
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot fetch data of all airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirplane(data){
    try {
        const airplane=await airplaneRepository.get(data)
        return airplane;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The Airplane you requested is not found',error.statusCode)
        }
        throw new AppError('Cannot fetch data of given airplane',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function destroyAirplane(id){
    try {
        const airplane=await airplaneRepository.destroy(id)
        return airplane;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The Airplane you requested to delete is not found',error.statusCode)
        }
        throw new AppError('Something went wrong cannot destroy airplane',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function updateAirplane(id,data){
    try {
        const airplane=await airplaneRepository.update(id,data)
        return airplane
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The Airplane you requested is not  available to be updated',error.statusCode)
        }
        throw new AppError('Something went wrong cannot update given id',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports={createAirplane,getAirplanes,getAirplane,destroyAirplane,updateAirplane
}