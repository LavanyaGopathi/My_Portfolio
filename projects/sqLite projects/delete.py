import sqlite3
import read
import time
conn = sqlite3.connect("sequences/dpOperations/SQLlite/sqLite projects/filmflix.db")
cursor = conn.cursor()
def deletetblFilms():
    idField = input("Enter the filmID of the film to be deleted : ")
    cursor.execute(f"DELETE FROM tblFilms WHERE filmID={idField}")

    conn.commit()
    print(f"Record {idField} deleted")

    time.sleep(3)

    read.readtblFilms()  

deletetblFilms()