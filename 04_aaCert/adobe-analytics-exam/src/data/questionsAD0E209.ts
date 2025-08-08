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
  },
  {
    id: 41,
    question: "Your company recently migrated its e-commerce site to a Single Page Application (SPA) built with React, using the AEP Web SDK for Analytics. Product detail content is loaded asynchronously via XHR after the route changes, but analysts report that page view counts in Workspace are 25% lower than expected. Investigation shows that the 'view' event is fired on every route change without verifying that the product data is fully loaded. Which approach ensures accurate view tracking without inflating counts?",
    options: {
      A: "Send a view event immediately on every route change regardless of data readiness",
      B: "Dispatch a custom event after the product data has fully hydrated, then call 'sendEvent({type:\"view\"})'",
      C: "Introduce a fixed 2-second delay before calling 'sendEvent' on every route change",
      D: "Rely solely on DOMContentLoaded for both initial and subsequent views"
    },
    answer: "B",
    explanation: "SPA 환경에서는 화면 전환과 데이터 로드 타이밍이 불일치할 수 있습니다. 데이터 하이드레이션이 완료되는 시점(커스텀 이벤트)에 맞춰 view 이벤트를 호출해야 누락과 중복을 모두 방지할 수 있습니다."
  },
  {
    id: 42,
    question: "A global retail site migrated from AppMeasurement to the AEP Web SDK. After migration, the Marketing Channels report shows unexpected attribution shifts because campaign query parameters are now captured at a different timing than before. Legacy implementation used custom query param mapping via s.campaign. The marketing team wants the channel attribution model to remain consistent across historical and new data. Which solution should you implement?",
    options: {
      A: "Disable Marketing Channels to avoid mismatches",
      B: "Reproduce the legacy query parameter mapping in Processing Rules and validate using a small percentage of staged traffic",
      C: "Use Campaign Classifications to align historical and future data",
      D: "Set all traffic source to 'Direct' for consistency"
    },
    answer: "B",
    explanation: "Web SDK 전환 후 채널 데이터의 캡처 타이밍이 변하면 어트리뷰션이 변동될 수 있습니다. Processing Rules로 기존 매핑을 재현하고 테스트 트래픽으로 비교 검증하는 것이 안전합니다."
  },
  {
    id: 43,
    question: "Two related brand sites on different domains require unified visitor identification for personalization. The current approach loads an embedded iframe on domain B to set ECID before redirecting users from domain A. However, analytics shows that 15% of users are still being counted as two separate visitors across domains. Debug logs reveal that ECID cookies are not always shared. What is the most likely cause?",
    options: {
      A: "Using different report suites",
      B: "Tracking server and cookie domain sharing are not consistently configured across domains",
      C: "Prop variables are disabled in one domain",
      D: "Visit timeout is set too short"
    },
    answer: "B",
    explanation: "크로스 도메인 ECID 공유를 위해서는 트래킹 서버 설정과 쿠키 도메인 공유가 양쪽 도메인에 동일하게 구성되어야 하며, 불일치 시 방문자 식별이 분리됩니다."
  },
  {
    id: 44,
    question: "After implementing IAB TCF v2 consent management, your Analytics data volume dropped sharply for Safari users only. Consent strings are present and valid in the debugger. The site uses a third-party tracking server. Given Safari's Intelligent Tracking Prevention (ITP) restrictions, what is the best fix to restore data collection without violating consent rules?",
    options: {
      A: "Force cookies into third-party mode to bypass ITP",
      B: "Migrate to a first-party CNAME collection setup or use server-side forwarding, ensuring consent checks are respected",
      C: "Disable consent enforcement for Safari users",
      D: "Extend cookie lifetime to 2 years"
    },
    answer: "B",
    explanation: "Safari ITP 환경에서는 3rd-party 쿠키를 차단하므로 1st-party CNAME 방식이나 서버사이드 포워딩으로 전환하고, 동의 상태를 확인해 전송하는 것이 필요합니다."
  },
  {
    id: 45,
    question: "A mobile retail app implemented offline tracking using the AEP Mobile SDK. The app queues hits when offline and sends them with timestamps once the device reconnects. However, Workspace funnels now show steps out of order, breaking conversion analysis. Debug logs show that timestamps are present but the report suite setting has not been adjusted. How can you ensure the sequence of events is preserved?",
    options: {
      A: "Rely only on processing time for ordering",
      B: "Enable 'timestampEnabled' on the report suite and ensure device timestamps are correctly incremented",
      C: "Disable hit batching entirely",
      D: "Create calculated metrics to reorder events"
    },
    answer: "B",
    explanation: "오프라인 이벤트의 순서를 유지하려면 타임스탬프 기반 처리를 활성화해야 하며, 장치에서 시간 값이 연속성을 유지하도록 보장해야 합니다."
  },
  {
    id: 46,
    question: "During an SPA checkout refactor, duplicate purchase events are recorded. The debugger shows the custom purchase event firing once on route change and again when the checkout summary component rehydrates with order data. What is the most effective method to prevent duplicate orders being counted?",
    options: {
      A: "Apply a fixed debounce of 2 seconds to all purchase events",
      B: "Implement a one-time guard based on orderId within the session before firing the event",
      C: "Move the purchase tracking rule to Window Loaded",
      D: "Disable purchase tracking for SPA pages"
    },
    answer: "B",
    explanation: "중복을 방지하려면 주문ID를 기준으로 세션 내 1회성 가드를 적용해 동일 주문에 대해 이벤트를 한 번만 전송하도록 해야 합니다."
  },
  {
    id: 47,
    question: "Your Processing Rule currently copies prop10 (landing page campaign) into eVar10 on every hit. This is overwriting the initial campaign value with unrelated page values after the first page view. Analysts request that campaign attribution persist from the landing page until conversion. How should you modify the Processing Rule?",
    options: {
      A: "Change the action to 'Set if empty' and restrict the rule to execute only on the landing page",
      B: "Keep overwrite for all hits to ensure freshness",
      C: "Append prop10 to eVar10",
      D: "Remove prop10 entirely from tracking"
    },
    answer: "A",
    explanation: "최초 유입 캠페인 값을 유지하려면 최초 페이지에서만 설정하고, 값이 이미 있는 경우 덮어쓰지 않도록 Set if empty 조건을 적용해야 합니다."
  },
  {
    id: 48,
    question: "Your checkout relies on a vendor library to populate the data layer. Occasionally, this library fails to load due to CDN latency, causing missing purchase events. You need to ensure Analytics still receives complete purchase data. What is the most robust pattern?",
    options: {
      A: "Fire purchase events on DOM Ready regardless of data state",
      B: "Use a promise or observer that resolves when the purchase payload is complete, then trigger a direct call rule",
      C: "Wrap vendor library calls in try/catch without changing timing",
      D: "Send purchase events twice to improve reliability"
    },
    answer: "B",
    explanation: "구매 데이터가 준비되는 시점을 보장하기 위해 비동기 완료 시그널(프로미스/옵저버)을 사용하고, 해당 시점에 맞춰 직접 호출하는 방식이 안정적입니다."
  },
  {
    id: 49,
    question: "After enabling Bot Rules and internal IP filtering, overall traffic volume dropped by 40% but revenue remained the same. Initial suspicion is over-filtering. How should you validate and fix this without disrupting bot protection?",
    options: {
      A: "Review Marketing Channel classifications",
      B: "Audit the filter definitions to ensure legitimate VPN/proxy internal users are not being excluded",
      C: "Remove bot rules temporarily",
      D: "Change report suite timezone"
    },
    answer: "B",
    explanation: "필터 정의가 내부 QA, VPN, 프록시 사용자의 합법적 트래픽까지 제외하고 있는지 확인하고, 필요 시 화이트리스트 조정이 필요합니다."
  },
  {
    id: 50,
    question: "Your team migrated Analytics integration for Target and Audience Manager from client-side beacons to Server-Side Forwarding (SSF) using the AEP Web SDK. After deployment, some conversion events stopped appearing in Adobe Analytics, but Target data still shows normally. Investigation reveals that certain variables are being set only after the 'sendEvent' call. What is the most likely cause?",
    options: {
      A: "SSF requires disabling all client-side beacons, causing AA events to be blocked",
      B: "Required Analytics variables and events must be set before the SSF handoff occurs",
      C: "Audience Manager does not support conversion events",
      D: "Target activities overwrite Analytics data when using SSF"
    },
    answer: "B",
    explanation: "SSF는 이벤트를 전달하기 전에 Analytics용 변수가 세팅되어야만 함께 전송됩니다. 핸드오프 이후에 설정하면 AA로 전달되지 않습니다."
  },
  {
    id: 51,
    question: "A retailer uses separate report suites for their web and mobile app properties. Executives request a single, unified view of the customer journey in Workspace, including cross-device pathing. How should you meet this requirement without merging raw data into one report suite?",
    options: {
      A: "Copy all web data into the app suite",
      B: "Leverage Customer Journey Analytics with a shared XDM schema and create a Virtual Report Suite for unified analysis",
      C: "Use a prop to stitch session IDs between platforms",
      D: "Export data to Data Warehouse and join offline"
    },
    answer: "B",
    explanation: "CJA와 공통 XDM 스키마를 사용하면 서로 다른 수트 데이터를 통합 분석할 수 있고, VRS를 통해 경로 분석을 포함한 일관된 뷰를 제공합니다."
  },
  {
    id: 52,
    question: "Your privacy compliance policy mandates that no analytics data be sent until explicit user consent is granted. Currently, some rules in Launch still fire before consent is processed, causing compliance risk. What is the most robust solution?",
    options: {
      A: "Evaluate consent within each rule's condition and block 'sendEvent' calls until consent is true",
      B: "Hide the Debugger tool from end users",
      C: "Set eVars to 'no-consent' until updated",
      D: "Delay all analytics calls by a fixed time after page load"
    },
    answer: "A",
    explanation: "룰 조건과 전송 시점에서 동의 여부를 반드시 검사해 비동의 상태에서는 호출을 막는 것이 가장 안전합니다."
  },
  {
    id: 53,
    question: "Product category hierarchies are managed via SAINT Classifications. Analysts complain that newly launched categories take days to appear correctly in reports, and some SKUs never get categorized. Upon review, uploads are infrequent and contain outdated keys. What is the best remediation?",
    options: {
      A: "Switch entirely to Processing Rules",
      B: "Automate classification uploads with smaller, more frequent batches and validate keys before upload",
      C: "Store categories directly in props instead",
      D: "Disable classifications to avoid delay"
    },
    answer: "B",
    explanation: "소량·빈번 업로드와 키 검증을 통해 지연과 누락을 최소화하는 것이 실무적으로 가장 안정적인 방법입니다."
  },
  {
    id: 54,
    question: "Marketing requests that the last non-direct channel be credited for conversions within a 30-day window. Your current campaign eVar uses 'Most Recent' allocation with 'Visit' expiration. Which configuration meets the requirement?",
    options: {
      A: "Allocation: Most Recent; Expiration: Purchase",
      B: "Allocation: Most Recent; Expiration: 30 days",
      C: "Allocation: Original Value; Expiration: 30 days",
      D: "Allocation: Linear; Expiration: Visit"
    },
    answer: "B",
    explanation: "마지막 클릭 어트리뷰션과 30일 윈도우를 위해 Most Recent/30일 만료 설정이 필요합니다."
  },
  {
    id: 55,
    question: "After migrating to a first-party CNAME tracking setup, the Unique Visitors metric spiked by 60%. The ECID service is enabled. What is the most likely misconfiguration causing this anomaly?",
    options: {
      A: "Too many events are being sent per visitor",
      B: "Tracking server change without migrating ECID cookies, causing cookie scope mismatch",
      C: "Using both eVars and props for visitor ID",
      D: "Multiple libraries included on the same page"
    },
    answer: "B",
    explanation: "트래킹 서버 변경 시 기존 ECID 쿠키 스코프를 유지하지 않으면 동일 방문자가 새로운 방문자로 인식되어 UV 급증이 발생합니다."
  },
  {
    id: 56,
    question: "During checkout, each step fires 'scCheckout' with a step number prop. Analysts observe that steps sometimes appear out of order for fast users on high-latency connections. Data layer values update asynchronously. How can you ensure the sequence is accurate?",
    options: {
      A: "Remove the step number from tracking",
      B: "Persist the step number in an eVar and enforce monotonic increment logic, or use ordered custom events",
      C: "Send all steps only at the final purchase event",
      D: "Increase visit timeout to reduce resets"
    },
    answer: "B",
    explanation: "비동기 상황에서는 이전 값 저장과 순차 증가 로직 또는 순서 보장 이벤트를 사용해야 정확한 단계 순서를 유지할 수 있습니다."
  },
  {
    id: 57,
    question: "You need to exclude most internal QA traffic from Analytics while still keeping a small, controlled sample for validation purposes. The team accesses the site from a range of dynamic IPs. What is the most practical approach?",
    options: {
      A: "Block all internal IPs at the CDN level",
      B: "Set an allow-list cookie for sampled QA sessions and default all others to be excluded",
      C: "Disable Analytics during office hours",
      D: "Filter by User-Agent string only"
    },
    answer: "B",
    explanation: "IP가 변동되는 환경에서는 허용 쿠키로 샘플 트래픽만 포함시키고 기본적으로 제외하는 방식이 효과적입니다."
  },
  {
    id: 58,
    question: "A bug in your checkout tracking caused eVar15 (payment method) to be set to 'undefined' for two weeks. Accurate payment method data exists in the order management system, keyed by orderId. How can you backfill Analytics with the correct values?",
    options: {
      A: "Delete all affected rows from Data Warehouse",
      B: "Use SAINT Classifications or Data Sources to backfill eVar15 using the orderId as the key",
      C: "Retroactively set eVar15 via Processing Rules",
      D: "Reprocess the report suite with updated data"
    },
    answer: "B",
    explanation: "과거 데이터 수정은 Data Sources 또는 Classifications를 통해 키-값 매핑으로 백필하는 것이 현실적입니다."
  },
  {
    id: 59,
    question: "An SPA using the AEP Web SDK sends combined Analytics and Target data via 'sendEvent'. On route changes, Target activities render slowly, causing flicker. How can you improve Target performance without losing Analytics tracking?",
    options: {
      A: "Disable Target for SPA routes",
      B: "Prefetch Target decisions or use 'renderDecisions' immediately after route change, then send a corresponding view event",
      C: "Only track views on first page load",
      D: "Add a 5-second delay before firing 'sendEvent'"
    },
    answer: "B",
    explanation: "Target 지연을 줄이려면 SPA 전환 시 사전 의사결정 로드 또는 즉시 렌더링을 적용하고, 그 후 view 이벤트로 Analytics와 동기화해야 합니다."
  },
  {
    id: 60,
    question: "Your legal team requires compliance with GDPR 'right to be forgotten'. A customer requests deletion of all their data from Adobe Analytics. The ECID and CRM IDs are available. Which solution should you implement?",
    options: {
      A: "Hide the user in Workspace segments",
      B: "Submit a deletion request via Adobe Privacy Service using ECID/namespace mapping",
      C: "Drop all traffic from the user's IP address",
      D: "Remove the user's data from Data Warehouse exports only"
    },
    answer: "B",
    explanation: "법적 삭제를 위해서는 Adobe Privacy Service를 사용해야 하며, ECID와 같은 식별자를 정확히 매핑해 요청 대상 데이터를 삭제해야 합니다."
  }
]; 