const {StatusCodes}=require('http-status-codes')
const info=(req,res)=>{
    res.status(StatusCodes.OK).json({
        success:'true',
        message:'api is running',
        data:{},
        error:{}
    })
}
module.exports={info}