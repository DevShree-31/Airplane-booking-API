const {Logger}=require('../config/index')

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

    async getByPk(data){
        try {
            const response=await this.model.findByPk(data)
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