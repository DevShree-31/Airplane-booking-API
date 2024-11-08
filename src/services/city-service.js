const { StatusCodes } = require('http-status-codes')
const {CityRepository}=require('../repositories')
const AppError = require('../utils/errors/app-error')
const city = require('../models/city')
const cityRepository=new CityRepository()//create new instance of this

async function createCity(data){
    try {
        const response=await cityRepository.create(data)
        return response
    } catch (error) {
        if(error.name=='SequelizeValidationError'||error.name=='SequelizeUniqueConstraintError'){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message)
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new city object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getCities(){
    try {
        const response=await cityRepository.getAll()
        return response
    } catch (error) {
        throw new AppError('Cannot fetch data of all cities',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getCity(data){
    try {
        const city=await cityRepository.get(data)
        return city;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested is not found',error.statusCode)
        }
        throw new AppError('Cannot fetch data of given city',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function destroyCity(id){
    try {
        const city=await cityRepository.destroy(id)
        return city;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The Airplane you requested to delete is not found',error.statusCode)
        }
        throw new AppError('Something went wrong cannot destroy airplane',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function updateCity(id,data){
    try {
        const city=await cityRepository.update(id,data)
        return city
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested is not  available to be updated',error.statusCode)
        }
        throw new AppError('Something went wrong cannot update given id',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports={createCity,getCities,getCity,updateCity,destroyCity}