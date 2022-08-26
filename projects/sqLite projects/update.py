import sqlite3
import read
import time
conn = sqlite3.connect("sequences/dpOperations/SQLlite/sqLite projects/filmflix.db")
cursor = conn.cursor()
def updatetblFilms():
    idField = input("Enter the filmID of the song to be updated : ")

    fieldName = input("Which field would you like to update(Title,yearRelease,rating,duration,Genre?): ").title()
    newfieldValue = input(f"Enter the new field value for {fieldName}")

    print(f"The new field value enteed is {newfieldValue}")

    newfieldValue = "'" + newfieldValue + "'"

    print(f"The new field value enteed is {newfieldValue}")

    "UPDATE tblFilms SET Title/Artist/Genre = newfieldValue(Bad/MJ/pop) "

    cursor.execute(f"UPDATE tblFilms SET {fieldName} = {newfieldValue} WHERE filmID = {idField}")

    conn.commit()
    print(f"Record {idField} updated")

    time.sleep(3)

    read.readtblFilms() 

updatetblFilms() 