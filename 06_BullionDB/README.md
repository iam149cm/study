# 🪙 BullionDB (Bullion Dash Board)

> **실물 자산(은, 귀금속) 및 투자 포트폴리오 실시간 가치 추적 대시보드**

BullionDB는 구매한 실물 은(Bullion)의 수량과 매수 가격을 기록하고, 실시간 국제 시세 및 환율을 반영하여 현재 자산 가치를 한눈에 파악할 수 있는 개인용 자산 관리 솔루션입니다.

## 🚀 주요 기능 (MVP)
- **실시간 시세 연동**: 외부 API를 활용한 실시간 국제 은(Silver) 시세(USD/oz) 추적.
- **자동 가치 산출**: 
  - 구매 당시 가격 대비 현재 손익률 계산.
  - 달러 및 파운드 시세를 실시간 환율을 적용하여 원화(KRW)로 환산.
- **중량 단위 변환**: 온스(oz)와 그램(g) 단위를 자동으로 변환하여 표시 (예: 1/2oz x 20개 = 10oz / 311.03g).
- **자산 리스트 관리**: 매수한 실물 자산의 이름, 구매가, 수량 등을 관리. (브라우저 로컬 스토리지에 저장)

## 🛠 기술 스택
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Context API 또는 단순 Props (MVP 기준)
- **Deployment**: Vercel
- **Editor**: Cursor (AI-Powered)

## 🌐 배포 URL
- **Live Site**: https://bulliondb.vercel.app/

## 📊 데이터 모델 (Initial Data Structure)
현재 보유 중인 항목을 기준으로 초기 데이터를 구성합니다.
- **Item**: The Lion and the Eagle 2026 1/2oz Silver Bullion Coin
- **Quantity**: 20 ea (Total 10oz)
- **Weight**: 311.03g (10oz equivalent)
- **Total Price** : £921.09 