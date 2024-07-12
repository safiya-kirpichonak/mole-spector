import numpy as np

from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

IMAGE_SIZE = 300
IMAGE_COLORS = 3
IMAGE_NAME = "WRITE_NAME_HERE"
AI_MODEL_NAME = "mole_spector_ai.h5"

if __name__ == "__main__":
    model = load_model(MODEL_NAME)
    processed_image = image.load_img(IMAGE_NAME)

    width, height = processed_image.size
    if width < IMAGE_SIZE or height < IMAGE_SIZE:
        raise ValueError("Incorrect size of the image.")
    processed_image = processed_image.crop((0, 0, IMAGE_SIZE, IMAGE_SIZE)) 

    image_array = image.img_to_array(processed_image)
    image_array = np.expand_dims(image_array, axis=0)
    image_array /= 255.0

    predictions = model.predict(image_array)
    probabilities = predictions[0] * 100
    class_0_prob = probabilities[0]
    class_1_prob = probabilities[1]

    print(f'Class 0: {class_0_prob:.2f}%')
    print(f'Class 1: {class_1_prob:.2f}%')

    predicted_class = np.argmax(predictions)
    print(f'Predicted class: {predicted_class}')