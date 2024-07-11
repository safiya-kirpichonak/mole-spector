# MoleSpector [In progress]

This is a simple application on React / Node.js / Python.

Initially, I worked on this small project as part of a team for our graduation project, which we named "MoleSpector". I was responsible for the client side, while two other developers handled the server and the neural network. However, it remained a prototype and never saw the light of day.

Over time, I developed an interest in neural networks and was looking for a project to practice on. I remembered our old prototype and decided to revive it. I removed unnecessary features, rewrote the server, and created a new neural network. Now, it's a refined project that anyone can use. I don't intend to use it commercially or claim the original idea as solely mine. I also renamed the project to distinguish it from the initial prototype, which was a collaborative effort.

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

Add .env file in the root with following variable:

```
# api configuration
API_TRANSPORT=http
API_PORT=3033
API_LOGGER=custom
WEB_URL="http://localhost:3000"
```

Run command to start server:

```
npm run dev
```

# AI usage

Python commands:

```
python3 -m venv myenv

source myenv/bin/activate

pip3 install -r requirements.txt

deactivate
```

## Gratitude

Theme is [here](https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/).
