
from flask import Flask
import psycopg2
from psycopg2.extras import RealDictCursor
import json

app = Flask(__name__)

@app.route('/locations/<name>')
def get_location_data(name):
	conn_string = " port="+ "5432" +" dbname="+ "zadaa_exercice"
	conn=psycopg2.connect(conn_string)
	cur = conn.cursor(cursor_factory=RealDictCursor)
	query = """
	    SELECT cyclists.päivämäärä, cyclists.aika, sijainti, pyöräilijöitä, sademäärä, pilvien_määrä, suhteellinen_kosteus, sateen_intensiteetti, ilman_lämpötila, tuulen_nopeus
       		FROM weather, cyclists
        	WHERE weather.päivämäärä = cyclists.päivämäärä AND weather.aika = cyclists.aika AND cyclists.sijainti = 'Auroransilta'
	"""
	cur.execute(query)
	result = cur.fetchall()
	conn.close()
	return json.dumps(result)
	
