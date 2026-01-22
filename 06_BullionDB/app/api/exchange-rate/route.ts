import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // ExchangeRate-API를 사용하여 환율 가져오기 (무료)
    // 또는 한국은행 API를 사용할 수도 있습니다
    const usdResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD', {
      next: { revalidate: 3600 }, // 1시간마다 캐시 갱신
    })

    if (!usdResponse.ok) {
      throw new Error(`USD 환율 조회 실패: ${usdResponse.status}`)
    }

    const usdData = await usdResponse.json()
    
    const krwRate = usdData.rates?.KRW
    
    // API 응답 디버깅을 위한 로그 (개발 환경에서만) - KRW만 표시
    if (process.env.NODE_ENV === 'development') {
      console.log('USD → KRW 환율:', krwRate)
    }

    if (!krwRate) {
      throw new Error(`KRW 환율을 찾을 수 없습니다. 응답: ${JSON.stringify(usdData)}`)
    }

    // GBP 환율도 가져오기
    const gbpResponse = await fetch('https://api.exchangerate-api.com/v4/latest/GBP', {
      next: { revalidate: 3600 },
    })

    if (!gbpResponse.ok) {
      throw new Error(`GBP 환율 조회 실패: ${gbpResponse.status}`)
    }

    const gbpData = await gbpResponse.json()
    
    const gbpToKrwRate = gbpData.rates?.KRW
    
    // API 응답 디버깅을 위한 로그 (개발 환경에서만) - KRW만 표시
    if (process.env.NODE_ENV === 'development') {
      console.log('GBP → KRW 환율:', gbpToKrwRate)
    }

    if (!gbpToKrwRate) {
      throw new Error(`GBP→KRW 환율을 찾을 수 없습니다. 응답: ${JSON.stringify(gbpData)}`)
    }

    return NextResponse.json({
      usd: parseFloat(krwRate.toFixed(2)),
      gbp: parseFloat(gbpToKrwRate.toFixed(2)),
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('환율 조회 오류:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '환율을 가져오는데 실패했습니다' },
      { status: 500 }
    )
  }
}
