'use client'

import { useEffect, useState } from 'react'

interface MetalPrice {
  price: number
  currency: string
  unit: string
}

interface ExchangeRate {
  usd: number
  gbp: number
}

export default function Home() {
  const [goldPrice, setGoldPrice] = useState<MetalPrice | null>(null)
  const [silverPrice, setSilverPrice] = useState<MetalPrice | null>(null)
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        // 금속 시세 가져오기 (MetalpriceAPI)
        const metalsResponse = await fetch('/api/metals')
        if (!metalsResponse.ok) {
          const errorData = await metalsResponse.json().catch(() => ({ error: '응답 파싱 실패' }))
          console.error('금속 시세 API 오류:', errorData)
          throw new Error(errorData.error || '금속 시세를 가져오는데 실패했습니다')
        }
        const metalsData = await metalsResponse.json()
        
        // 데이터 유효성 검사
        if (!metalsData.gold || !metalsData.silver) {
          console.error('금속 시세 데이터 형식 오류:', metalsData)
          throw new Error('금속 시세 데이터 형식이 올바르지 않습니다')
        }
        
        if (metalsData.gold.price <= 0 || metalsData.silver.price <= 0) {
          console.error('금속 시세 값이 0 이하:', metalsData)
          throw new Error('금속 시세 값이 유효하지 않습니다')
        }
        
        setGoldPrice(metalsData.gold)
        setSilverPrice(metalsData.silver)

        // 환율 가져오기
        const exchangeResponse = await fetch('/api/exchange-rate')
        if (!exchangeResponse.ok) {
          const errorData = await exchangeResponse.json()
          throw new Error(errorData.error || '환율을 가져오는데 실패했습니다')
        }
        const exchangeData = await exchangeResponse.json()
        setExchangeRate(exchangeData)
      } catch (err) {
        setError(err instanceof Error ? err.message : '데이터를 가져오는데 실패했습니다')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    // 1분마다 데이터 갱신
    const interval = setInterval(fetchData, 60000)

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(price)
  }

  const formatNumber = (num: number, decimals: number = 2) => {
    return new Intl.NumberFormat('ko-KR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(num)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🪙 BullionDB
          </h1>
          <p className="text-gray-600">
            실물 자산 실시간 가치 추적 대시보드
          </p>
        </header>

        {loading && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">데이터를 불러오는 중...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 금 시세 카드 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🥇</span>
                실시간 금 시세
              </h2>
              {goldPrice ? (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">USD/oz</span>
                    <span className="text-2xl font-bold text-yellow-600">
                      ${formatNumber(goldPrice.price)}
                    </span>
                  </div>
                  {exchangeRate && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">GBP/oz</span>
                      <span className="text-2xl font-bold text-yellow-500">
                        £{formatNumber((goldPrice.price * exchangeRate.usd) / exchangeRate.gbp)}
                      </span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">원화 환산 (1oz)</span>
                      <span className="text-lg font-semibold text-gray-900">
                        {exchangeRate && formatPrice(goldPrice.price * exchangeRate.usd)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">그램당 가격</span>
                      <span className="text-lg font-semibold text-gray-900">
                        {exchangeRate && formatPrice((goldPrice.price * exchangeRate.usd) / 31.1035)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">1돈 가격 (3.75g)</span>
                      <span className="text-lg font-semibold text-gray-900">
                        {exchangeRate && formatPrice((goldPrice.price * exchangeRate.usd / 31.1035) * 3.75)}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">데이터 없음</p>
              )}
            </div>

            {/* 은 시세 카드 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🥈</span>
                실시간 은 시세
              </h2>
              {silverPrice ? (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">USD/oz</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${formatNumber(silverPrice.price)}
                    </span>
                  </div>
                  {exchangeRate && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">GBP/oz</span>
                      <span className="text-2xl font-bold text-blue-500">
                        £{formatNumber((silverPrice.price * exchangeRate.usd) / exchangeRate.gbp)}
                      </span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">원화 환산 (1oz)</span>
                      <span className="text-lg font-semibold text-gray-900">
                        {exchangeRate && formatPrice(silverPrice.price * exchangeRate.usd)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">그램당 가격</span>
                      <span className="text-lg font-semibold text-gray-900">
                        {exchangeRate && formatPrice((silverPrice.price * exchangeRate.usd) / 31.1035)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">1돈 가격 (3.75g)</span>
                      <span className="text-lg font-semibold text-gray-900">
                        {exchangeRate && formatPrice((silverPrice.price * exchangeRate.usd / 31.1035) * 3.75)}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">데이터 없음</p>
              )}
            </div>

            {/* 환율 카드 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                실시간 환율
              </h2>
              {exchangeRate ? (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">USD → KRW</span>
                    <span className="text-2xl font-bold text-green-600">
                      ₩{formatNumber(exchangeRate.usd)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <span className="text-gray-600">GBP → KRW</span>
                    <span className="text-2xl font-bold text-purple-600">
                      ₩{formatNumber(exchangeRate.gbp)}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">데이터 없음</p>
              )}
            </div>
          </div>
        )}

        {/* 자산 리스트 영역 (추후 구현) */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            보유 자산
          </h2>
          <p className="text-gray-500 text-center py-8">
            자산 관리 기능은 곧 추가될 예정입니다.
          </p>
        </div>
      </div>
    </main>
  )
}
