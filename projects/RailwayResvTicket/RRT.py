# importing the required files
import tkinter as tk
from typing import Counter
from PIL import ImageTk, Image
import sys
from tkinter import messagebox
from tkinter import font
w1 = tk.Tk()
w1.geometry("1366x720")
w1.title("LOGIN")
# variable storing entered data
uservalue = tk.StringVar()
passvalue = tk.StringVar()
user2value = tk.StringVar()
pass2value = tk.StringVar()
confpassvalue =tk.StringVar()
emailvalue = tk.StringVar()


# creating a counter
Counter=0

# if login in btn clicked
def login1():
    # if there is nothing entered by the user
    if uservalue.get() == "" or passvalue.get() == "":
        messagebox.showerror("Error","All fields are required",parent=w1)
        sys.exit()



    # connection
    import mysql.connector as con
    connection = con.connect(host="localhost",user="root",password="Lavanya@1993",database="UKRRC")
    # in the table username is the primary key
    # therefore there can't be multiple usernames with same name

    cursor = connection.cursor() # creating cursor
    # calculating number of rows in the database
    cursor.execute("select count(*) from signin")
    afetch = cursor.fetchone()
    bfetch = afetch[0] # it has the number of rows
    username = uservalue.get()
    password = passvalue.get()
    # Checking if username and password are correct and match
    cursor.execute("select username,password from signin where username=username and password=password")
    row=cursor.fetchall()
    # it will check the database for entered username and password and will match if they are present 

    global Counter
    # as declared currently counter=0
    for i in range(0,bfetch):
        if(row[i][0]==username and row[i][i]==password):
            Counter=1
    if(Counter==1):
        messagebox.showinfo("Found","logging in")
        messagebox.showinfo("Hello","Please close this window to continue")
        print("found")
    else:
        messagebox.showinfo("Not found","Password and uservalue does not match")
    connection.close()
# if signup btn is clicked
def signup2():
    printuser = printemail = printpass = ""
    if(user2value.get()==""or emailvalue.get()==""or pass2value.get()==""or confpassvalue.get()==""):
        messagebox.showerror("Error","All Fields are Required",parent=w1)
    elif pass2value.get()!=confpassvalue.get():
        messagebox.showerror("Error","Password and confirm password should be same",parent=w1)
    else:
        printuser = user2value.get()
        printemail = emailvalue.get()
        printpass = pass2value.get()
    # Creating connection to the database
    # connection
    import mysql.connector as con
    connection = con.connect(host="localhost",user="root",password="Lavanya@1993",database="UKRRC")

    cursor = connection.cursor()
    # Now writing the details back to the database
    # This may get you a lot of errors so be wise and do it keenly
    cursor.execute("INSERT INTO signin (username,password,email) VALUES (%s,%s,%s)",(printuser,printpass,printemail))
    connection.commit()
    # username,password and email are the names of column of the database 
    connection.close()
    messagebox.showinfo("Registered","You have been successfully registered",w1)
    messagebox.showinfo("DONE!!!","Kindly Login to Continue")
    #  signup page

