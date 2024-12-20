
const CrudRepository=require('./crud-repositories')
const {Flight}=require('../models')


class  FlightRepository extends CrudRepository{
    constructor(){
        super(Flight)
    }
    async getAllFlights(filter,sort){
        const response=Flight.findAll({
            where:filter,
            order:sort
        })
        return response
    }
}

module.exports=FlightRepository