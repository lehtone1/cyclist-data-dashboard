# cyclist-data-dashboard

In this project I have created a simple data dashboard to discover and visualize data related to cyclist counts and weather data in different measuring points.

## Setting up the project

For setting up the project you need the following packages to be installed in your computer.

pip<br/>
npm<br/>
postgresql<br/>
python3<br/>

### Setting up the database

To set up the the database you need to have postgres installed and activated on your computer.

cd database-creation<br/>
python3 -m venv env<br/>
. env/bin/activate<br/>
pip install -r requirements.txt<br/>
python database_creation.py<br/>

### Setting up the backend

cd cyclist-backend<br/>
python3 -m venv env<br/>
. env/bin/activate<br/>
pip install -r requirements.txt<br/>
export FLASK_APP=app<br/>
flask run<br/>

### Setting up the frontend
cd cyclist-frontend<br/>
npm install<br/>
npm start<br/>
