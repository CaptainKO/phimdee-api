// libs

import { Router } from "express";
import cors = require('cors');
import compression = require("compression");
import cookieParser = require('cookie-parser');
import bodyParser = require("body-parser");
import logger = require('morgan');
import * as jsonwebtoken from "jsonwebtoken";

// app
import { IS_PROD, SESSION_SECRET, DB_URI, JWT_SECRET } from "../environment";

type Handle = (router: Router) => void;

export const handleCors: Handle = (router) => {
  router.use(cors());
};

export const handleBodyRequest: Handle = (router) => {
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());
};

export const useLogger: Handle = (router) => {
  if (!IS_PROD) {
    router.use(logger('dev'));
  }
};

export const handleCompression: Handle = (router) => {
  if (IS_PROD) {
    router.use(compression());
  }
};

export const handleCookies: Handle = (router) => {
  router.use(cookieParser());
};

