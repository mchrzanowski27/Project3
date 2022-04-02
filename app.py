import os
import re
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_sqlalchemy import SQLAlchemy
import psycopg2
from config import username
from config import password

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{username}:{password}@localhost:5432/Project3"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from .model import Ukraine

# connection = psycopg2.connect(database="Project3", user=username, password=password, host="localhost", port="5432")
# cursor = connection.cursor()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/data", methods = ['POST', 'GET'])
def data(date, event, actor):
    if request.method == 'POST':
        events1 = db.session.query(Ukraine).filter_by(EVENT_DATE = date).all()
        events2 = db.session.query(Ukraine).filter_by(EVENT_TYPE = event).all()
        events3 = db.session.query(Ukraine).filter_by(ACTOR1 = actor).all()
    # elif request.method == 'GET':
    #     conflicts = Ukraine.query.all()
    #     results = [
    #         {
                # "EVENT_ID_CNTY": conflict.EVENT_ID_CNTY,
	            # "EVENT_ID_NO_CNTY": conflict.EVENT_ID_NO_CNTY
                # "EVENT_DATE": db.Column(db.String())
                # "EVENT_TYPE": db.Column(db.String())
                # "SUB_EVENT_TYPE": db.Column(db.String())
                # "ACTOR1":  db.Column(db.String())
                # "LOCATION": db.Column(db.String())
                # "LATITUDE": db.Column(db.Float())
                # "LONGITUDE": db.Column(db.Float())
                # "SOURCE": db.Column(db.String)
                # "NOTES": db.Column(db.String)
                # "FATALITIES": conflict.FATALITIES
    #         } for conflict in conflicts
    #     ]


if __name__ == "__main__":
    app.run()