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
async function getCity(){
    try {
        const response=await cityRepository.getAll()
        return response
    } catch (error) {
        throw new AppError('Cannot fetch data of all cities',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports={createCity,getCity}