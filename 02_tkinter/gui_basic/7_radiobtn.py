from tkinter import *

root = Tk() # Tk()는 윈도우를 만드는 클래스
root.title("Nado GUI")
root.geometry("640x480+300+100") # 가로 * 세로 + x좌표 + y좌표

Label(root, text="메뉴를 선택하세요").pack()

burger_var = IntVar() # 라디오버튼은 하나의 값만 선택할 수 있기 때문에 그룹화된 변수가 필요함
btn_burger1 = Radiobutton(root, text="햄버거", value = 1, variable = burger_var)
btn_burger1.select() # 기본값 선택 처리
btn_burger2 = Radiobutton(root, text="치즈버거",  value = 2, variable = burger_var)
btn_burger3 = Radiobutton(root, text="치킨버거",  value = 3, variable = burger_var)

btn_burger1.pack()
btn_burger2.pack()
btn_burger3.pack()

Label(root, text="음료를 선택하세요").pack()

drink_var = StringVar()
btn_drink1 = Radiobutton(root, text="콜라", value = "콜라", variable = drink_var)
btn_drink1.select()
btn_drink2 = Radiobutton(root, text="사이다",  value = "사이다", variable = drink_var)

btn_drink1.pack()
btn_drink2.pack()


def btncmd() :
    print(burger_var.get()) # 선택된 라디오 항목의 값(value)을 출력
    print(drink_var.get())



btn = Button(root, text="주문", command = btncmd)
btn.pack()


root.mainloop() # 창이 닫히지 않도록 하는 역할