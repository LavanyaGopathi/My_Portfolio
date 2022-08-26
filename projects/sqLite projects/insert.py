import sqlite3
import time
conn = sqlite3.connect("sequences/dpOperations/SQLlite/sqLite projects/filmflix.db")
cursor = conn.cursor()
def addtblFilms():
    
    films =[]

    title = input("Enter film tiitle: ")
    yearReleased = input("Enter year of release: ")
    rating = input("Enter rating of the film: ")
    duration = input("Enter film duration of year: ")
    genre = input("Enter film genre: ")

    films.append(title)
    films.append(yearReleased)
    films.append(rating)
    films.append(duration)
    films.append(genre)
   

    cursor.execute("INSERT INTO tblFilms VALUES(Null,?,?,?,?,?)",films)

    conn.commit() 
    print(f"{title} added to film data table")

    time.sleep(3)
    cursor.execute("SELECT * FROM tblFilms") 

    row = cursor.fetchall() 



    for record in row: 

        print(record)

addtblFilms() 
