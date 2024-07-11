import Joi from "joi";
import React, { useState } from "react";

import "./style.css";
import ImageCrop from "./image-crop";
import Loading from "../../atoms/loader";
import ai from "../../../httpRequests/ai";
import DragDropFile from "./drag-drop-file";
import SubmitButton2 from "./submit-button-2";
import { getCroppedImg } from "./image-crop/getCroppedImg";

const SendPhotoForm = ({ setResultHandler }) => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [photo, setPhoto] = useState("");
  const [photos, setPhotos] = useState("");
  const [urlPhoto, setUrlPhoto] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const checkPhotoSchema = Joi.object({
    width: Joi.number().min(300).required(),
    height: Joi.number().min(300).required(),
    type: Joi.string().valid("image/jpg", "image/jpeg").required(),
  });

  const checkPhoto = async (photo) => {
    if (!photo) throw new Error("No image provided!");

    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.readAsDataURL(photo);

      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = async () => {
          try {
            await checkPhotoSchema.validateAsync({
              type: photo.type,
              width: img.width,
              height: img.height,
            });
            resolve({ width: img.width, height: img.height });
          } catch (validationError) {
            reject(validationError);
          }
        };

        img.onerror = () => {
          reject(new Error("Error loading image."));
        };
      };

      reader.onerror = () => {
        reject(new Error("Error reading file."));
      };
    });
  };

  const onDropHandler = async (event) => {
    event.preventDefault();
    const photo = event.dataTransfer.files[0];
    let error;
    try {
      await checkPhoto(photo);
    } catch (_) {
      error = true;
    }
    if (!error) {
      const url = URL.createObjectURL(photo);
      setPhoto(photo);
      setUrlPhoto(url);
      setPhotos([{ id: 1, imageUrl: url, croppedImageUrl: null }]);
    }
  };

  const onUploadHandler = async (event) => {
    const photo = event.target.files[0];
    let error;
    try {
      await checkPhoto(photo);
    } catch (_) {
      error = true;
    }
    if (!error) {
      const url = URL.createObjectURL(photo);
      setPhoto(photo);
      setUrlPhoto(url);
      setPhotos([{ id: 1, imageUrl: url, croppedImageUrl: null }]);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (photo && isChecked) {
      setDisabled(true);
      const image = new Image();
      image.src = URL.createObjectURL(photo);
      image.onload = async function () {
        const width = image.naturalWidth;
        const height = image.naturalHeight;
        const maxSize = Math.min(width, height);
        const photoUrl = URL.createObjectURL(photo);
        const result = await getCroppedImg(photoUrl, {
          x: 0,
          y: 0,
          width: maxSize,
          height: maxSize,
        });

        setLoading(true);
        const response = await ai.analyze(result);

        if (response.error) {
          setResultHandler({
            code: 500,
            isSuccess: false,
            message: "Error while processing image.",
          });
          return;
        }

        setResultHandler({
          url: image.src,
          isSuccess: true,
          percent: response[response.predicted_class],
          description: `Result: ${response.predicted_class}, non-cancerous mole: ${response["non-cancerous mole"]}%, melanoma: ${response["melanoma"]}%.`,
        });
      };
    }
  };

  const deletePhotoHandler = () => {
    setPhoto(null);
    setUrlPhoto(null);
  };

  const editPhotoHandler = () => {
    setSelectedPhoto({ id: 1, imageUrl: urlPhoto, croppedImageUrl: null });
  };

  const onCancelCropHandler = () => {
    setSelectedPhoto(null);
  };

  const setCroppedImageFor = (id, crop, zoom, aspect, croppedImageUrl) => {
    const newPhotosList = [...photos];
    const index = photos.findIndex((x) => x.id === id);
    const photo = photos[index];
    const newPhoto = { ...photo, croppedImageUrl, crop, zoom, aspect };
    newPhotosList[index] = newPhoto;
    setPhotos(newPhotosList);
    setSelectedPhoto(null);
  };

  return (
    <div>
      {loading ? (
        <div className="loading-wrapper">
          <Loading message={"Process request ..."} />
        </div>
      ) : (
        <form onSubmit={submitHandler} className="email-form">
          <div>
            {selectedPhoto && (
              <ImageCrop
                id={selectedPhoto.id}
                cropInit={selectedPhoto.crop}
                zoomInit={selectedPhoto.zoom}
                aspectInit={selectedPhoto.aspect}
                imageUrl={selectedPhoto.imageUrl}
                setPhoto={setPhoto}
                onCancel={onCancelCropHandler}
                setCroppedImageFor={setCroppedImageFor}
              />
            )}
          </div>
          <DragDropFile
            photo={photo}
            photos={photos}
            urlPhoto={urlPhoto}
            onDropHandler={onDropHandler}
            onUploadHandler={onUploadHandler}
            editPhotoHandler={editPhotoHandler}
            deletePhotoHandler={deletePhotoHandler}
          />
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <label className="simple-text">
              <input
                type="checkbox"
                checked={isChecked}
                style={{ margin: "0 12px 0 0" }}
                onChange={() => setIsChecked(!isChecked)}
              />
              By sending a photo you agree with the
              <a href="/privacy-policy"> privacy policy</a>
            </label>
          </div>
          <SubmitButton2 disabled={disabled} />
        </form>
      )}
    </div>
  );
};

export default SendPhotoForm;
