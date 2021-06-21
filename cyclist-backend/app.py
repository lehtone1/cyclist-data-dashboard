from flask import Flask, jsonify
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)

@app.route('/locations/<id>')
def get_location_data(id):
  conn_string = " port=" + "5432" + " dbname=" + "zadaa_exercice"
  conn = psycopg2.connect(conn_string)
  cur = conn.cursor(cursor_factory=RealDictCursor)
  query = f"""
      SELECT cyclists.päivämäärä, cyclists.aika, sijainti, pyöräilijöitä, sademäärä, pilvien_määrä, suhteellinen_kosteus, sateen_intensiteetti, ilman_lämpötila, tuulen_nopeus
       		FROM weather, cyclists
        	WHERE weather.päivämäärä = cyclists.päivämäärä AND weather.aika = cyclists.aika AND cyclists.sijainti = {id}
  """
  cur.execute(query)
  result = cur.fetchall()
  response = jsonify(data=result)
  response.headers.add("Access-Control-Allow-Origin", "*")
  conn.close()
  return response

@app.route('/locations/')
def get_locations():
  conn_string = " port=" + "5432" + " dbname=" + "zadaa_exercice"
  conn = psycopg2.connect(conn_string)
  cur = conn.cursor(cursor_factory=RealDictCursor)
  query = """
      SELECT * 
        FROM locations
  """
  cur.execute(query)
  result = cur.fetchall()
  response = jsonify(data=result)
  response.headers.add("Access-Control-Allow-Origin", "*")
  conn.close()
  return response
	
