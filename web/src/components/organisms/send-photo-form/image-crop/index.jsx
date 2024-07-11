import Cropper from "react-easy-crop";
import React, { useState } from "react";

import { getCroppedImg } from "./getCroppedImg";

const aspectRatios = [{ value: 4 / 4, text: "4/4" }];

const ImageCrop = ({
  id,
  imageUrl,
  cropInit,
  zoomInit,
  onCancel,
  setPhoto,
  aspectInit,
  setCroppedImageFor,
}) => {
  if (zoomInit == null) zoomInit = 1;
  if (cropInit == null) cropInit = { x: 0, y: 0 };
  if (aspectInit == null) aspectInit = aspectRatios[0];

  const [aspect] = useState(aspectInit);
  const [zoom, setZoom] = useState(zoomInit);
  const [crop, setCrop] = useState(cropInit);
  const [croppedParameters, setCroppedParameters] = useState(null);

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const onCropComplete = (_, croppedParameters) => {
    setCroppedParameters(croppedParameters);
  };

  const onCrop = async () => {
    const croppedPhoto = await getCroppedImg(imageUrl, croppedParameters);
    setCroppedImageFor(id, crop, zoom, aspect, croppedPhoto.imageUrl);
    setPhoto(croppedPhoto.imageFile);
  };

  return (
    <div>
      <div className="backdrop"></div>
      <div className="crop-container">
        <Cropper
          zoom={zoom}
          crop={crop}
          image={imageUrl}
          aspect={aspect.value}
          onCropChange={onCropChange}
          onZoomChange={onZoomChange}
          onCropComplete={onCropComplete}
        />
      </div>
      <div className="controls">
        <div className="controls-upper-area">
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            className="slider"
            onInput={(e) => onZoomChange(e.target.value)}
          ></input>
        </div>
        <div className="button-area">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onCrop}>Crop</button>
        </div>
      </div>
    </div>
  );
};

export default ImageCrop;
