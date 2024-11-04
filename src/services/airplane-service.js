const {AirplaneRepository}=require('../repositories')

const airplaneRepository=new AirplaneRepository()//create new instance of this

async function createAirplane(data){
    try {
        console.log("inside service")
        const response=await airplaneRepository.create(data)
        return response
    } catch (error) {
        throw error
    }
}

module.exports={createAirplane}