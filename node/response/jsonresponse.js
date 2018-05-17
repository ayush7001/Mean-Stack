const constants = require('./constant');

class ResponseHandler{
    sendError(res,err){
        if(constants.errorCodes[err.message]){
            res.status(constants.errorCodes[err.message].status);
            res.send({ isError: true, message: constants.errorCodes[err.message].message });
        }
        else{
            res.status(500);
      res.send({ isError: true, message: err.message });
    }
    }
    sendResponse(res, data) {
        res.send({ isError: false, data });
      }
}
module.exports = new ResponseHandler();