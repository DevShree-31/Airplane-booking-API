const { StatusCodes } = require('http-status-codes')
const {FlightRepository}=require('../repositories')
const AppError = require('../utils/errors/app-error')
const { Op } = require('sequelize')
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
    let sortFilter=[]
    const endTripTime=" 23:59:00"
    if(query.trip){
        [departureID,arrivalID]=query.trip.split("-")
        customFilter.departureCityId=departureID
        customFilter.arrivalCityId=arrivalID
    }
    if(query.price){
        [minPrice,maxPrice]=query.price.split('-');
        customFilter.price={
            [Op.between]:[minPrice,(maxPrice==undefined?20000:maxPrice)]
        }
    }
    if(query.travellers){
        customFilter.totalSeats={
            [Op.gte]:query.travellers
        } 
    }
    if(query.tripDate){
        customFilter.departureTime={
            [Op.between]:[query.tripDate,query.tripDate+endTripTime]
        }
    }
    if(query.sort){
    const params=query.sort.split(',')
    const sortFilters=params.map((param)=>param.split('_'))
    sortFilter=sortFilters
    }
    try {
        const flights=await flightRepository.getAllFlights(customFilter,sortFilter)
        return flights
    } catch (error) {
        throw new AppError('Cannot find data of flights',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports={createFlight,getAllFlights}