const express=require('express')
const router=express.Router()
const {AirplaneController}=require('../../controllers')
router.post('/',AirplaneController.createAirplane)// for creating an airplane
router.get('/',AirplaneController.getAirplanes)// for getting all airplanes
router.get('/:id',AirplaneController.getAirplane)
router.delete('/:id',AirplaneController.destroyAirplane)


module.exports=router
