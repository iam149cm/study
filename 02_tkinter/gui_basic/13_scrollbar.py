from tkinter import *

root = Tk() # Tk()는 윈도우를 만드는 클래스
root.title("Nado GUI")
root.geometry("640x480") # 가로 * 세로 

frame = Frame(root)
frame.pack()

scrollbar = Scrollbar(frame)
scrollbar.pack(side="right", fill="y")

listbox = Listbox(
    frame, 
    selectmode="extended", 
    height=10, 
    yscrollcommand=scrollbar.set) # set이 없으면 스크롤바가 움직이지 않음
# selectmode="extended" : 여러개 선택 가능

for i in range(1, 32) : # 1 ~ 31일
    listbox.insert(END, str(i) + "일")

listbox.pack(side="left")
scrollbar.config(command=listbox.yview) # 스크롤바와 리스트박스 매핑

root.mainloop() # 창이 닫히지 않도록 하는 역할