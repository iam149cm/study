from tkinter import *

root = Tk() # Tk()는 윈도우를 만드는 클래스
root.title("Nado GUI")
root.geometry("640x480+300+100") # 가로 * 세로 + x좌표 + y좌표

txt = Text(root, width=30, height=5) # 여러 줄 입력 받을 때 사용
txt.pack()
txt.insert(END, "글자를 입력하세요")

e = Entry(root, width=30) # 한 줄 입력 받을 때 사용. 줄바꿈 불가
e.pack()
e.insert(0, "한 줄만 입력해요")

def btncmd() :
    # 내용 출력
    print(txt.get("1.0", END)) # 1: 첫 번째 라인, 0: 0번째 column 위치
    print(e.get())

    # 내용 삭제
    txt.delete("1.0", END)
    e.delete(0, END)

btn = Button(root, text="클릭", command = btncmd)
btn.pack()



root.mainloop() # 창이 닫히지 않도록 하는 역할