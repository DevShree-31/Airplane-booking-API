const express=require('express')
const router=express.Router()
const {AirplaneController}=require('../../controllers')
const { AirplaneMiddleware } = require('../../middlewares')
router.post('/',AirplaneMiddleware.validateCreateRequest,AirplaneController.createAirplane)// for creating an airplane
router.get('/',AirplaneController.getAirplanes)// for getting all airplanes
router.get('/:id',AirplaneController.getAirplane)
router.delete('/:id',AirplaneController.destroyAirplane)
router.patch('/:id',AirplaneController.updateAirplane)
module.exports=router