def signup1():
    imgObj = ImageTk.PhotoImage(Image.open("/Users/Lavanya/Desktop/My_Portfolio/projects/RailwayResvTicket/background.jpg"))
    background_label = tk.Label(w1,image=imgObj)
    background_label.place(x=1000,y=1500,relwidth = 1,relheight = 1)
    frame_input2 = tk.Frame(w1,bg="skyblue")
    frame_input2.place(x=320,y=130,height=500,width=630)
    label1 = tk.Label(frame_input2,text="Register Here",font=('impact',32,'bold'),fg="blue",bg="skyblue")
    label1.place(x=70,y=20)
    # using the variables global
    
    global user2value
    global pass2value
    global emailvalue
    global confpassvalue

    # username entry

    # username
    user2 = tk.Label(frame_input2,text="username",font=("Goudy old style",20,"bold"),fg="orangered",bg="white")
    user2.place(x=30,y=95)
    user2= tk.Entry(frame_input2,font=("times new roman",15,"bold"),bg="lightgray",textvariable=user2value)
    user2.place(x=30,y=145,width=270,height=35)

    # password
    pass2 = tk.Label(frame_input2, text="Password",font=("Goudy old style",20,"bold"),fg="orangered",bg="white")
    pass2.place(x=30,y=195)
    passentry2 = tk.Entry(frame_input2,font=("times new roman",15,"bold"),bg="lightgray",textvariable=pass2value)
    passentry2.place(x=30,y=245,width=270,height=35) 
    # Email
    email = tk.Label(frame_input2, text="Email-id",font=("Goudy old style",20,"bold"),fg="orangered",bg="white")
    email.place(x=330,y=95)
    emailentry = tk.Entry(frame_input2,font=("times new roman",15,"bold"),bg="lightgray",textvariable=emailvalue)
    emailentry.place(x=330,y=145,width=270,height=35) 
    # Confirm Password
    confpass = tk.Label(frame_input2, text="Confirm Password",font=("Goudy old style",20,"bold"),fg="orangered",bg="white")
    confpass.place(x=330,y=195)
    confpassentry = tk.Entry(frame_input2,font=("times new roman",15,"bold"),bg="lightgray",textvariable=confpassvalue)
    confpassentry.place(x=330,y=245,width=270,height=35) 
    # sign up button
    btns=tk.Button(frame_input2,text="Sign Up",font=("Century Gothic",18),bg="orangered",fg="white",command=signup2)
    btns.place(x=50,y=340)
    #  If already registered
    rego=tk.Button(frame_input2,command=main,text="Already Registered? Login",cursor="hand2",font=("times new roman",15),fg="white",bg="orangered",bd=0,width=30,height=1)
    rego.place(x=270,y=340)
    # It will again go the main function and restart the login page
    w1.mainloop()

import os

# Main method for the login page
def main():
    # Set environment variable
    os.environ['TK_SILENCE_DEPRECATION'] = "1"
    imgObj = ImageTk.PhotoImage(Image.open("/Users/Lavanya/Desktop/My_Portfolio/projects/RailwayResvTicket/background-2.jpg"))
    background_label = tk.Label(w1,image=imgObj)
    background_label.place(x=0,y=0,relwidth = 1,relheight = 1)
    global uservalue
    global passvalue
    
    # using it globally so that the data is made globally
    # creating the frame
    frame_input = tk.Frame(w1,bg="#f48")
    frame_input.place(x=320,y=130,height=500,width=400)

    #.place will place at desired pixels 
    # Adding text to the frame
    tk.Label(text="UKRRT LOGIN", font=("Century Gothic Bold",30),fg="red").place(x=400,y=150)
    # it could be easily modified
    tk.Label(text="USERNAME",font=("Century Gothic",25),fg="red",borderwidth=3,relief=tk.RIDGE).place(x=340,y=230)
    tk.Label(text="PASSWORD",font=("Century Gothic",24),fg="red",borderwidth=3,relief=tk.RIDGE).place(x=340,y=340)
    # Creating entry widgets

    userEntry = tk.Entry(w1,fg="red",bg="green",textvariable=uservalue)
    passwordEntry = tk.Entry(w1,fg="red",bg="green",textvariable=passvalue)
    userEntry.place(x=340,y=280)
    passwordEntry.place(x=340,y=390)
    # we have to place a login button

    btn1 = tk.Button(frame_input,text="Login",font=("Century Gothic",18),bg="orangered",fg="white",command=login1)
    btn1.place(x=90,y=340)
    # if not logged in already
    btn2 = tk.Button(frame_input,text = "Not Registered Sign Up",font=("Century Gothic",15),bg="orangered",fg="white",command=signup1)
    btn2.place(x=70,y=420)
    w1.mainloop()
main()






