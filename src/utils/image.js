import config from "../config";

export const validate = (image, type) => {
  if (type === "image") {
    const maxSize = config.upload.imageMaxSize;

    if (image.size > maxSize) {
      return { imageValid: false, error: "too_big" };
    }

    const acceptedImageExentions = config.upload.allowedImageExtensions;

    if (!acceptedImageExentions.includes(image.type)) {
      return { imageValid: false, error: "wrong_type" };
    }
  }
  if (type === "file") {
    const maxSize = config.upload.fileMaxSize;

    if (image.size > maxSize) {
      return { imageValid: false, error: "too_big" };
    }

    const acceptedFileExentions = config.upload.allowedFileExtensions;

    if (!acceptedFileExentions.includes(image.type)) {
      return { imageValid: false, error: "wrong_type" };
    }
  }
  return { imageValid: true, error: null };
};
