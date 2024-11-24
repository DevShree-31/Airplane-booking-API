const { StatusCodes } = require('http-status-codes')
const {AirportRepository}=require('../repositories')
const AppError = require('../utils/errors/app-error')
const airportRepository=new AirportRepository()//create new instance of this

async function createAirport(data){
    try {
        const response=await airportRepository.create(data)
        return response
    } catch (error) {
        if(error.name==="SequalizeValidationError"){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err)
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new airport object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getAirports(){
    try {
        const airports=await airportRepository.getAll()
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch data of all airports',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirport(data){
    try {
        const airport=await airportRepository.get(data)
        return airport;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The Airport you requested is not found',error.statusCode)
        }
        throw new AppError('Cannot fetch data of given airport',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function destroyAirport(id){
    try {
        const airport=await airportRepository.destroy(id)
        return airport;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The Airport you requested to delete is not found',error.statusCode)
        }
        throw new AppError('Something went wrong cannot destroy airport',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function updateAirport(id,data){
    try {
        const airport=await airportRepository.update(id,data)
        return airport
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not  available to be updated',error.statusCode)
        }
        throw new AppError('Something went wrong cannot update given id',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports={createAirport,getAirports,getAirport,destroyAirport,updateAirport
}