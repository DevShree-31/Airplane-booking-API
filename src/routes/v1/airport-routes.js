const express=require('express')
const router=express.Router()
const {AirportController}=require('../../controllers')
const { AirportMiddleware } = require('../../middlewares')
router.post('/',AirportMiddleware.validateCreateRequest,AirportController.createAirport)// for creating an airport
router.get('/',AirportController.getAirports)// for getting all airport
router.get('/:id',AirportController.getAirport)
router.delete('/:id',AirportController.destroyAirport)
router.patch('/:id',AirportController.updateAirport)
module.exports=router
