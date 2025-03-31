import * as Joi from "joi";

export const JoiValidations = Joi.object({
  NODE_ENV: Joi.string().required(),
  PORT: Joi.number().default(3000),
  TIMEZONE: Joi.string().default("UTC-5"),
  PREFIX: Joi.string().default("api"),
  HEALTH_CHECK_URL: Joi.string().default("http://localhost:3000/api/docs"),
});