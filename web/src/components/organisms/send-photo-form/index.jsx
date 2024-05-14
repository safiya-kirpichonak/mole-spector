import React, { useState } from "react";
import ImageCrop from "./image-crop";

import "./style.css";
import DragDropFile from "./drag-drop-file";
import SubmitButton2 from "./submit-button-2";
import checkPhoto from "../../../service/checkPhoto";
import Loading from "../../atoms/loader";
import Captcha from "../../atoms/captcha";
import { getCroppedImg } from "../../../service/cropImage";

const SendPhotoForm = ({ setResultHandler }) => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [urlPhoto, setUrlPhoto] = useState(null);
  const [photo, setPhoto] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [firstPhoto, setFirstPhoto] = useState(null);
  const [captcha, setCaptcha] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
      setFirstPhoto(photo);
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
      setFirstPhoto(photo);
      setPhoto(photo);
      setUrlPhoto(url);
      setPhotos([{ id: 1, imageUrl: url, croppedImageUrl: null }]);
    }
  };

  const deletePhotoHandler = () => {
    setFirstPhoto(null);
    setPhoto(null);
    setUrlPhoto(null);
  };

  const editPhotoHandler = () => {
    setSelectedPhoto({ id: 1, imageUrl: urlPhoto, croppedImageUrl: null });
  };

  const onCancelCropHandler = () => {
    setSelectedPhoto(null);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (photo && isChecked && captcha) {
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

        const data = new FormData();
        data.append("photo", result.croppedPhoto);
        setLoading(true);
        setResultHandler({
          percent: 0,
          url: image.src,
          isSuccess: true,
          description: "These results are not real.",
        });
      };
    }
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

  const resetImage = (id) => {
    setPhoto(firstPhoto);
    setCroppedImageFor(id);
  };

  const captchaHandle = () => {
    setCaptcha(!captcha);
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
                imageUrl={selectedPhoto.imageUrl}
                cropInit={selectedPhoto.crop}
                zoomInit={selectedPhoto.zoom}
                aspectInit={selectedPhoto.aspect}
                setCroppedImageFor={setCroppedImageFor}
                onCancel={onCancelCropHandler}
                resetImage={resetImage}
                setPhoto={setPhoto}
              />
            )}
          </div>
          <DragDropFile
            photo={photo}
            photos={photos}
            urlPhoto={urlPhoto}
            onDropHandler={onDropHandler}
            onUploadHandler={onUploadHandler}
            deletePhotoHandler={deletePhotoHandler}
            editPhotoHandler={editPhotoHandler}
          />

          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <label className="simple-text">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{ margin: "0 12px 0 0" }}
              />
              By sending a photo you agree with the
              <a href="/privacy-policy"> privacy policy</a>
            </label>
          </div>

          <Captcha onChange={captchaHandle} />
          <SubmitButton2 disabled={disabled} />
        </form>
      )}
    </div>
  );
};

export default SendPhotoForm;
