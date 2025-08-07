export type Question = {
  id: number;
  question: string;
  options: {
    [key: string]: string;
  };
  answer: string | string[];
  explanation: string;
  shuffledOptions?: { [key: string]: string };  // 섞인 선택지를 저장할 필드
  shuffledAnswer?: string | string[];  // 섞인 선택지에 맞춘 정답을 저장할 필드
};

export const questionsAD0E209: Question[] = [
  {
    id: 1,
    question: "Which of the following is the most advanced method for implementing Adobe Analytics in a Single Page Application (SPA)?",
    options: {
      A: "Using s.t() for every page view",
      B: "Using s.tl() for link tracking only",
      C: "Using the Experience Platform Web SDK with XDM schema",
      D: "Using the legacy AppMeasurement.js library"
    },
    answer: "C",
    explanation: "Experience Platform Web SDK와 XDM 스키마를 사용하는 것이 SPA에서 가장 고급 구현 방법입니다. 이는 실시간 데이터 수집, 향상된 개인정보 보호, 그리고 Adobe Experience Platform과의 통합을 제공합니다."
  },
  {
    id: 2,
    question: "What is the purpose of the Adobe Analytics Data Collection API (Edge Network)?",
    options: {
      A: "To collect data from mobile apps only",
      B: "To provide real-time data processing and routing",
      C: "To replace all existing tracking methods",
      D: "To reduce server costs"
    },
    answer: "B",
    explanation: "Adobe Analytics Data Collection API (Edge Network)는 실시간 데이터 처리 및 라우팅을 제공합니다. 이를 통해 데이터를 여러 Adobe 솔루션으로 동시에 전송하고, 실시간 개인화 및 세그멘테이션을 가능하게 합니다."
  },
  {
    id: 3,
    question: "Which of the following is NOT a valid use case for Adobe Analytics Data Workbench?",
    options: {
      A: "Advanced attribution modeling",
      B: "Real-time data visualization",
      C: "Complex data mining and discovery",
      D: "Basic page view tracking"
    },
    answer: "D",
    explanation: "Data Workbench는 고급 분석 도구로, 복잡한 데이터 마이닝, 고급 속성 모델링, 실시간 데이터 시각화에 사용됩니다. 기본적인 페이지 뷰 추적은 일반 Adobe Analytics에서 처리됩니다."
  },
  {
    id: 4,
    question: "What is the difference between Adobe Analytics and Adobe Customer Journey Analytics?",
    options: {
      A: "Customer Journey Analytics is only for mobile apps",
      B: "Customer Journey Analytics provides cross-channel data analysis",
      C: "Adobe Analytics is more expensive",
      D: "There is no difference"
    },
    answer: "B",
    explanation: "Adobe Customer Journey Analytics는 크로스 채널 데이터 분석을 제공하여 웹, 모바일, 오프라인 등 모든 채널에서의 고객 여정을 통합적으로 분석할 수 있습니다. 이는 Adobe Analytics의 고급 버전입니다."
  },
  {
    id: 5,
    question: "Which of the following is the correct way to implement server-side tracking with Adobe Analytics?",
    options: {
      A: "Using the Data Insertion API",
      B: "Using only client-side JavaScript",
      C: "Using Google Analytics",
      D: "Using the Experience Platform Web SDK"
    },
    answer: "A",
    explanation: "Adobe Analytics의 서버 사이드 추적은 Data Insertion API를 사용하여 구현됩니다. 이를 통해 클라이언트 사이드 추적의 한계를 극복하고, 더 정확하고 안전한 데이터 수집이 가능합니다."
  },
  {
    id: 6,
    question: "What is the purpose of Adobe Analytics Data Feeds?",
    options: {
      A: "To display real-time dashboards",
      B: "To export raw hit-level data for custom analysis",
      C: "To create automated reports",
      D: "To track mobile app usage"
    },
    answer: "B",
    explanation: "Adobe Analytics Data Feeds는 원시 히트 레벨 데이터를 내보내서 사용자 정의 분석을 수행할 수 있게 해줍니다. 이를 통해 Adobe Analytics 인터페이스에서 제공하지 않는 고급 분석이 가능합니다."
  },
  {
    id: 7,
    question: "Which of the following is the most secure method for implementing Adobe Analytics in a healthcare application?",
    options: {
      A: "Using third-party cookies",
      B: "Using server-side tracking with data governance",
      C: "Using client-side tracking only",
      D: "Using Google Analytics"
    },
    answer: "B",
    explanation: "헬스케어 애플리케이션에서는 서버 사이드 추적과 데이터 거버넌스를 사용하는 것이 가장 안전합니다. 이를 통해 HIPAA 규정을 준수하고 민감한 데이터를 보호할 수 있습니다."
  },
  {
    id: 8,
    question: "What is the purpose of Adobe Analytics Processing Rules?",
    options: {
      A: "To create custom reports",
      B: "To modify data before it is processed and stored",
      C: "To export data to external systems",
      D: "To track mobile app events"
    },
    answer: "B",
    explanation: "Adobe Analytics Processing Rules는 데이터가 처리되고 저장되기 전에 데이터를 수정하는 데 사용됩니다. 이를 통해 데이터 정제, 변환, 표준화를 수행할 수 있습니다."
  },
  {
    id: 9,
    question: "Which of the following is NOT a valid Adobe Analytics implementation for mobile apps?",
    options: {
      A: "Adobe Analytics Mobile SDK",
      B: "Experience Platform Mobile SDK",
      C: "Web SDK in WebView",
      D: "Google Analytics for Firebase"
    },
    answer: "D",
    explanation: "Google Analytics for Firebase는 Adobe Analytics의 구현 방법이 아닙니다. Adobe Analytics는 자체 Mobile SDK, Experience Platform Mobile SDK, 또는 WebView에서 Web SDK를 사용합니다."
  },
  {
    id: 10,
    question: "What is the purpose of Adobe Analytics Data Sources?",
    options: {
      A: "To import external data into Adobe Analytics",
      B: "To export data to external systems",
      C: "To create custom dimensions",
      D: "To track offline events"
    },
    answer: "A",
    explanation: "Adobe Analytics Data Sources는 외부 데이터를 Adobe Analytics로 가져오는 데 사용됩니다. 이를 통해 CRM 데이터, 오프라인 데이터, 서드파티 데이터를 Adobe Analytics와 통합할 수 있습니다."
  },
  {
    id: 11,
    question: "Which of the following is the most advanced method for implementing A/B testing with Adobe Analytics?",
    options: {
      A: "Using Google Optimize",
      B: "Using Adobe Target with Analytics for Target",
      C: "Using manual JavaScript tracking",
      D: "Using third-party tools"
    },
    answer: "B",
    explanation: "Adobe Target과 Analytics for Target을 함께 사용하는 것이 가장 고급 A/B 테스팅 방법입니다. 이를 통해 실시간 개인화, 고급 타겟팅, 그리고 상세한 분석이 가능합니다."
  },
  {
    id: 12,
    question: "What is the purpose of Adobe Analytics Calculated Metrics?",
    options: {
      A: "To create custom dimensions",
      B: "To combine existing metrics into new formulas",
      C: "To export data",
      D: "To track mobile events"
    },
    answer: "B",
    explanation: "Adobe Analytics Calculated Metrics는 기존 지표들을 새로운 공식으로 조합하는 데 사용됩니다. 이를 통해 비즈니스에 특화된 고급 지표를 생성할 수 있습니다."
  },
  {
    id: 13,
    question: "Which of the following is the correct way to implement cross-domain tracking in Adobe Analytics?",
    options: {
      A: "Using different tracking codes for each domain",
      B: "Using the same tracking code with cross-domain configuration",
      C: "Using Google Analytics",
      D: "Using separate report suites"
    },
    answer: "B",
    explanation: "크로스 도메인 추적은 동일한 추적 코드를 사용하면서 크로스 도메인 설정을 구성하여 구현합니다. 이를 통해 여러 도메인에서의 사용자 여정을 연속적으로 추적할 수 있습니다."
  },
  {
    id: 14,
    question: "What is the purpose of Adobe Analytics Data Connectors?",
    options: {
      A: "To connect to external databases",
      B: "To integrate with third-party platforms and export data",
      C: "To create custom reports",
      D: "To track mobile app usage"
    },
    answer: "B",
    explanation: "Adobe Analytics Data Connectors는 서드파티 플랫폼과 통합하고 데이터를 내보내는 데 사용됩니다. 이를 통해 Google Ads, Facebook, Salesforce 등과의 데이터 동기화가 가능합니다."
  },
  {
    id: 15,
    question: "Which of the following is the most advanced method for implementing real-time analytics with Adobe Analytics?",
    options: {
      A: "Using Real-Time reports only",
      B: "Using Real-Time API with custom dashboards",
      C: "Using Google Analytics Real-Time",
      D: "Using manual data collection"
    },
    answer: "B",
    explanation: "Adobe Analytics Real-Time API와 커스텀 대시보드를 사용하는 것이 가장 고급 실시간 분석 방법입니다. 이를 통해 실시간 데이터를 커스터마이징하고 고급 시각화를 구현할 수 있습니다."
  }
]; 