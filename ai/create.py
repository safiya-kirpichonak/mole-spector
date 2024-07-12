import os
import cv2
import sys
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split

VERBOSE = 2
EPOCHS = 15
IMG_COLORS = 3
IMG_SIZE = 300
TEST_SIZE = 0.4
NUM_CATEGORIES = 2
DATASET_FOLDER = "dataset"
AI_MODEL_NAME = "mole_spector_ai.h5"


def prepare_dataset(dataset_folder):
    """
    Create a new images with new size from dataset.
    """
    image_number = 0

    for folder_name in range(NUM_CATEGORIES):
        folder_path = os.path.join(dataset_folder, str(folder_name))
        image_number = 0

        for image in os.listdir(folder_path):

            # read image by image's path
            image_path = os.path.join(folder_path, image)
            image = cv2.imread(image_path)

            # calculate new size
            height, width, _ = image.shape
            start_x = (width - IMG_SIZE) // 2
            start_y = (height - IMG_SIZE) // 2

            # update size of the image
            cropped_image = image[start_y:start_y + IMG_SIZE, start_x:start_x + IMG_SIZE]
            cv2.imwrite(image_path, cropped_image)

            # rename image
            random_index = int.from_bytes(os.urandom(8), byteorder="big")
            new_image_path = os.path.join(folder_path, f"{str(image_number)}_{random_index}.jpg")
            os.rename(image_path, new_image_path)
            image_number += 1

    print("Preparing completed!")


def load_data(dataset_folder):
    """
    Read images and create dataset.
    """
    images = []
    labels = []
    for folder_name in range(NUM_CATEGORIES):
        folder_path = os.path.join(dataset_folder, str(folder_name))
        for image in os.listdir(folder_path):

            # read image by image's path
            image_path = os.path.join(folder_path, image)
            image = cv2.imread(image_path)
            image = cv2.resize(image, (IMG_SIZE, IMG_SIZE))

            # add it to the dataset arrays
            images.append(image)
            labels.append(folder_name)

    return (images, labels)


def get_model():
    """
    Create model and compile it.
    """
    model = tf.keras.models.Sequential([
        tf.keras.layers.Conv2D(32, (3, 3), activation="leaky_relu", input_shape=(IMG_SIZE, IMG_SIZE, IMG_COLORS)),
        tf.keras.layers.MaxPooling2D(pool_size=(3, 3)),

        tf.keras.layers.Conv2D(32, (3, 3), activation="leaky_relu", input_shape=(IMG_SIZE, IMG_SIZE, IMG_COLORS)),
        tf.keras.layers.MaxPooling2D(pool_size=(3, 3)),

        tf.keras.layers.Flatten(),
        tf.keras.layers.Dropout(0.5),

        tf.keras.layers.Dense(NUM_CATEGORIES, activation="sigmoid")
    ])

    model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])

    return model


if __name__ == "__main__":

    # prepare dataset, create equal size
    # prepare_dataset(DATASET_FOLDER)

    # take prepared data
    images, labels = load_data(DATASET_FOLDER)

    # transform labels to one format like: [1, 0] and [0, 1]
    labels = tf.keras.utils.to_categorical(labels)

    # split dataset into training and testing data
    x_train, x_test, y_train, y_test = train_test_split(
        np.array(images), np.array(labels), test_size=TEST_SIZE
    )

    # get a compiled neural network
    model = get_model()

    # fit model on training data
    model.fit(x_train, y_train, epochs=EPOCHS)

    # evaluate neural network performance
    model.evaluate(x_test,  y_test, verbose=VERBOSE)

    # save model to file
    model.save(AI_MODEL_NAME)
    print(f"Model saved to {AI_MODEL_NAME}.")