from sqlalchemy import Column, String, Integer, Float
from sqlalchemy.ext.declarative import declarative_base  

base = declarative_base()

class Location(base):
  __tablename__ = 'locations'

  location_id = Column(Integer)
  name = Column(String, primary_key=True)
  x_coordinate = Column(String)
  y_coordinate = Column(String)


class Weather(base):
  __tablename__ = 'weather'

  weather_observation_id = Column(Integer, primary_key=True)
  date = Column(String)
  time = Column(String)
  rain_amount = Column(Float)
  clouds_amount = Column(Float)
  humidity = Column(Float)
  rain_intensity = Column(Float)
  temperature = Column(Float)
  wind_speed = Column(Float)

class Cyclist(base):
  __tablename__ = 'cyclists'

  cyclist_observation_id = Column(Integer, primary_key=True)
  location_id = Column(Integer)
  date = Column(String)
  time = Column(String)
  cyclist_amount = Column(Float)