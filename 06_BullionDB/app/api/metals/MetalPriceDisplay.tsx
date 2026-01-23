'use client'

import { useEffect, useState } from 'react'

// API 응답 데이터 타입 정의
interface MetalData {
  price: number
  change: number
  changePercent: number
  currency: string
  unit: string
}

interface ApiResponse {
  gold: MetalData
  silver: MetalData
  timestamp: string
  error?: string
}

export default function MetalPriceDisplay() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/metals')
        const json = await res.json()

        if (!res.ok) {
          throw new Error(json.error || '데이터를 불러오는데 실패했습니다.')
        }

        setData(json)
      } catch (err) {
        console.error(err)
        setError(err instanceof Error ? err.message : '알 수 없는 오류')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className="p-8 text-center text-gray-500 animate-pulse">시세 정보를 불러오는 중...</div>
  if (error) return <div className="p-8 text-center text-red-500 bg-red-50 rounded-lg">오류 발생: {error}</div>
  if (!data) return null

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">실시간 금속 시세</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PriceCard title="Gold (금)" data={data.gold} />
        <PriceCard title="Silver (은)" data={data.silver} />
      </div>
      <div className="mt-4 text-right text-xs text-gray-400">
        기준 시간: {new Date(data.timestamp).toLocaleString()}
      </div>
    </div>
  )
}

function PriceCard({ title, data }: { title: string; data: MetalData }) {
  // 등락에 따른 색상 및 기호 결정
  const isUp = data.change > 0
  const isDown = data.change < 0
  
  // 상승: 초록, 하락: 빨강, 보합: 회색 (글로벌 관례)
  const colorClass = isUp ? 'text-green-600' : isDown ? 'text-red-600' : 'text-gray-600'
  const sign = isUp ? '+' : ''
  const arrow = isUp ? '▲' : isDown ? '▼' : '-'

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-transform hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
        <span className="text-xs font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded">
          {data.currency}/{data.unit}
        </span>
      </div>
      
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold text-gray-900">
          ${data.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>
      </div>

      <div className={`flex items-center mt-2 font-bold ${colorClass}`}>
        <span className="mr-1 text-lg">{arrow}</span>
        <span className="mr-2">{sign}{data.change}</span>
        <span className="text-sm bg-opacity-10 px-2 py-0.5 rounded-full bg-current">
          {sign}{data.changePercent}%
        </span>
      </div>
    </div>
  )
}