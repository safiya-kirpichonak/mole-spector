const Joi = require("joi");

const checkPhotoSchema = Joi.object({
  type: Joi.string().valid("image/png"),
});

const checkPhoto = async (photo) => {
  await checkPhotoSchema.validateAsync({
    type: photo.type,
  });
};

export default checkPhoto;
