from tkinter import *

root = Tk() # Tk()는 윈도우를 만드는 클래스
root.title("Nado GUI")
root.geometry("640x480") # 가로 * 세로 

Label(root, text="메뉴를 선택해 주세요").pack(side="top")
Button(root, text="주문하기").pack(side="bottom")


# 햄버거 메뉴
frame_burger = Frame(root, relief="solid", bd=1) # relief="solid" : 테두리를 그어줌, bd=1 : 테두리 두께
frame_burger.pack(side="left", fill="both", expand=True) 
# side="left" : 왼쪽에 배치, fill="both" : x, y축으로 채움, expand=True : 확장 가능

Button(frame_burger, text="햄버거").pack()
Button(frame_burger, text="치즈버거").pack()
Button(frame_burger, text="치킨버거").pack()

# 음료 메뉴
frame_drink = LabelFrame(root, text="음료") # LabelFrame : 제목이 있는 프레임
frame_drink.pack(side="right", fill="both", expand=True)

Button(frame_drink, text="콜라").pack()
Button(frame_drink, text="사이다").pack()

root.mainloop() # 창이 닫히지 않도록 하는 역할