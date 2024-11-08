const express=require('express')
const router=express.Router()
const {CityController}=require('../../controllers')
const { CityMiddleware } = require('../../middlewares')
router.get('/',CityController.getCities)
router.get('/:id',CityController.getCity)
router.patch('/:id',CityController.updateCity)
router.post('/',CityMiddleware.validateCreateRequest,CityController.createCity)
module.exports=router