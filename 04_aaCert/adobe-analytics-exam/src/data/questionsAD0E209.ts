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
    question: "What is the primary use of Data Elements in Adobe Experience Platform Launch?",
    options: {
      A: "To store campaign metadata",
      B: "To reference dynamic variable values",
      C: "To manage user permissions",
      D: "To analyze report data"
    },
    answer: "B",
    explanation: "Data Element는 Launch에서 변수나 데이터 값을 동적으로 참조하여 다양한 태깅 및 분석에 활용할 수 있도록 해주는 구성 요소입니다."
  },
  {
    id: 2,
    question: "Which variable is used to send eCommerce product data in Adobe Analytics?",
    options: {
      A: "s.campaign",
      B: "s.product",
      C: "s.products",
      D: "s.channel"
    },
    answer: "C",
    explanation: "s.products 변수는 상품명, 카테고리, 수량, 수익 등 전자상거래 관련 데이터를 전송할 때 사용됩니다."
  },
  {
    id: 3,
    question: "How does an eVar differ from a prop variable in Adobe Analytics?",
    options: {
      A: "eVars only store numeric data",
      B: "props persist values across multiple hits, eVars do not",
      C: "eVars persist values across multiple hits, props do not",
      D: "props are for mobile apps only"
    },
    answer: "C",
    explanation: "eVar는 설정된 기간 동안 값을 유지하여 attribution 분석이 가능하지만, prop은 페이지뷰와 같은 단일 히트에서만 값을 기록합니다."
  },
  {
    id: 4,
    question: "What is a Report Suite in Adobe Analytics?",
    options: {
      A: "A visualization tool for reports",
      B: "A data processing engine",
      C: "An aggregated set of collected data for reporting",
      D: "A browser extension"
    },
    answer: "C",
    explanation: "Report Suite는 사이트 또는 앱의 데이터가 수집되고 보고되는 단위로, 특정 데이터 세트별 분석을 위해 사용합니다."
  },
  {
    id: 5,
    question: "Which JavaScript function is used to send a standard page view in Adobe Analytics?",
    options: {
      A: "s.t()",
      B: "s.tl()",
      C: "s.pageview()",
      D: "s.setEvent()"
    },
    answer: "A",
    explanation: "s.t() 함수는 표준 페이지뷰 히트 데이터를 Adobe Analytics 서버로 전송하는 함수입니다."
  },
  {
    id: 6,
    question: "What is the main purpose of Processing Rules?",
    options: {
      A: "To configure dashboards",
      B: "To customize data collection and manipulate variables on data hits",
      C: "To export data to CSV",
      D: "To manage user roles"
    },
    answer: "B",
    explanation: "Processing Rules는 수집된 데이터의 변수 값을 조건에 따라 조정하거나 새로운 값을 입력하도록 처리 규칙을 만드는 기능입니다."
  },
  {
    id: 7,
    question: "Which ID is recommended for cross-Experience Cloud user identification?",
    options: {
      A: "Analytics Visitor ID",
      B: "Marketing Cloud ID (ECID)",
      C: "Session ID",
      D: "Custom Segment ID"
    },
    answer: "B",
    explanation: "Experience Cloud ID(ECID)는 Adobe의 다양한 솔루션 간에 방문자를 통합적으로 식별하는 표준 ID입니다."
  },
  {
    id: 8,
    question: "Which scenario requires cross-domain tracking?",
    options: {
      A: "Tracking page scroll on a single website",
      B: "Analyzing different campaigns on one domain",
      C: "Tracking the same user across multiple domains you own",
      D: "Customizing event serialization"
    },
    answer: "C",
    explanation: "동일 사용자가 여러 도메인(예: brand.com과 shop.com 등)을 이동할 경우, 사용자 이동을 추적하려면 cross-domain tracking이 필요합니다."
  },
  {
    id: 9,
    question: "What does the s.tl() function do in Adobe Analytics?",
    options: {
      A: "Sends a page view hit",
      B: "Sends a link tracking or event hit",
      C: "Clears variable values",
      D: "Delays data transmission"
    },
    answer: "B",
    explanation: "s.tl() 함수는 링크 클릭, 다운로드 등 페이지 이동이 없는 이벤트 발생 시 데이터를 전송할 때 사용합니다."
  },
  {
    id: 10,
    question: "Which tool can directly help debug Adobe Analytics network requests?",
    options: {
      A: "Adobe Experience Platform Auditor",
      B: "Adobe Analytics Debugger",
      C: "Adobe Target Editor",
      D: "Analytics Workspace"
    },
    answer: "B",
    explanation: "Adobe Analytics Debugger는 네트워크 트래픽을 검사하여 Analytics 요청과 데이터 구조를 분석할 수 있도록 도와줍니다."
  },
  {
    id: 11,
    question: "Why is event serialization important in Adobe Analytics?",
    options: {
      A: "To ensure events are counted only once per visit",
      B: "To increase tracking speed",
      C: "To segment users by location",
      D: "To customize variable names"
    },
    answer: "A",
    explanation: "이벤트 시리얼라이제이션은 특정 이벤트(예: 구매)가 중복 집계되지 않도록 고유 값으로 한 번만 카운트하게 만드는 방식입니다."
  },
  {
    id: 12,
    question: "Which three data items are typically required in a Data Layer implementation?",
    options: {
      A: "User agent, event type, network speed",
      B: "Page name, user ID, event name",
      C: "Operating system, browser, IP address",
      D: "Campaign ID, site section, click position"
    },
    answer: "B",
    explanation: "Data Layer에는 분석에 필수적인 페이지 정보, 사용자 식별자, 이벤트명 등이 반드시 포함되어야 합니다."
  },
  {
    id: 13,
    question: "What is an Extension in Adobe Experience Platform Launch?",
    options: {
      A: "A pre-built integration or functionality module",
      B: "A type of report",
      C: "A custom data layer variable",
      D: "A dashboard template"
    },
    answer: "A",
    explanation: "익스텐션은 태그 관리에 필요한 기능(예: Analytics, Target 연동 등)을 사전 패키지로 제공하는 모듈입니다."
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
    explanation: "데이터 커넥터는 Salesforce, Google Ads 등 타 플랫폼과의 데이터 통합 및 내보내기를 위해 사용됩니다."
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
    explanation: "Real-Time API와 커스텀 대시보드는 실시간 데이터 활용의 가장 고급 방식으로, 빠른 데이터 수집과 시각화가 가능합니다."
  },
  {
    id: 16,
    question: "What is Visitor Stitching in Adobe Analytics?",
    options: {
      A: "Combining event data from multiple report suites",
      B: "Merging anonymous and logged-in user data to a single visitor profile",
      C: "Filtering bot traffic",
      D: "Real-time alerting"
    },
    answer: "B",
    explanation: "Visitor Stitching은 익명 사용자가 로그인 등으로 식별 가능한 순간, 두 데이터(비식별/식별)를 하나의 방문자로 병합하는 기능입니다."
  },
  {
    id: 17,
    question: "What does enabling Bot Filtering in Adobe Analytics do?",
    options: {
      A: "Allows bots to be tracked separately",
      B: "Excludes known bot traffic from the reports",
      C: "Increases event sampling rates",
      D: "Disables eVar variables"
    },
    answer: "B",
    explanation: "Bot Filtering을 활성화하면 알려진 봇 트래픽이 분석 보고서 통계에서 제외되어 더욱 정확한 방문자 데이터를 확인할 수 있습니다."
  },
  {
    id: 18,
    question: "Where is Bot Filtering enabled in Adobe Analytics?",
    options: {
      A: "Admin Console",
      B: "Processing Rules",
      C: "Report Suite Setting",
      D: "Workspace"
    },
    answer: "C",
    explanation: "Bot Filtering은 Report Suite 설정 화면에서 활성화할 수 있습니다."
  },
  {
    id: 19,
    question: "What is the main use of the Data Insertion API in Adobe Analytics?",
    options: {
      A: "To generate workspace dashboards",
      B: "To send server-side data for analytics tracking",
      C: "To reset report suite settings",
      D: "To create page load rules"
    },
    answer: "B",
    explanation: "Data Insertion API는 서버 측에서 직접 Analytics 데이터 수집 및 전송이 필요한 경우에 사용됩니다."
  },
  {
    id: 20,
    question: "Which type of hit does not increase the page view count in Adobe Analytics?",
    options: {
      A: "s.t() hits",
      B: "Error tracking hits",
      C: "s.tl() (link tracking) hits",
      D: "Custom event hits"
    },
    answer: "C",
    explanation: "s.tl() 함수로 전송하는 링크 추적 등은 페이지뷰 카운트에 포함되지 않습니다."
  },
  {
    id: 21,
    question: "Which configuration ensures a merchandising eVar persists its value across multiple product views and checkout steps until purchase?",
    options: {
      A: "Allocation: Original Value, Expiration: Hit",
      B: "Allocation: Most Recent, Expiration: Visit",
      C: "Allocation: Original Value, Expiration: Purchase",
      D: "Allocation: Most Recent, Expiration: Page View"
    },
    answer: "C",
    explanation: "구매 완료까지 값을 유지하려면 Allocation을 'Original Value', Expiration을 'Purchase'로 설정해야 합니다. 이렇게 하면 첫 번째 값이 변경되지 않고 유지됩니다."
  },
  {
    id: 22,
    question: "In a single-page application (SPA), which Launch rule event type is most suitable to track dynamic page content changes?",
    options: {
      A: "Page Top",
      B: "Window Loaded",
      C: "Direct Call",
      D: "DOM Ready"
    },
    answer: "C",
    explanation: "SPA에서는 페이지가 새로 로드되지 않기 때문에 'Direct Call' 이벤트를 사용해 데이터가 준비된 시점에 정확히 추적할 수 있습니다."
  },
  {
    id: 23,
    question: "An offline-enabled mobile app sends hits with timestamps. What must be done to ensure these hits are processed correctly?",
    options: {
      A: "Disable lifecycle metrics",
      B: "Ensure timestamps are included and the report suite is timestamp-enabled",
      C: "Set the hits to real-time processing mode",
      D: "Use only online tracking mode"
    },
    answer: "B",
    explanation: "모바일 오프라인 추적에서는 정확한 타임스탬프가 포함되어야 하며, 리포트 수트가 timestamp-enabled 되어야 데이터가 정상 수집됩니다."
  },
  {
    id: 24,
    question: "You are debugging an issue where eVar10 is not persisting between pages. Which configuration is most likely incorrect?",
    options: {
      A: "eVar10 has allocation set to Original Value",
      B: "eVar10 is set with expiration set to Hit",
      C: "eVar10 is set with expiration set to Visit",
      D: "eVar10 is used with processing rules"
    },
    answer: "B",
    explanation: "만약 expiration이 'Hit'으로 설정되어 있다면, 각 페이지마다 값이 초기화되어 지속적으로 유지되지 않기 때문에 문제가 발생할 수 있습니다."
  },
  {
    id: 25,
    question: "Which method allows consistent visitor identification across multiple domains using ECID?",
    options: {
      A: "Use separate tracking servers for each domain",
      B: "Use shared report suites across domains",
      C: "Configure the ECID service for cross-domain tracking",
      D: "Disable cookies on subdomains"
    },
    answer: "C",
    explanation: "ECID 서비스를 cross-domain 트래킹으로 설정하면 여러 도메인에서도 동일 방문자를 식별할 수 있게 됩니다."
  },
  {
    id: 26,
    question: "How should you implement a rule in Adobe Launch to ensure it fires only after digitalData is available?",
    options: {
      A: "Use a custom event after digitalData is populated",
      B: "Use the DOM Ready trigger",
      C: "Add a 2-second delay to the rule",
      D: "Wrap the rule in a try-catch block"
    },
    answer: "A",
    explanation: "digitalData가 완전히 준비된 이후에만 태깅이 실행되도록 보장하려면, custom event를 사용하여 트리거 시점을 직접 제어하는 것이 가장 안전합니다."
  },
  {
    id: 27,
    question: "A Processing Rule overwrites eVar20 on every page. How can you retain the first value instead?",
    options: {
      A: "Use Set if Empty condition",
      B: "Use Append action",
      C: "Change the expiration to Never",
      D: "Remove the Processing Rule"
    },
    answer: "A",
    explanation: "'Set if Empty' 조건을 사용하면 기존 값이 있을 경우 덮어쓰지 않고 유지할 수 있어, 첫 번째 값이 지속적으로 남게 됩니다."
  },
  {
    id: 28,
    question: "Which report suite setting is essential for collecting offline mobile data with timestamps?",
    options: {
      A: "Visitor ID Service enabled",
      B: "Timestamp Enabled",
      C: "Use Custom Namespace",
      D: "Conversion Variable Allocation"
    },
    answer: "B",
    explanation: "타임스탬프 기반 오프라인 데이터를 수집하려면 report suite가 반드시 Timestamp Enabled 상태여야 합니다."
  },
  {
    id: 29,
    question: "You are working with a global client that operates multiple regional websites. Which strategy helps ensure data consistency?",
    options: {
      A: "Use separate Launch properties with different rule names",
      B: "Use a shared Launch property with environment-specific conditions",
      C: "Manually adjust variables for each region",
      D: "Use different tracking servers per region"
    },
    answer: "B",
    explanation: "공통 Launch property를 사용하되 지역 조건에 따라 분기 처리를 하면 유지 관리가 용이하고 데이터 일관성이 유지됩니다."
  },
  {
    id: 30,
    question: "How can you ensure data from Adobe Launch is not collected when user consents are not granted?",
    options: {
      A: "Wrap all tracking code in a try-catch block",
      B: "Use custom code to prevent rule firing without consent",
      C: "Set variables only on DOM Ready",
      D: "Use default rule ordering"
    },
    answer: "B",
    explanation: "동의되지 않은 상태에서 데이터 수집을 차단하려면 consent 상태를 판단하는 로직을 custom code에 넣어 조건적으로 rule이 실행되도록 해야 합니다."
  },
  {
    id: 31,
    question: "Which Adobe tool is used to validate Launch rule execution in real time?",
    options: {
      A: "Experience Platform Debugger",
      B: "Admin Console",
      C: "Customer Journey Analytics",
      D: "Audience Manager"
    },
    answer: "A",
    explanation: "Launch의 태깅 실행 여부나 전송된 데이터를 실시간으로 확인할 수 있는 유틸리티는 Experience Platform Debugger입니다."
  },
  {
    id: 32,
    question: "What is a benefit of using a Data Element in Launch?",
    options: {
      A: "Storing static metadata",
      B: "Capturing user identity permanently",
      C: "Referencing dynamic values consistently",
      D: "Exporting data to CSV"
    },
    answer: "C",
    explanation: "Data Element는 페이지에서 수시로 변할 수 있는 데이터를 일관되게 참조할 수 있도록 해주는 기능입니다."
  },
  {
    id: 33,
    question: "A developer needs to ensure event tracking fires after a modal is closed. What should they use?",
    options: {
      A: "DOM Ready trigger",
      B: "Direct Call Rule",
      C: "Page Bottom trigger",
      D: "Click event on modal open"
    },
    answer: "B",
    explanation: "모달 닫힘과 같은 커스텀 UI 이벤트를 정확히 추적하려면, 특정 시점에 직접 호출할 수 있는 Direct Call Rule을 사용하는 것이 적절합니다."
  },
  {
    id: 34,
    question: "How does Adobe Analytics identify unique visitors across visits?",
    options: {
      A: "Using Report Suite IDs",
      B: "Using ECID from Experience Cloud ID Service",
      C: "Using IP address and User Agent",
      D: "Using s_vi cookie only"
    },
    answer: "B",
    explanation: "ECID(Experience Cloud ID)는 방문자를 브라우저 또는 디바이스 수준에서 고유하게 식별하기 위한 표준 방법입니다."
  },
  {
    id: 35,
    question: "A developer wants to fire an Analytics beacon manually after an AJAX load. What Adobe method should they use?",
    options: {
      A: "s.tl()",
      B: "s.getQueryParam()",
      C: "s.pageName",
      D: "s.clearVars()"
    },
    answer: "A",
    explanation: "AJAX 로딩 후에 수동으로 데이터를 전송하려면 `s.tl()` 메소드를 사용해 이벤트 기반 호출을 수행해야 합니다."
  },
  {
    id: 36,
    question: "Which configuration helps you track different actions (view, click) on the same element separately?",
    options: {
      A: "Use separate eVars",
      B: "Use a prop with multiple values",
      C: "Use custom events with separate rules",
      D: "Use a single processing rule"
    },
    answer: "C",
    explanation: "같은 요소라도 액션 종류(view, click 등)에 따라 다른 이벤트를 부여하고 각각 별도의 규칙으로 구분 추적해야 합니다."
  },
  {
    id: 37,
    question: "What is the impact of using 'Set if empty' in Processing Rules?",
    options: {
      A: "Always overwrites the variable",
      B: "Appends new values to old",
      C: "Only sets the value if it hasn’t been set yet",
      D: "Removes the value after one hit"
    },
    answer: "C",
    explanation: "'Set if empty'는 해당 변수가 비어 있을 때만 값을 설정하기 때문에 기존 값을 유지하고 중복 설정을 방지할 수 있습니다."
  },
  {
    id: 38,
    question: "Which tag management concept allows version control and environment-specific testing?",
    options: {
      A: "Property Publishing",
      B: "Rule Conditions",
      C: "Library Management",
      D: "Data Elements"
    },
    answer: "C",
    explanation: "Library는 개발/스테이징/운영용 환경별로 나눠서 관리할 수 있고, 각 버전에 대한 기록이 남아 태깅 변경 이력을 추적할 수 있습니다."
  },
  {
    id: 39,
    question: "Which is the correct method to pass contextual product data using Adobe Analytics?",
    options: {
      A: "Using prop variables only",
      B: "Passing values in the s.products string",
      C: "Appending to report suite IDs",
      D: "Embedding values in the image request URL only"
    },
    answer: "B",
    explanation: "제품과 관련된 카테고리, 색상 등의 컨텍스트 정보를 전달할 때는 `s.products` 포맷 내에서 eVar 할당 등으로 전송합니다."
  },
  {
    id: 40,
    question: "Which condition might cause duplicate tracking when using Adobe Launch?",
    options: {
      A: "Direct call rules triggered twice",
      B: "Single data element used in multiple rules",
      C: "Multiple rules listening to the same event without exclusion",
      D: "Multiple report suites in a single property"
    },
    answer: "C",
    explanation: "하나의 이벤트에 대해 여러 개의 규칙이 조건 없이 동시에 작동할 경우, 중복 트래킹이 발생할 수 있습니다."
  }
]; 