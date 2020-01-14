import * as dotenv from "dotenv";
dotenv.config();

export const { 
  NODE_ENV,
  SERVER_PORT = 8443,
  WEB_PORT = 80,
  DB_URI,
  JWT_SECRET = 'secret',
  SESSION_SECRET = 'session-secret',
  FFMPEG_PATH,
  FFPROBE_PATH
} = process.env;


export const IS_PROD = NODE_ENV === 'production';
