import {
  handleCors,
  handleCookies,
  handleBodyRequest,
  handleCompression,
  useLogger,
} from "./common";

export default [
  handleCors,
  handleCompression,
  handleCookies,
  handleBodyRequest,
  useLogger,
];