import sqlite3
conection = sqlite3.connect("dpOperations/LoginDatabase.db")
cursor = conection.cursor()
cmd ="""CREATE TABLE IF NOT EXISTS users(FullName Text,EmailId Text,Password Text)"""
cursor.execute(cmd)
users = ["Lavanya","lavanya.bete@gmail.com","lavanya12345"]
cursor.execute("INSERT INTO users VALUES(?,?,?)",users)

conection.commit()

