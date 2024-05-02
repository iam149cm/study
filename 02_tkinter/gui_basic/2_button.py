from tkinter import *

root = Tk() # Tk()는 윈도우를 만드는 클래스
root.title("Nado GUI")

btn1 = Button(root, text = "버튼1")
btn1.pack() # pack()을 해야만 화면에 보임

btn2 = Button(root, padx = 5, pady = 10, text = "버튼222222222222222") # padx, pady는 버튼 내부의 글자와 버튼의 경계 사이의 여백. 글자가 길어지면 버튼의 크기가 늘어남
btn2.pack()

btn3 = Button(root, padx = 10, pady = 5, text = "버튼3")
btn3.pack()

btn4 = Button(root, width=10, height=3, text = "버튼44444444444444444") # width, height는 버튼의 크기를 지정. 글자가 길어도 버튼의 크기가 고정되어 있음
btn4.pack()

btn5 = Button(root, fg="red", bg="yellow", text = "버튼5") # fg는 글자색, bg는 배경색
btn5.pack()

photo = PhotoImage(file="study/02_tkinter/gui_basic/img.png")
btn6 = Button(root, image=photo)
btn6.pack()

def btncmd() :
    print("버튼이 클릭되었어요.")
btn7 = Button(root, text="동작하는 버튼", command=btncmd) # command는 버튼을 클릭했을 때 동작하는 함수를 지정
btn7.pack()

root.mainloop() # 창이 닫히지 않도록 하는 역할