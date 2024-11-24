const {FlightService}=require('../services')
const {StatusCodes}=require('http-status-codes')
const { successResponse, errorResponse } = require('../utils/common')
async function createFlight(req,res){
    try {
        const airplane=await FlightService.createFlight({
        flightNumber:req.body.flightNumber,
        airplaneId:req.body.airplaneId,
        departureCityId:req.body.departureCityId,
        arrivalCityId:req.body.arrivalCityId,
        arrivalTime:req.body.arrivalTime,
        departureTime:req.body.departureTime,
        price:req.body.price,
        boardingGate:req.body.boardingGate,
        totalSeats:req.body.totalSeats
        })
        successResponse.data=airplane
        return res.status(StatusCodes.CREATED).json(successResponse)
    } catch (error) {
        errorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}

module.exports={
    createFlight
}