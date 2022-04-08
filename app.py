import os
import re
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
import psycopg2
# from config import username
# from config import password

app = Flask(__name__)

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://postgres:88,Bc4Fvu@localhost:5432/Project_3"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

@app.route("/")
def home():
    return render_template("index.html")
    # return (
    #     "Welcome!<br/>"
    #     "Available routes:<br/>"
    #     f"/api/data"
    # )


@app.route("/api/data", methods=['POST', 'GET'])
def data():
    # if request.method == 'POST':
    #     events1 = db.session.query(Ukraine).filter_by(EVENT_DATE=date).all()
    #     events2 = db.session.query(Ukraine).filter_by(EVENT_TYPE=event).all()
    #     events3 = db.session.query(Ukraine).filter_by(ACTOR1=actor).all()
    # elif:
    from models import Ukraine
    
    conflicts = db.session.query(Ukraine.EVENT_ID_CNTY, Ukraine.EVENT_ID_NO_CNTY, Ukraine.EVENT_DATE, Ukraine.EVENT_TYPE, Ukraine.SUB_EVENT_TYPE, Ukraine.ACTOR1, Ukraine.LOCATION, Ukraine.LATITUDE, Ukraine.LONGITUDE, Ukraine.SOURCE, Ukraine.NOTES, Ukraine.FATALITIES).all()

    results = [
        {
            "EVENT_ID_CNTY": conflict.EVENT_ID_CNTY,
            "EVENT_ID_NO_CNTY": conflict.EVENT_ID_NO_CNTY,
            "EVENT_DATE": conflict.EVENT_DATE,
            "EVENT_TYPE": conflict.EVENT_TYPE,
            "SUB_EVENT_TYPE": conflict.SUB_EVENT_TYPE,
            "ACTOR1":  conflict.ACTOR1,
            "LOCATION": conflict.LOCATION,
            "LATITUDE": conflict.LATITUDE,
            "LONGITUDE": conflict.LONGITUDE,
            "SOURCE": conflict.SOURCE,
            "NOTES": conflict.NOTES,
            "FATALITIES": conflict.FATALITIES
            } for conflict in conflicts
    ]

    return jsonify(results)


if __name__ == "__main__":
    app.run()

    # request.method == 'GET':
