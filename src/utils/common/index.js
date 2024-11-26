const { errorResponse } = require("./errorResponse");
const { successResponse } = require("./SuccessResponse");

module.exports={
    successResponse,
    errorResponse,
    ENUM:require('./enums')
}