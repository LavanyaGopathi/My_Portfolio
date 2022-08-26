import sqlite3
conection = sqlite3.connect("projects/Login page/dpOperations/LoginDatabase.db")
cursor = conection.cursor()
cmd ="""CREATE TABLE IF NOT EXISTS users(EmailId Text,Password Text)"""
cursor.execute(cmd)
users = ["lavanya.bete@gmail.com","lavanya12345"]
cursor.execute("INSERT INTO users VALUES(?,?)",users)

conection.commit()

