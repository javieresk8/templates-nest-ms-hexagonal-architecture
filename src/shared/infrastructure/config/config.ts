import { registerAs } from "@nestjs/config";

export default registerAs('config', () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  TIMEZONE: process.env.TIMEZONE,
  PREFIX: process.env.PREFIX,
  HEALTH_CHECK_URL: process.env.HEALTH_CHECK_URL,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_SYNCHRONIZE: process.env.DB_SYNCHRONIZE,
}));