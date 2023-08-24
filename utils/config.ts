import path from "path";
import * as fs from "fs";
import dotenv from "dotenv";
dotenv.config();

export const ETHLAS_ENV = process.env.ETHLAS_ENV || 'dev';

const envFiles = [`.env.${ETHLAS_ENV}`, '.env'];
envFiles.forEach((envFile) => {
  const envFilePath = path.resolve(__dirname, '../../', envFile);
  if (fs.existsSync(envFilePath)) {
    console.log(`Loaded .env file at ${envFilePath}`);
    dotenv.config({ path: envFilePath });
  }
});

export const PRODUCTION = 'production';
export const STAGING = 'staging';
export const DEVELOPMENT = 'dev';
export const PORT = +process.env.PORT || 3002;

export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PORT = +process.env.DB_PORT;
export const DB_NAME = process.env.DB_NAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
