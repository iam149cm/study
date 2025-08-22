// utils/useGTM.ts
import { useCallback } from 'react';

type DL = any[];

// SSR/테스트 환경 대비 + 안전한 초기화
function getDataLayer(): DL | null {
  if (typeof window === 'undefined') return null;
  const w = window as any;
  if (!Array.isArray(w.dataLayer)) {
    w.dataLayer = [];
  }
  return w.dataLayer as DL;
}

const useGTM = () => {
  const pushToDataLayer = useCallback((payload: any) => {
    const dl = getDataLayer();
    if (dl) dl.push(payload);
  }, []);

  // 페이지뷰
  const trackPageView = useCallback(
    ({ page_name, page_title }: { page_name: string; page_title: string }) => {
      pushToDataLayer({
        event: 'page_view',
        page_name,
        page_title,
      });
    },
    [pushToDataLayer]
  );

  // 버튼 클릭
  const trackButtonClick = useCallback(
    ({
      name,
      category,
      location,
      additionalData,
    }: {
      name: string;
      category: string;
      location?: string;
      additionalData?: Record<string, any>;
    }) => {
      // additionalData는 평탄화해서 함께 push
      pushToDataLayer({
        event: 'button_click',
        name,
        category,
        location,
        ...(additionalData ?? {}),
      });
    },
    [pushToDataLayer]
  );

  // 커스텀 이벤트
  const trackCustomEvent = useCallback(
    (eventName: string, data?: Record<string, any>) => {
      pushToDataLayer({
        event: eventName,
        ...(data ?? {}),
      });
    },
    [pushToDataLayer]
  );

  return { trackPageView, trackButtonClick, trackCustomEvent };
};

export default useGTM;
