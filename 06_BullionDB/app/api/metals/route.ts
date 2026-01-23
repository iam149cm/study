import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 개발 환경에서 API 호출 한도를 절약하기 위해 가짜(Mock) 데이터를 반환합니다.
    // 실제 API를 테스트하려면 .env.local에 FORCE_REAL_API=true를 설정하세요.
    if (process.env.NODE_ENV === 'development' && process.env.FORCE_REAL_API !== 'true') {
      console.log('🚧 개발 모드: API 호출 대신 Mock 데이터를 사용합니다.')
      return NextResponse.json({
        gold: {
          price: 2350.50, // 테스트용 고정 가격
          change: 15.20, // 전일 대비 변동액 (테스트용)
          changePercent: 0.65, // 전일 대비 변동률 % (테스트용)
          currency: 'USD',
          unit: 'oz',
        },
        silver: {
          price: 28.15, // 테스트용 고정 가격
          change: -0.45, // 전일 대비 변동액 (테스트용)
          changePercent: -1.57, // 전일 대비 변동률 % (테스트용)
          currency: 'USD',
          unit: 'oz',
        },
        timestamp: new Date().toISOString(),
      })
    }

    const apiKey = process.env.METALPRICE_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API 키가 설정되지 않았습니다. .env.local 파일에 METALPRICE_API_KEY를 추가해주세요.' },
        { status: 500 }
      )
    }

    // 1. 어제 날짜 구하기 (YYYY-MM-DD 형식)
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().split('T')[0]

    // 2. API URL 설정 (현재 시세 + 어제 시세)
    const latestUrl = `https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=USD&currencies=XAU,XAG`
    const yesterdayUrl = `https://api.metalpriceapi.com/v1/${yesterdayStr}?api_key=${apiKey}&base=USD&currencies=XAU,XAG`
    
    // 3. 병렬로 데이터 가져오기 (어제 데이터는 24시간 캐싱하여 API 절약)
    const [latestRes, yesterdayRes] = await Promise.all([
      fetch(latestUrl, { next: { revalidate: 86400 } }),
      fetch(yesterdayUrl, { next: { revalidate: 86400 } }) 
    ])

    if (!latestRes.ok || !yesterdayRes.ok) {
      const errorText = !latestRes.ok ? await latestRes.text() : await yesterdayRes.text()
      console.error('API 응답 오류:', errorText)
      throw new Error(`API 요청 실패: ${errorText}`)
    }

    const latestData = await latestRes.json()
    const yesterdayData = await yesterdayRes.json()

    // API 응답 디버깅을 위한 로그 (개발 환경에서만)
    if (process.env.NODE_ENV === 'development') {
      console.log('MetalpriceAPI Latest:', JSON.stringify(latestData, null, 2))
    }

    if (!latestData.success) {
      throw new Error(latestData.error?.message || 'API 응답 실패')
    }

    // MetalpriceAPI 응답 형식 확인
    // rates 객체에서 USDXAU, USDXAG 값을 가져옴
    // 실제 응답: { USDXAU: 4803.16..., USDXAG: 95.13... }
    // USDXAU는 이미 1 온스당 USD 가격을 의미합니다 (1 oz = USDXAU USD)
    // 따라서 역수를 계산할 필요가 없습니다
    const goldPrice = latestData.rates?.USDXAU
    const silverPrice = latestData.rates?.USDXAG
    
    // 어제 가격 (변동폭 계산용) - 어제 데이터가 없으면 현재 가격과 동일하게 처리(변동 0)
    const goldPrev = yesterdayData.rates?.USDXAU || goldPrice
    const silverPrev = yesterdayData.rates?.USDXAG || silverPrice

    if (!goldPrice || !silverPrice) {
      throw new Error(`API 응답 형식 오류: rates가 없습니다.`)
    }

    // 값이 유효한지 확인
    if (!isFinite(goldPrice) || !isFinite(silverPrice)) {
      throw new Error(`계산된 가격이 유효하지 않습니다. 금: ${goldPrice}, 은: ${silverPrice}`)
    }

    if (goldPrice <= 0 || silverPrice <= 0) {
      throw new Error(`가격이 0 이하입니다. 금: ${goldPrice}, 은: ${silverPrice}`)
    }

    // 변동폭 계산 함수
    const calculateChange = (current: number, prev: number) => {
      const change = current - prev
      const changePercent = (change / prev) * 100
      return {
        change: parseFloat(change.toFixed(2)),
        changePercent: parseFloat(changePercent.toFixed(2))
      }
    }

    const goldChange = calculateChange(goldPrice, goldPrev)
    const silverChange = calculateChange(silverPrice, silverPrev)

    return NextResponse.json({
      gold: {
        price: parseFloat(goldPrice.toFixed(2)),
        change: goldChange.change,
        changePercent: goldChange.changePercent,
        currency: 'USD',
        unit: 'oz',
      },
      silver: {
        price: parseFloat(silverPrice.toFixed(2)),
        change: silverChange.change,
        changePercent: silverChange.changePercent,
        currency: 'USD',
        unit: 'oz',
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('금속 시세 조회 오류:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '금속 시세를 가져오는데 실패했습니다' },
      { status: 500 }
    )
  }
}