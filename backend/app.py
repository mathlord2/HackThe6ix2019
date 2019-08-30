import pyrebase
from flask import Flask
from collections import OrderedDict

app = Flask(__name__)

config = {
        "apiKey": "AIzaSyCIsJXzbLiJwO-IJAUkFMn-eA4QXKsAlyg",
        "authDomain": "budgetcation.firebaseapp.com",
        "databaseURL": "https://budgetcation.firebaseio.com/",
        "storageBucket": "gs://budgetcation.appspot.com/",
        "serviceAccount": "budgetcation-firebase.json"
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()


@app.route("/", methods=['GET'])
def read_data() -> dict:
    """Returns a JSON of the entire firebase database of the project
    SAMPLE RETURN: {'users':{'token1': {'name': 'Martin',
    'travelPlans': 'trip1':{'location':'Kentucky', 'currency': {'fromCurr': CAD, 'toCurr': USD},
    'budget': {1 : {'name': 'food', 'amount': 10}}}}}
    """
    return db.child('users').get().val()


@app.route("/read-trip", methods=['GET'])
def read_trip_data(name) -> list:
    """Returns a JSON of the entire firebase database of the project
    """
    trip_list = dict(db.child('users').child(name).child('trips').get().val())

    trip_names = []

    for key in trip_list.keys():
        trip_names.append(key)

    return trip_names


@app.route("/read-trip-budget", methods=['GET'])
def read_budget_data(name, tripName) -> list:
    """Returns a JSON of the entire firebase database of the project
    """
    budget_list = dict(db.child('users').child(name).child('trips').
                       child(tripName).child('Budget').get().val())

    transaction_list = []

    for key in budget_list.keys():
        transaction_list.append(budget_list[key])

    return transaction_list

@app.route("/reset", methods=['POST'])
def reset():
    db.child('users').set({'init': True})


@app.route("/new-profile", methods=['POST'])
def create_user_profile(name): #Done
    db.child('users').update({name: {'trips': {}}})


@app.route("/new-trip", methods=['POST'])
def create_trip_plan(name, tripName, tripLoc):
    db.child('users').child(name).child('trips').update({tripName:{'Location': tripLoc,
                                                          'Budget': {}}})

@app.route("/add-budget", methods=['POST'])
def push_budget(name, tripName, transID, transName, transAmount):
    db.child('users').child(name).child('trips').child(tripName).child('Budget').\
        update({str(transID): {'name': str(transName), 'amount': transAmount}})

@app.route("/remove-user", methods=['POST'])
def remove_user(name):
    db.child('users').child(name).remove()

@app.route("/remove-trip", methods=['POST'])
def remove_trip_data(name, tripName):
    db.child('users').child(name).child('trips').child(tripName).remove()


@app.route("/reset-budget", methods=['POST'])
def reset_budget_data(name, tripName):
    db.child('users').child(name).child('trips').child(tripName).child('Budget').set({})


@app.route("/remove-budget", methods=['POST'])
def remove_budget_data(name, tripName, budgetID):
    db.child('users').child(name).child('trips').child(tripName).child('Budget').child(budgetID).remove()


if __name__ == '__main__':
    app.run(port=5000)
