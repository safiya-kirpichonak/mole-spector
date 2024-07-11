import React, { useState, useRef } from "react";

const DragDropFile = ({
  photo,
  photos,
  urlPhoto,
  onDropHandler,
  onUploadHandler,
  deletePhotoHandler,
  editPhotoHandler,
}) => {
  const [drag, setDrag] = useState(false);
  const fileInputRef = useRef(null);

  const dragStartHandler = (event) => {
    event.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (event) => {
    event.preventDefault();
    setDrag(false);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const onDropHandler2 = async (event) => {
    onDropHandler(event);
    setDrag(false);
  };

  return (
    <div style={{ height: "300px", weight: "300px" }}>
      <label
        htmlFor="input-file-upload"
        className={drag ? "drag-active" : "label-file-upload"}
        multiple={false}
        onDragStart={(e) => dragStartHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragStartHandler(e)}
        onDrop={(e) => onDropHandler2(e)}
      >
        {urlPhoto ? (
          <div className="photo-style">
            <div className="image-card">
              {photos.map((photo, id) => (
                <img
                  src={
                    photo.croppedImageUrl
                      ? photo.croppedImageUrl
                      : photo.imageUrl
                  }
                  alt=""
                  key={id}
                />
              ))}
              <div className="wrapper-icon-style">
                <i
                  className="bi bi-pencil-fill icon-style"
                  onClick={(e) => editPhotoHandler(e)}
                ></i>
                <i
                  className="bi bi-trash3-fill icon-style"
                  onClick={(e) => deletePhotoHandler(e)}
                ></i>
              </div>
            </div>
          </div>
        ) : (
          <div className="form-center">
            <p>{drag ? "Drop your file" : "Drag and drop your file here or"}</p>
            <button className="upload-button" onClick={handleButtonClick}>
              Upload photo
            </button>
            <input
              value={photo}
              ref={fileInputRef}
              onChange={onUploadHandler}
              multiple={false}
              className="form-control hide-input"
              type="file"
              required
            />
          </div>
        )}
      </label>
    </div>
  );
};

export default DragDropFile;
