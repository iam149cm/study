import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiKey = process.env.METALPRICE_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API 키가 설정되지 않았습니다. .env.local 파일에 METALPRICE_API_KEY를 추가해주세요.' },
        { status: 500 }
      )
    }

    // MetalpriceAPI를 사용하여 금(XAU)과 은(XAG) 시세 가져오기
    const url = `https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=USD&currencies=XAU,XAG`
    
    const response = await fetch(url, {
      next: { revalidate: 60 }, // 60초마다 캐시 갱신
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API 응답 오류:', response.status, errorText)
      throw new Error(`API 요청 실패: ${response.status} - ${errorText}`)
    }

    const data = await response.json()

    // API 응답 디버깅을 위한 로그 (개발 환경에서만)
    if (process.env.NODE_ENV === 'development') {
      console.log('MetalpriceAPI 응답:', JSON.stringify(data, null, 2))
    }

    if (!data.success) {
      throw new Error(data.error?.message || 'API 응답 실패')
    }

    // MetalpriceAPI 응답 형식 확인
    // rates 객체에서 USDXAU, USDXAG 값을 가져옴
    // 실제 응답: { USDXAU: 4803.16..., USDXAG: 95.13... }
    // USDXAU는 이미 1 온스당 USD 가격을 의미합니다 (1 oz = USDXAU USD)
    // 따라서 역수를 계산할 필요가 없습니다
    const goldPricePerOz = data.rates?.USDXAU
    const silverPricePerOz = data.rates?.USDXAG

    if (!goldPricePerOz || !silverPricePerOz) {
      throw new Error(`API 응답 형식 오류: rates가 없습니다. 응답: ${JSON.stringify(data)}`)
    }

    // 값이 유효한지 확인
    if (!isFinite(goldPricePerOz) || !isFinite(silverPricePerOz)) {
      throw new Error(`계산된 가격이 유효하지 않습니다. 금: ${goldPricePerOz}, 은: ${silverPricePerOz}`)
    }

    if (goldPricePerOz <= 0 || silverPricePerOz <= 0) {
      throw new Error(`가격이 0 이하입니다. 금: ${goldPricePerOz}, 은: ${silverPricePerOz}`)
    }

    return NextResponse.json({
      gold: {
        price: parseFloat(goldPricePerOz.toFixed(2)),
        currency: 'USD',
        unit: 'oz',
      },
      silver: {
        price: parseFloat(silverPricePerOz.toFixed(2)),
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
