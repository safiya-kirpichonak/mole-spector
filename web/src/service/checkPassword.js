const Joi = require("joi");

const checkPasswordSchema = Joi.object({
  password: Joi.string()
    .min(8)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$"
      )
    ),
});

const checkPassword = async (password) => {
  await checkPasswordSchema.validateAsync({ password });
};

export default checkPassword;
