from tkinter import *

root = Tk() # Tk()는 윈도우를 만드는 클래스
root.title("Nado GUI")
root.geometry("640x480+300+100") # 가로 * 세로 + x좌표 + y좌표

listbox = Listbox(root, selectmode="extended", height=0) # selectmode="extended" : 여러 개 선택 가능 / "single" : 한 개 선택 , height=0 : 리스트의 개수 제한 없음
listbox.insert(0, "사과")
listbox.insert(1, "딸기")
listbox.insert(2, "바나나")
listbox.insert(END, "수박")
listbox.insert(END, "포도")

listbox.pack()


def btncmd() :
    # listbox.delete(END) # 맨 뒤에 항목을 삭제
    # listbox.delete(0) # 맨 앞 항목을 삭제

    # 갯수 확인
    # print("리스트에는", listbox.size(), "개가 있어요")

    # 항목 확인 (시작 idx, 끝 idx)
    # print("1번째부터 3번째까지의 항목 : ", listbox.get(0, 2))

    # 선택된 항목 확인 (위치로 반환 (ex) (1, 2, 3))
    print("선택된 항목 : ", listbox.curselection()) # curselection() : 현재 선택된 항목의 위치 반환



btn = Button(root, text="클릭", command = btncmd)
btn.pack()



root.mainloop() # 창이 닫히지 않도록 하는 역할