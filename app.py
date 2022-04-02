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

@app.route("/data", methods = ['POST', 'GET'])
def data(date, event, actor):
    if request.method == 'POST':
        events1 = db.session.query(Ukraine).filter_by(EVENT_DATE = date).all()
        events2 = db.session.query(Ukraine).filter_by(EVENT_TYPE = event).all()
        events3 = db.session.query(Ukraine).filter_by(ACTOR1 = actor).all()
    # if request.method == 'GET':
    #     conflicts = Ukraine_Conflict.query.all()
    #     results = [
    #         {

    #         }
    #     ]


if __name__ == "__main__":
    app.run()