
declare namespace Express {
  // add more properties to requests
  export interface Request {
    payload?: any;
    user: User;
  }

  
  export interface Response {
    sendAndWrap(obj: any, key?: string, message?: string): Response;
    sendPaginate(obj: any): Response;
    sendError(obj: any): Response;
    sendMessage(str: string): Response;
    jsonAndWrap(obj: any, key?: string): Response;
  }


  /**
   * overwrite user interfaces for request
   */
  type IUser = import('../database/entity/user.entity').User
  export interface User extends IUser{}

  /**
   * overwrite multer interface
   */
  export namespace Multer {
    interface File {
      url: string;
      public_id: string;
      secure_url: string;
    }
  } 
}
