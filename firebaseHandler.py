import pyrebase


#@app.route()
def read_data(db) -> dict:
    """Returns a JSON of the entire firebase database of the project

    SAMPLE RETURN: {'users':{'token1': {'name': 'Martin',
    'travelPlans': 'trip1':{'location':'Kentucky', 'currency': {'fromCurr': CAD, 'toCurr': USD},
    'budget': {1 : {'name': 'food', 'amount': 10}}}}}
    """
    return db.child('users').get().val()


def init_users(db):
    db.child('users').set({'init': True})


def create_user_profile(db, name): #Done
    db.child('users').update({name: {'trips': {}}})


def create_trip_plan(db, name, tripName, tripLoc):
    db.child('users').child(name).child('trips').update({tripName:{'Location': tripLoc,
                                                          'Budget': {}}})


def push_budget(db, name, tripName, transID, transName, transAmount):
    db.child('users').child(name).child('trips').child(tripName).child('Budget').\
        update({str(transID): {'name': str(transName), 'amount': transAmount}})


def remove_trip_data(db, name, tripName):
    db.child('users').child(name).child('trips').child(tripName).remove()


def reset_budget_data(db, name, tripName):
    db.child('users').child(name).child('trips').child(tripName).child('Budget').set({})


def remove_budget_data(db, name, tripName, budgetID):
    db.child('users').child(name).child('trips').child(tripName).child('Budget').child(budgetID).remove()


if __name__ == '__main__':
    ###Settings
    config = {
        "apiKey": "AIzaSyCIsJXzbLiJwO-IJAUkFMn-eA4QXKsAlyg",
        "authDomain": "budgetcation.firebaseapp.com",
        "databaseURL": "https://budgetcation.firebaseio.com/",
        "storageBucket": "gs://budgetcation.appspot.com/",
        "serviceAccount": "budgetcation-firebase.json"
    }

    firebase = pyrebase.initialize_app(config)

    ###This comes from flask
    #username = "martinchakchak@yahoo.ca"
    #password = "NuclearRevengeance"
    #name = 'martin'
    username = "bill87@gmail.com"
    password = "password"
    name = 'bill'

    ###This needs to be run in order to do anything
    auth = firebase.auth()
    db = firebase.database()

    ###User login using the flask given-info
    user = auth.sign_in_with_email_and_password(username, password)

    ###Needed for user specification
    userToken = user['idToken']

    ###This needs to be run exactly once, this is only run when the database starts,
    ###only init_users() if you clear the entire database; it initialises a boolean
    ###variable in the database that allows for easy management from the rest of
    ###the methods
    #init_users(db)

    ###MUST HAVE USER PROFILE BEFORE TRIP PLANS
    create_user_profile(db, name)

    ###Will come from user
    tripName = 'summer'
    tripLoc = 'dubai'

    ###MUST HAVE TRIP PLANS BEFORE LIVE TRANSACTIONS
    create_trip_plan(db, name, tripName, tripLoc)
    create_trip_plan(db, name, 'Get Arrested', 'China')

    ###EXAMPLE FOR GENERATING MULTIPLE BUDGETS WITH DIFFERENT NAMES
    ###The transactionID must always be string
    ###EXAMPLE DATA TYPE: {transID: {'name':'food','amount':10}# }}
    ###push_budget(db, userToken, name, tripName, transID, transName, transAmount)
    push_budget(db, name, tripName, '25', 'food', 10)
    push_budget(db, name, 'Get Arrested', '26', 'Donation for China', 10000000)

    reset_budget_data(db, name, tripName)

    #budgetID = 8
    #remove_budget_data(db, userToken, name, tripName, budgetID)

    #remove_trip_data(db, userToken, name, tripName)

    # Read test
    #userInfo = read_data(db)
    #print(userInfo)
