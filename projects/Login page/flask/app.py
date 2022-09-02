from flask import Flask,render_template,request
import sqlite3

app = Flask(__name__)

@app.route("/")
def Home():
    return render_template("/index.html")

def signIn():
    return render_template("/signIn.html")

def signUp():
    return render_template("/signUp.html")

def forgetPassword():
    return render_template("/forgetPassWord.html")





if __name__ == "__main__":
    app.run()