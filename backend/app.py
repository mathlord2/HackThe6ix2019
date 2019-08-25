import pyrebase
from flask import Flask
app = (__name__)


@app.route('/read')
def read_data() -> dict:
    """Returns a JSON of the entire firebase database of the project

    SAMPLE RETURN: {'users':{'token1': {'name': 'Martin',
    'travelPlans': 'trip1':{'location':'Kentucky', 'currency': {'fromCurr': CAD, 'toCurr': USD},
    'budget': {1 : {'name': 'food', 'amount': 10}}}}}
    """
    return db.child('users').get().val()

@app.route()
def init_users(db):
    db.child('users').set({'init': True})

@app.route()
def create_user_profile(db, name): #Done
    db.child('users').update({name: {'trips': {}}})

@app.route()
def create_trip_plan(db, name, tripName, tripLoc):
    db.child('users').child(name).child('trips').update({tripName:{'Location': tripLoc,
                                                          'Budget': {}}})

@app.route()
def push_budget(db, name, tripName, transID, transName, transAmount):
    db.child('users').child(name).child('trips').child(tripName).child('Budget').\
        update({str(transID): {'name': str(transName), 'amount': transAmount}})

@app.route()
def remove_trip_data(db, name, tripName):
    db.child('users').child(name).child('trips').child(tripName).remove()

@app.route()
def reset_budget_data(db, name, tripName):
    db.child('users').child(name).child('trips').child(tripName).child('Budget').set({})

@app.route()
def remove_budget_data(db, name, tripName, budgetID):
    db.child('users').child(name).child('trips').child(tripName).child('Budget').child(budgetID).remove()




config = {
    "apiKey": "AIzaSyCIsJXzbLiJwO-IJAUkFMn-eA4QXKsAlyg",
    "authDomain": "budgetcation.firebaseapp.com",
    "databaseURL": "https://budgetcation.firebaseio.com/",
    "storageBucket": "gs://budgetcation.appspot.com/",
    "serviceAccount": "budgetcation-firebase.json"
}

firebase = pyrebase.initialize_app(config)
username = 
password =
auth = firebase.auth()
db = firebase.database()
user = auth.sign_in_with_email_and_password(username, password)
userToken = user['idToken']
