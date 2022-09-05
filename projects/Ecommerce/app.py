from flask import Flask,render_template,request
import sqlite3

app = Flask(__name__)

@app.route("/")
@app.route("/signin", methods = ['POST', 'GET'])
def signIn():
    signInForm = request.form.to_dict()
    if len(signInForm) > 0:
        userName = signInForm["email"]
        password = signInForm["password"]
        error = ""
        if len(password) <= 6:
            message = " * Password must be longer than 6 charecters."
            error += message
            return render_template("/signIn.html",error=error)
        if len(password) >= 20:
            message = " * Password must be less than 20 charecters."
            error += message
            return render_template("/signIn.html",error=error)
        if password == 'password':
            message =" * Password cannot be password."
            error += message
            return render_template("/signIn.html",error=error)
        else:
            if request.method == 'POST':
                conection = sqlite3.connect("dpOperations/LoginDatabase.db")
                cursor = conection.cursor()
                Statement= f"SELECT * FROM users WHERE EmailID='{userName}' AND password='{password}';"
                cursor.execute(Statement)
                if cursor.fetchone():
                    return render_template("/Home.html")
                else:
                    message ="Username and Password not found"
                    error += message
                    return render_template("/signIn.html",error=error)
    elif request.method == 'GET':
        return render_template("/signIn.html")


@app.route("/signup", methods = ['POST', 'GET'])
def signUp():
    signUpForm = request.form.to_dict()
    error = ""
    if len(signUpForm) > 0:
        FullName = signUpForm["FullName"]
        Email = signUpForm["Email"]
        password = signUpForm["password"]
        RepeatPassword = signUpForm["RepeatPassword"]
        if password != RepeatPassword:
            message = "Password and Repeat password are not same."
            error += message
            return render_template("/signUp.html",error=error)
        else:
            conection = sqlite3.connect("dpOperations/LoginDatabase.db")
            cursor = conection.cursor()
            if request.method == 'POST':
                if( Email != ""):
                    Statement= f"SELECT * FROM users WHERE EmailID='{Email}';"
                    cursor.execute(Statement)
                    data = cursor.fetchone()
                    if data:
                        return render_template("/signUp.html",error="User Already Exists Please Try for New user name")
                    else:
                        cursor.execute("INSERT INTO users (FullName,EmailId,Password) VALUES (?,?,?)",(FullName,Email,password))
                        conection.commit()
                        message = "User Registerd Successfully. Please SignIn."
                        cursor.close()
                        return render_template("/signUp.html",message=message)

            elif request.method == 'GET':
                return render_template("/signUp.html")
    else:
        return render_template("/signUp.html")
    

@app.route("/forgetpassword", methods = ['POST', 'GET'])
def forgetPassword():
    
    forgetPassword = request.form.to_dict()
    error = ""
    if len(forgetPassword) > 0:
        Email = forgetPassword["email"]
        password = forgetPassword["password"]
        ConfirmPassword = forgetPassword["ConfirmPassword"]
        if password != ConfirmPassword:
            message = "Password and Repeat password are not same."
            error += message
            return render_template("/forgetPassWord.html",error=error)
        else:
            conection = sqlite3.connect("dpOperations/LoginDatabase.db")
            cursor = conection.cursor() 
            if request.method == 'POST':
                Statement= f"SELECT EmailId FROM users WHERE EmailID='{Email}';"
                cursor.execute(Statement)
                data = cursor.fetchone()
                if not data :
                    return render_template("/forgetPassWord.html",error="Please Enter Valid Email ID.")
                else:
                    Statement= f"UPDATE users SET password = '{password}' WHERE EmailID='{Email}';"
                    cursor.execute(Statement)
                    conection.commit()
                    cursor.close()
                    return render_template("/forgetPassWord.html",context="Your Password Updated Successfully.")
            elif request.method == 'GET':
                return render_template("/forgetPassWord.html")
    else:
        return render_template("/forgetPassWord.html")

@app.route("/mangoProducts.html",methods = ['POST','GET'])
def mangoProducts():
    return render_template("/mangoProducts.html")

@app.route("/MilkProduction.html",methods = ['POST','GET'])
def MilkProduction():
    return render_template("/MilkProduction.html")

@app.route("/GroceryShop.html",methods = ['POST','GET'])
def GroceryShop():
    return render_template("/GroceryShop.html")

@app.route("/CultivatingCrops.html",methods = ['POST','GET'])
def CultivatingCrops():
    return render_template("/CultivatingCrops.html")

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000)
    