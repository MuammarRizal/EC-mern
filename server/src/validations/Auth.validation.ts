import Joi from "joi";
import { RegisterType } from "../types/Auth.types";

const AuthRegisterValidation = (payload: RegisterType) => {
  const schema = Joi.object({
    username: 
    Joi.string()
        .pattern(/^[a-zA-Z0-9 ]+$/)  // Memungkinkan huruf, angka, dan spasi
        .min(3)
        .max(30)
        .required(),
    email: 
    Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net", "id"] },
        })
        .required(),
    password: 
        Joi.string()
            .min(8)
            .required(),
  });

  return schema.validate(payload);
};

export { AuthRegisterValidation };
