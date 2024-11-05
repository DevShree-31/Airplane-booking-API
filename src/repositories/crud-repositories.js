const { StatusCodes } = require('http-status-codes')
const {Logger}=require('../config/index')
const AppError = require('../utils/errors/app-error')

class CrudRepository{
    constructor(model){
        this.model=model
    }

    async create(data){
        try {
            const response=await this.model.create(data)
            return response
        } catch (error) {
            Logger.error('Something went wrong in crud:create')
            throw error
        }
    }
    
    async destroy(data){
        try {
            const response=await this.model.destroy(data,{
                where:{
                    id:data
                }
            })
            return response
        } catch (error) {
            Logger.error('Something went wrong in crud:destroy ')
            throw error
        }
    }

    async get(data){
        try {
            const response=await this.model.findByPk(data)
            if(!response){
                throw new AppError("the requested resource is not available",StatusCodes.NOT_FOUND)
            }
            return response
        } catch (error) {
            Logger.error('Something went wrong in crud:getByPk')
            throw error
        }
    }

    async getAll(){
        try {
            const response=await this.model.findAll()
            return response
        } catch (error) {
            Logger.error('Something went wrong in crud:getAll')
            throw error
        }
    }

    async update(id,data){
        try {
            const response=await this.model.update(data,{
                where:{
                    id:id
                }
            })
            return response
        } catch (error) {
            Logger.error('Something went wrong in crud:update')
            throw error
        }
    }
}
module.exports=CrudRepository