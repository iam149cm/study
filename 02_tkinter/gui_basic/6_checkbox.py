from tkinter import *

root = Tk() # Tk()는 윈도우를 만드는 클래스
root.title("Nado GUI")
root.geometry("640x480+300+100") # 가로 * 세로 + x좌표 + y좌표

chkvar = IntVar() # chkvar에 int형으로 값을 저장
chkbox = Checkbutton(root, text="오늘 하루 보지 않기", variable = chkvar) # 체크박스 생성
# chkbox.select() # 자동 선택 처리
# chkbox.deselect() # 선택 해제 처리
chkbox.pack()

chkvar2 = IntVar()
chkbox2 = Checkbutton(root, text="일주일동안 보지 않기", variable=chkvar2)
chkbox2.pack()


def btncmd() :
    print(chkvar.get()) # 0 : 해제, 1 : 선택
    print(chkvar2.get())



btn = Button(root, text="클릭", command = btncmd)
btn.pack()


root.mainloop() # 창이 닫히지 않도록 하는 역할