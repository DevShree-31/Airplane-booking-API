const express=require('express')
const router=express.Router()
const {FlightController}=require('../../controllers')
const { FlightMiddleware } = require('../../middlewares')
router.post('/',FlightMiddleware.validateCreateRequest,FlightController.createFlight)// for creating an airplane
router.get('/',FlightController.getAllFlights)
module.exports=router
