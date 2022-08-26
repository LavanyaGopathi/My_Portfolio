import read
import insert
import update
import delete

# create a function

def menuOptions():

    options = 0  # flag variable



    while options not in ["1", "2", "3", "4", "5"]:

        print(

            "film Menu Options\nEnter \n1. To Print.\n2. To Add.\n3. To Update.\n4. To Delete.\n5. To Exit."

        )

        # re-assign options variable with a new value

        options = input("\nEnter one of the options above: ")

        if options not in ["1", "2", "3", "4", "5"]:

            print(f"{options} is not a valid choice")

    return options

mainProgram = True # flag variable

while mainProgram == True:

    mainMenu = menuOptions()

    if mainMenu == "1":

        read.readtblFilms()

    elif mainMenu == "2":

        insert.addtblFilms()

    elif mainMenu == "3":

        update.updatetblFilms()

    elif mainMenu == "4":

        delete.deletetblFilms()

    else: #reassign mainProgram to False

        mainProgram = False

input("press ENter to Exit")
