const express=require('express')
const router=express.Router()
const {AirplaneController}=require('../../controllers')
router.post('/',AirplaneController.createAirplane)
router.get('/',AirplaneController.getAirplanes)

module.exports=router
