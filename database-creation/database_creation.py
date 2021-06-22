import os
import example_creds as creds
import pandas as pd
import psycopg2
import psycopg2.extras as extras
from psycopg2.extras import RealDictCursor
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

def create_database():
    conn = psycopg2.connect()
    conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT) 
    db_name = creds.PGDATABASE
    cursor = conn.cursor()
    sqlCreateDatabase = f"CREATE DATABASE {db_name};"
    cursor.execute(sqlCreateDatabase)
    cursor.close()
    conn.commit()
    
def create_tables():
    conn_string = " port="+ "5432" +" dbname="+ creds.PGDATABASE
    conn=psycopg2.connect(conn_string)
    cursor = conn.cursor()
    create_commands = (
        """CREATE TABLE cyclists (
            päivämäärä      varchar(80),
            aika            varchar(80),
            sijainti        int,
            pyöräilijöitä   float
        );""",
        """CREATE TABLE weather (
            päivämäärä            varchar(80),
            aika                  varchar(80),
            sademäärä             float,
            pilvien_määrä         float,
            suhteellinen_kosteus  float,
            sateen_intensiteetti  float,
            ilman_lämpötila       float,
            tuulen_nopeus         float
        );""",
        """CREATE TABLE locations (
            id         int,
            name       varchar(80),
            x          varchar(80),
            y          varchar(80)
        );""",
        
    )
    for com in create_commands:
        cursor.execute(com)
    cursor.close()
    conn.commit()
    
def print_existing_tables():
    conn_string = " port="+ "5432" +" dbname="+ creds.PGDATABASE
    conn=psycopg2.connect(conn_string)
    cursor = conn.cursor()
    cursor.execute("""SELECT table_name FROM information_schema.tables
           WHERE table_schema = 'public'""")
    for table in cursor.fetchall():
        print(table[0])
    cursor.close()

def execute_values(df, table):
    """
    Using psycopg2.extras.execute_values() to insert the dataframe
    """
    conn_string = " port="+ "5432" +" dbname="+ creds.PGDATABASE
    conn=psycopg2.connect(conn_string)
    cursor = conn.cursor()
    # Create a list of tupples from the dataframe values
    tuples = [tuple(x) for x in df.to_numpy()]
    # Comma-separated dataframe columns
    cols = ','.join([f'"{i}"'for i in list(df.columns)])
    # SQL query to execute
    query  = "INSERT INTO %s(%s) VALUES %%s" % (table, cols)
    
    try:
        extras.execute_values(cursor, query, tuples)
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print("Error: %s" % error)
        conn.rollback()
        cursor.close()
        return 1
    print("execute_values() done")
    cursor.close()

def add_data_to_table(df, table):
    i = 0
    batch_size = 1000
    while i * batch_size < df.shape[0]:
        execute_values(df[i * batch_size: (i + 1) * batch_size], table)
        i += 1

if __name__ == "__main__":
    # Load data
    cyclists = pd.read_csv('./data/cyclists_cleaned.csv')
    weather = pd.read_csv('./data/weather_cleaned.csv')
    locations = pd.read_csv('./data/location_cleaned.csv')
    
    create_database()
    print(f'{creds.PGDATABASE} database created...')
    create_tables()
    print('The following tables were create...')
    print_existing_tables()
    add_data_to_table(cyclists, 'cyclists')
    print(f'Added {cyclists.shape[0]} instances to cyclist table')
    add_data_to_table(weather, 'weather')
    print(f'Added {weather.shape[0]} instances to weather table')
    add_data_to_table(locations, 'locations')
    print(f'Added {locations.shape[0]} instances to locations table')