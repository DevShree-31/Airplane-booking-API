
const CrudRepository=require('./crud-repositories')
const {Flight}=require('../models')


class  FlightRepository extends CrudRepository{
    constructor(){
        super(Flight)
    }
    async getAllFlights(filter){
        const response=Flight.findAll({
            where:filter
        })
        return response
    }
}

module.exports=FlightRepository