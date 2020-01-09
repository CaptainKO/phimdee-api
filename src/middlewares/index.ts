import {
  handleCors,
  handleCookies,
  handleBodyRequest,
  handleCompression,
} from "./common";

export default [
  handleCors,
  handleCompression,
  handleCookies,
  handleBodyRequest,
];