from tkinter import *
import tkinter.ttk as ttk
import time

root = Tk() # Tk()는 윈도우를 만드는 클래스
root.title("Nado GUI")
root.geometry("640x480+300+100") # 가로 * 세로 + x좌표 + y좌표

# progressbar = ttk.Progressbar(root, maximum = 100, mode = "indeterminate") # indeterminate : 언제 끝날지 모르는 상태
# progressbar = ttk.Progressbar(root, maximum = 100, mode = "determinate") # determinate : 언제 끝날지 알 수 있는 상태

# progressbar.start(10) # 10ms 마다 움직임
# progressbar.pack()

# def btncmd() :
#     progressbar.stop() # 작동 중지

# btn = Button(root, text="중지", command = btncmd)
# btn.pack()

p_var2 = DoubleVar()
progressbar2 = ttk.Progressbar(root, maximum = 100, length=150, variable=p_var2) # length : progressbar 길이
progressbar2.pack()

def btncmd2() :
    for i in range(1, 101) :
        time.sleep(0.01) # 0.01초 대기

        p_var2.set(i) # progressbar 값 설정
        progressbar2.update() # ui 업데이트
        print(p_var2.get())


btn = Button(root, text="시작", command = btncmd2)
btn.pack()


root.mainloop() # 창이 닫히지 않도록 하는 역할