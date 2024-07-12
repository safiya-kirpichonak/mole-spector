# MoleSpector [Completed]

This is a simple application on React / Node.js / Python.

Initially, I worked on this small project as part of a team for our graduation project, which we named "SkinCancerStop". I was responsible for the client side, while two other developers handled the server and the neural network. However, it remained a prototype and never saw the light of day.

Over time, I developed an interest in neural networks and was looking for a project to practice on. I remembered our old prototype and decided to revive it. I removed unnecessary features, rewrote the server, and created a new neural network. Now, it's a refined project that anyone can use. I don't intend to claim the original idea as solely mine. I also renamed the project to distinguish it from the initial prototype, which was a collaborative effort.

## Web usage

Open "web" folder

Add .env file in the root with following variable and replace PORT to your port of server:

```
REACT_APP_API_URL="http://localhost:PORT"
```

Install the needed packages:

```
npm install
```

Start application:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## API usage

Open "api" folder.

Add .env file in the root with following variable and choose the PORT for the API:

```
# api configuration
API_PORT=PORT
API_LOGGER=custom
API_TRANSPORT=http
WEB_URL="http://localhost:3000"
```

Run command to start server:

```
npm run dev
```

# AI usage

There are scripts for creating database.

Create environment:

```
python3 -m venv myenv
```

Activate it:

```
source myenv/bin/activate
```

Install libs:

```
pip3 install -r requirements.txt
```

To create ai model:

```
python3.py create.py
```

To analyze image:

```
python3 analyze.py
```

Stop environment:

```
deactivate
```

To use new AI model in the app, put it to ./api/src/ai/mole_spector_ai.h5, or rename it and
fix the path in the API.

I choose 500 images for every category. The result is 92.25%:

```
13/13 - 8s - 611ms/step - accuracy: 0.9225 - loss: 0.6892
```

## Gratitude

- Theme is [here](https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/).
- Dataset 1 is [here](https://www.kaggle.com/datasets/adisongoh/skin-moles-benign-vs-malignant-melanoma-isic19).
- Dataset 2 is [here](https://www.kaggle.com/datasets/hasnainjaved/melanoma-skin-cancer-dataset-of-10000-images).