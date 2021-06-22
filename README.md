# cyclist-data-dashboard

In this project I have created a simple data dashboard to discover and visualize data related to cyclist counts and weather data in different measuring points.

## Setting up the project

For setting up the project you need the following packages to be installed in your computer.

pip
npm
postgresql
python3

### Setting up the database

To set up the the database you need to have postgres installed and activated on your computer.

cd database-creation
python3 -m venv env
. env/bin/activate
pip install -r requirements.txt
python database_creation.py

### Setting up the backend

cd cyclist-backend
python3 -m venv env
. env/bin/activate
pip install -r requirements.txt
export FLASK_APP=app
flask run

### Setting up the frontend
cd cyclist-frontend
npm install
npm start
