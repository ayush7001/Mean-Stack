module.exports={
   /**
   * Response Header constants
   */
  RES_HEADER: {
    CONTENT_TYPE: 'application/json',
    CHAR_SET: 'utf-8',
  },
  /**
   * Response Messages Constants
   */
  RES_MESSAGES:{
      OK:'OK',
      NOT_FOUND:'Requested resources not found on server',
      PONG:'pong',
      FAILED_AUTHENTICATION:'failed to authenticate token',
      SOMETHING_WENT_WRONG:'something went wrong, please try again',
      USER_LOGIN: 'user logged in',
    USER_DETAILS: 'user detail in response',
  },

  /**
   * HTTP Code constants
   */
  HTTP_STATUS: {
    OK: 200,
    NOT_FOUND: 404,
    ERROR: 400,
    UNPROCESSABLE_ENTITY: 422,
  },
};


    module.exports.errorCodes = {
        101: {
          status: 401,
          message: 'Failed to authenticate token',
        },
        102: {
          status: 500,
          message: 'something went wrong, please try again.',
        },
        103: {
          status: 422,
          message: 'Please provide token',
        },
        104: {
          status: 404,
          message: 'Requested resource not found on server',
        },
        105: {
          status: 422,
          message: 'Admin with given email does not exist',
        },
        106: {
          status: 422,
          message: 'provided password is incorrect',
        },
        107: {
          status: 422,
          message: 'Provided admin id does not exist. Try different!!!',
        },
        108: {
            status: 422,
            message: 'Provided admin email already exist. Try different!!!',
          }
      };
      
