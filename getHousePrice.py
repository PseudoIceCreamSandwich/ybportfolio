from tkinter import *
from math import *
import joblib


model = joblib.load('HousePricePredictor.joblib')
main = Tk()
main.title('House Price Calculator')
def add():
    blank.delete(0, END)
    Ans = model.predict([[int(num1.get()), int(num2.get()), int(num3.get()), int(num4.get())]])
    blank.insert(0, int(Ans))


main.geometry('500x200')
Label(main, text = "Enter area of house in square feet:").grid(row=0)
Label(main, text = "Enter the number of bedrooms:").grid(row=1)
Label(main, text = "Enter the number of bathrooms:").grid(row=2)
Label(main, text = "Enter the year the house was built:").grid(row=3)
Label(main, text = "Predicted price in dollars:").grid(row=4)


num1 = Entry(main)
num2 = Entry(main)
num3 = Entry(main)
num4 = Entry(main)
blank = Entry(main)


num1.grid(row=0, column=1)
num2.grid(row=1, column=1)
num3.grid(row=2, column=1)
num4.grid(row=3, column=1)
blank.grid(row=4, column=1)


Button(main, text='Quit', command=main.destroy).grid(row=5, column=0, sticky=W)
Button(main, text='Calculate', command=add).grid(row=4, column=3, sticky=W,)


mainloop()