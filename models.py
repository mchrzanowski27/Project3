from app import db

class Ukraine(db.Model):
    __tablename__ = "Ukraine_Conflict"

    EVENT_ID_CNTY = db.Column(db.String(64), primary_key=True)
    EVENT_ID_NO_CNTY = db.Column(db.Integer(10), primary_key=True)
    EVENT_DATE = db.Column(db.String(64))
    EVENT_TYPE = db.Column(db.String(64))
    SUB_EVENT_TYPE = db.Column(db.String(64))
    ACTOR1 = db.Column(db.String(64))
    LOCATION = db.Column(db.String(64))
    LATITUDE = db.Column(db.Float(10))
    LONGITUDE = db.Column(db.Float(10))
    SOURCE = db.Column(db.String())
    NOTES = db.Column(db.String())
    FATALITIES = db.Column(db.Integer(10))

    def __repr__(self):
        return '<Ukraine %r>' % (self.EVENT_TYPE)
