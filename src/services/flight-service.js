const { StatusCodes } = require('http-status-codes')
const {FlightRepository}=require('../repositories')
const AppError = require('../utils/errors/app-error')
const flightRepository=new FlightRepository()//create new instance of this

async function createFlight(data){
    try {
        const flight=await flightRepository.create(data)
        return flight
    } catch (error) {
        if(error.name==="SequalizeValidationError"){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err)
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new flight object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getAllFlights(query) {
    let customFilter={}
    if(query.trip){
        [departureID,arrivalID]=query.trip.split("-")
        customFilter.departureCityId=departureID
        customFilter.arrivalCityId=arrivalID
    }
    try {
        const flights=await flightRepository.getAllFlights(customFilter)
        return flights
    } catch (error) {
        throw new AppError('Cannot find data of flights',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports={createFlight,getAllFlights}