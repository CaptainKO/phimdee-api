
import express = require("express");
import "./extends";

// express
express.response.sendAndWrap = function(this: express.Response, obj, key = 'data', message = 'success') {
  return this.send({
    status: this.statusCode,
    message,
    [key]: obj
  });
};

express.response.sendMessage = function(message) {
  return this.sendAndWrap(message, 'message');
};

express.response.sendError = function(this: Express.Response, error: any) {
  let res;
  if (error instanceof Object) {
    res = {};
    if (error.errors) {
      for (const key in error.errors) {
        if (error.errors.hasOwnProperty(key)) {
          const element = error.errors[key];
          res[key] = element.message;
        }
      }
    } else {
      res = error.toString();
    }
  } else {
    res = error;
  }
  return this.sendAndWrap(res, 'error', 'error');
};

// ~express