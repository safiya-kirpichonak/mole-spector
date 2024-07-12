import sys
import json
import numpy as np

from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

IMAGE_SIZE = 300
IMAGE_COLORS = 3

if __name__ == "__main__":
    if len(sys.argv) < 3:
        raise ValueError("Invalid argv value.")

    model = load_model(sys.argv[1:][1])
    processed_image = image.load_img(sys.argv[1:][0])

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
    predicted_class = np.argmax(predictions, axis=1)[0]

    result = {
        "predicted_class": "melanoma" if int(predicted_class) == 1 else "non-cancerous mole",
        "non-cancerous mole": f"{class_0_prob:.2f}",
        "melanoma": f"{class_1_prob:.2f}"
    }
    print(json.dumps(result))