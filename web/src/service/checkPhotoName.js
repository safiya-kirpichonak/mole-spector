import sanitizeHtml from "sanitize-html";

const checkPhotoName = (name) => {
    if(name.length > 16)
        name = name.slice(0, 16) + "...";
    return sanitizeHtml(name);
}

export default checkPhotoName;
