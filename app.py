from unittest import result
from flask import Flask ,render_template ,request
import sqlite3
# --------------------------------------------------------------------
# set up of the flask

app = Flask(__name__)

# --------------------------------------------------------------------
# Routes

@app.route('/',methods=['GET','POST'])
def index():
    print("Hi")
#     if request.method == 'POST':

# # --------------------------------------------------------------------------
# # SQLite Connection

#         conection = sqlite3.connect("projects/Login page/dpOperations/LoginDatabase.db")
#         cursor = conection.cursor()

# # --------------------------------------------------------------------------------------------------------
# # HTML Form

#         Email = request.form['Email']
#         Password = request.form['Password']
#         print(Email,Password)

# # --------------------------------------------------------------------------------------------------------------------------------------
# # Query

#         query = "SELECT Email ,Password FROM users WHERE Email = '" + Email + "' AND Password = '" + Password + "'"
#         cursor.execute(query)
#         results = cursor.fetchall

# # ----------------------------------------------------------------------------------------------------------------------------------------------------------
# # Validation



#         if len(results) == 0:
#             print("Sorry Incorrect Credentials Provided.Try Again")
#         else:
#             return render_template("projects/Login page/web development")
    return render_template('signIn.html')
