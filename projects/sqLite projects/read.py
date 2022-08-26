import sqlite3
conn = sqlite3.connect("sequences/dpOperations/SQLlite/sqLite projects/filmflix.db")
cursor = conn.cursor()
def readtblFilms():
    cursor.execute("SELECT * FROM tblFilms") 

    row = cursor.fetchall()
    for record in row: 

        print(record)

readtblFilms() 