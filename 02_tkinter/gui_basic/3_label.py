from tkinter import *

root = Tk() # Tk()는 윈도우를 만드는 클래스
root.title("Nado GUI")
root.geometry("640x480+300+100") # 가로 * 세로 + x좌표 + y좌표

# label : 글자나 이미지를 보여줄 때 사용
label1 = Label(root, text="안녕하세요")
label1.pack()

photo = PhotoImage(file="study/02_tkinter/gui_basic/img.png")
label2 = Label(root, image=photo)
label2.pack()

def change() :
    label1.config(text="또 만나요")
    
    global photo2 # 전역변수로 선언해야 garbage collection이 되지 않음
    photo2 = PhotoImage(file="study/02_tkinter/gui_basic/img01.png")
    label2.config(image=photo2)






btn = Button(root, text="클릭", command=change)
btn.pack()

root.mainloop() # 창이 닫히지 않도록 하는 역할