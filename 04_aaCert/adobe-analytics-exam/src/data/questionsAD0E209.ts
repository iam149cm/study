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
  },
  {
    id: 61,
    question: "Which Adobe Experience Platform component builds unified customer profiles from multiple sources?",
    options: {
      A: "Identity Graph",
      B: "Data Lake",
      C: "Adobe Audience Manager",
      D: "Tag Manager"
    },
    answer: "A",
    explanation: "여러 데이터 소스를 통해 고객 프로필을 통합 생성하는 기능은 Identity Graph가 담당합니다."
  },
  {
    id: 62,
    question: "What does the 'sendEvent' API do in AEP Web SDK?",
    options: {
      A: "Sends combined data to Adobe Edge Network",
      B: "Creates a local JSON file",
      C: "Deletes customer records",
      D: "Disables decisions rendering"
    },
    answer: "A",
    explanation: "sendEvent는 Analytics, Target 등 여러 Adobe 서비스로 데이터를 통합 전송합니다."
  },
  {
    id: 63,
    question: "A user requests deletion under GDPR. Which identifier should you use for Adobe Privacy Service deletion?",
    options: {
      A: "IP address",
      B: "ECID or CRM ID",
      C: "Country code",
      D: "Device type"
    },
    answer: "B",
    explanation: "GDPR 삭제 요청 시 ECID, CRM ID와 같이 개인 식별할 수 있는 값을 Adobe Privacy Service에 제출해야 합니다."
  },
  {
    id: 64,
    question: "What is the recommended way to reduce Target flicker in SPA?",
    options: {
      A: "Add extra redirects",
      B: "Prefetch or immediately render Target decisions after route change, then send view event for Analytics",
      C: "Disable Target for all routes",
      D: "Ignore flicker issues"
    },
    answer: "B",
    explanation: "SPA에서 전환 시 Target 결정 사전 로딩 또는 즉시 렌더 후 view 이벤트 발송이 성능 개선에 효과적입니다."
  },
  {
    id: 65,
    question: "In AEP, what does the Real-Time Customer Data Platform (RTCDP) enable?",
    options: {
      A: "Video hosting",
      B: "Personalized experiences via real-time segmentation",
      C: "FTP data transfer",
      D: "Serverless compute"
    },
    answer: "B",
    explanation: "RTCDP는 실시간 세분화를 통해 맞춤 경험을 제공하는 데 사용됩니다."
  },
  {
    id: 66,
    question: "Which file format is NOT typically supported for ingestion into AEP?",
    options: {
      A: "CSV",
      B: "JSON",
      C: "MP3",
      D: "XML"
    },
    answer: "C",
    explanation: "MP3와 같은 오디오 포맷은 데이터 분석 목적의 인제션에 지원되지 않습니다."
  },
  {
    id: 67,
    question: "What is one key benefit of migrating from AppMeasurement.js to AEP Web SDK?",
    options: {
      A: "Slower load times",
      B: "Unified and faster data collection",
      C: "No need for consent management",
      D: "Disables Analytics tracking"
    },
    answer: "B",
    explanation: "Web SDK는 여러 Adobe 서비스를 통합하고 웹사이트 성능을 높여줍니다."
  },
  {
    id: 68,
    question: "How does AEP Web SDK improve privacy compliance?",
    options: {
      A: "No privacy support",
      B: "Built-in consent management and edge processing",
      C: "Tracks users without consent",
      D: "Stores data only locally"
    },
    answer: "B",
    explanation: "Web SDK는 동의 기반 데이터 처리 및 엣지 네트워크 관리가 내장되어 있어 GDPR 등 규제 준수를 쉽게 합니다."
  },
  {
    id: 69,
    question: "Which element speeds up route change personalization in SPAs using Target?",
    options: {
      A: "Delayed sendEvent",
      B: "Immediate renderDecisions",
      C: "Ignoring Analytics tracking",
      D: "Manual page reload"
    },
    answer: "B",
    explanation: "renderDecisions를 즉시 호출하면 SPA 내 라우트 변경 시 Target 액티비티의 지연을 최소화할 수 있습니다."
  },
  {
    id: 70,
    question: "To be GDPR compliant, which step is required for data erasure?",
    options: {
      A: "Manually filter client hits in Segments",
      B: "Submit API request through Adobe Privacy Service",
      C: "Keep all records for analytics accuracy",
      D: "Export data to third-party DMP"
    },
    answer: "B",
    explanation: "Adobe Privacy Service를 통해 해당 고객 식별자의 삭제 API 요청이 GDPR 준수를 위해 필수입니다."
  },
  {
    id: 71,
    question: "Which feature of AEP helps unify identifiers across sources?",
    options: {
      A: "Identity Graph",
      B: "Data Science Workspace",
      C: "Report Builder",
      D: "Experience Events"
    },
    answer: "A",
    explanation: "Identity Graph는 여러 소스의 고객 식별자를 통합하는 데 사용됩니다."
  },
  {
    id: 72,
    question: "Which namespace would typically be processed for deletion in Privacy Service?",
    options: {
      A: "Email",
      B: "ECID",
      C: "IP Range",
      D: "Device Type"
    },
    answer: "B",
    explanation: "ECID는 Adobe Privacy Service에서 고객 데이터 삭제의 기준 식별자입니다."
  },
  {
    id: 73,
    question: "What is a recommended approach for reducing duplicate Analytics hits in a SPA?",
    options: {
      A: "Track only initial page load views",
      B: "Track each route change as a separate view event",
      C: "Never send view events after navigation",
      D: "Send events only for external links"
    },
    answer: "B",
    explanation: "SPA에서는 각 라우트 변경마다 view 이벤트를 별도로 보내야 중복 히트 발생을 방지할 수 있습니다."
  },
  {
    id: 74,
    question: "Which approach helps maintain GDPR compliance across Adobe platforms?",
    options: {
      A: "Submit requests via Privacy Service API",
      B: "Delete local cookies only",
      C: "Inform users about data retention",
      D: "Export all tracking logs"
    },
    answer: "A",
    explanation: "개인정보 삭제 등 GDPR 처리 요구 사항을 API를 통해 Privacy Service로 요청하는 것이 표준 방식입니다."
  },
  {
    id: 75,
    question: "What is the main role of the Adobe Edge Network in Web SDK?",
    options: {
      A: "Local data storage",
      B: "Routing and processing unified requests",
      C: "Replacing customer CRM",
      D: "Disabling privacy controls"
    },
    answer: "B",
    explanation: "Edge Network는 Web SDK를 통해 들어온 트래킹 요청을 빠르게 처리하고 각 서비스로 전달합니다."
  },
  {
    id: 76,
    question: "If a SPA page flickers after each route change, what should you check first?",
    options: {
      A: "Route configuration",
      B: "Target decision timing and rendering",
      C: "Browser consent settings",
      D: "Email campaign tracking"
    },
    answer: "B",
    explanation: "SPA에서 flicker가 발생하면 Target 의사결정 로딩 및 렌더링 타이밍을 먼저 점검해야 합니다."
  },
  {
    id: 77,
    question: "Which Adobe service enables automated response to GDPR requests?",
    options: {
      A: "Privacy Service",
      B: "Target",
      C: "Audience Manager",
      D: "Data Lake"
    },
    answer: "A",
    explanation: "Privacy Service는 GDPR 접근/삭제 등 자동화 요청을 처리하는 Adobe 공식 서비스입니다."
  },
  {
    id: 78,
    question: "How can you improve tagging performance on high-traffic sites using AEP?",
    options: {
      A: "Use multiple separate SDKs",
      B: "Consolidate tracking with Web SDK",
      C: "Disable Analytics for large audiences",
      D: "Delay all tracking events"
    },
    answer: "B",
    explanation: "Web SDK는 여러 Adobe 서비스를 하나의 요청으로 통합해 성능을 향상시킵니다."
  },
  {
    id: 79,
    question: "What action should be taken to fulfill a CCPA deletion request in AEP?",
    options: {
      A: "Activate Privacy Service",
      B: "Send separate data export",
      C: "Email support team",
      D: "Delete only cookies"
    },
    answer: "A",
    explanation: "AEP의 CCPA 요청은 Privacy Service를 통해 해당 고객 정보 삭제를 자동 처리해야 합니다."
  },
  {
    id: 80,
    question: "Which is true about AEP Web SDK consent management?",
    options: {
      A: "Consent checks occur before data transmission",
      B: "Consent is ignored for first-party cookies",
      C: "Consent is managed only for mobile apps",
      D: "Consent settings are handled server-side only"
    },
    answer: "A",
    explanation: "Web SDK는 데이터 전송 전에 반드시 동의여부를 점검해 규정 준수 및 고객 프라이버시를 보장합니다."
  },
  {
    id: 81,
    question: "You are implementing AEP Web SDK on a retail SPA. After navigating between product pages, you notice the same product view event is fired twice. How should you fix this?",
    options: {
      A: "Remove view event tracking on route change",
      B: "Trigger view events only after a new route is fully rendered and product data changes",
      C: "Disable analytics for product pages",
      D: "Send events only on first page load"
    },
    answer: "B",
    explanation: "SPA에서는 각 라우트 변경 후 데이터가 렌더링되고 실제 변화가 있을 때 view 이벤트를 발송해야 중복 추적을 방지할 수 있습니다."
  },
  {
    id: 82,
    question: "While integrating Adobe Target with AEP Web SDK, your marketing team complains about visible flicker on banner updates in SPA route changes. What should you do?",
    options: {
      A: "Use prefetch decisions before route changes and immediately apply renderDecisions afterwards",
      B: "Delay route rendering by 3 seconds",
      C: "Disable Target in SPA views",
      D: "Reduce banner size"
    },
    answer: "A",
    explanation: "Target 성능 최적화를 위해 SPA 전환 전 결정을 미리 받아두고, 전환 직후 renderDecisions를 실행하면 깜빡임 현상을 줄일 수 있습니다."
  },
  {
    id: 83,
    question: "A customer submits a CCPA data deletion request. You have their ECID and email. What is the correct process in AEP?",
    options: {
      A: "Delete cookies manually from the browser",
      B: "Submit a Privacy Service deletion request with ECID and correct namespace mapping",
      C: "Export their data to CSV and remove it locally",
      D: "Block their IP in the firewall"
    },
    answer: "B",
    explanation: "CCPA 준수를 위해 Adobe Privacy Service API에 ECID와 네임스페이스 매핑 정보를 포함해 삭제 요청을 제출해야 합니다."
  },
  {
    id: 84,
    question: "Your SPA sends Target and Analytics data together via Web SDK. After a promotional banner campaign went live, Analytics tracking remained correct but banners were delayed. How can you improve Target load time?",
    options: {
      A: "Track Analytics only once per session",
      B: "Trigger renderDecisions immediately after route load before tracking view events",
      C: "Send events every 10 seconds",
      D: "Disable personalization for banners"
    },
    answer: "B",
    explanation: "SPA에서 Target 지연 개선은 우선 의사결정을 렌더링한 뒤 Analytics view 이벤트를 발송하는 순서 최적화로 가능해집니다."
  },
  {
    id: 85,
    question: "You detect that Analytics events from your SPA include old route names. What is the likely cause?",
    options: {
      A: "Events are sent before the route updates in the DOM",
      B: "ECID mismatch",
      C: "Target decisions missing",
      D: "Privacy Service blocking events"
    },
    answer: "A",
    explanation: "라우트 변경이 DOM에 반영되기 전에 이벤트를 전송하면 이전 페이지 이름이 전송될 수 있습니다."
  },
  {
    id: 86,
    question: "During GDPR deletion testing, you notice some user data still appears in Customer Journey Analytics. What's the most probable reason?",
    options: {
      A: "Deletion was requested for the wrong namespace",
      B: "Target campaigns are still active",
      C: "Web SDK does not support deletions",
      D: "Data Lake sync completed successfully"
    },
    answer: "A",
    explanation: "GDPR 삭제 요청 시 ECID 등 올바른 네임스페이스를 사용하지 않으면 사용자 데이터가 완전히 제거되지 않습니다."
  },
  {
    id: 87,
    question: "A travel website uses AEP Web SDK for personalization. After switching to an SPA framework, Target offers often appear after a noticeable delay. What’s the optimal approach?",
    options: {
      A: "Load Target offers only on the home page",
      B: "Use SPA view events and target prefetch",
      C: "Disable content personalization",
      D: "Increase asset cache time"
    },
    answer: "B",
    explanation: "SPA 환경에서는 라우트 전환 시 SPA view 이벤트와 Target 사전 로딩(prefetch)을 병행하면 지연을 줄일 수 있습니다."
  },
  {
    id: 88,
    question: "An e-commerce site using AEP notices that some consent preferences are ignored for repeat visitors. What should you check?",
    options: {
      A: "Consent status persistence in the SDK configuration",
      B: "Target activity names",
      C: "User login frequency",
      D: "CJA data stitching options"
    },
    answer: "A",
    explanation: "반복 방문자에서 동의 상태가 무시되면 SDK 설정에서 동의 상태가 지속(persistence)되도록 구성했는지 확인해야 합니다."
  },
  {
    id: 89,
    question: "You need to capture a purchase event with product details and send it to AEP via Web SDK. Which data structure should you use?",
    options: {
      A: "IdentityMap only",
      B: "XDM schema with commerce.purchase event type and product list",
      C: "Raw string array",
      D: "Custom cookie"
    },
    answer: "B",
    explanation: "구매 이벤트는 commerce.purchase 타입과 제품 리스트가 포함된 XDM 스키마를 사용해 Web SDK로 전송해야 합니다."
  },
  {
    id: 90,
    question: "A retail SPA shows outdated product prices in personalized recommendations after updates. What could be the cause?",
    options: {
      A: "Target decision caching not refreshed",
      B: "ECID regeneration",
      C: "GDPR deletion request pending",
      D: "Analytics queue full"
    },
    answer: "A",
    explanation: "개인화 추천이 오래된 가격을 표시하는 경우 Target 결정 캐시가 갱신되지 않았을 가능성이 큽니다."
  },
  {
    id: 91,
    question: "Your analytics team wants to segment users who have seen a special campaign banner in the last 7 days. Which data should you use?",
    options: {
      A: "Experience Event with campaign impression flag",
      B: "IdentityMap only",
      C: "Privacy Service logs",
      D: "Custom cookie storage"
    },
    answer: "A",
    explanation: "특정 캠페인 배너 노출 여부는 Experience Event 데이터에 플래그를 설정해 세분화할 수 있습니다."
  },
  {
    id: 92,
    question: "In a debugging session, you see that Analytics hits are being sent before consent is granted. How should you fix this?",
    options: {
      A: "Disable consent checking",
      B: "Use setConsent before tracking calls",
      C: "Lower page load time",
      D: "Use POST instead of GET"
    },
    answer: "B",
    explanation: "동의가 주어지기 전에 히트가 전송되지 않도록 setConsent 호출을 먼저 수행해야 합니다."
  },
  {
    id: 93,
    question: "A user opts out of personalization but still receives targeted offers. What is the problem?",
    options: {
      A: "Analytics data retention",
      B: "Target not respecting consent settings",
      C: "XDM schema misconfiguration",
      D: "Expired ECID cookies"
    },
    answer: "B",
    explanation: "개인화 거부에도 타겟팅이 계속된다면 Target 설정에서 동의 상태를 준수하도록 구성되지 않은 것입니다."
  },
  {
    id: 94,
    question: "During SPA route changes, your analytics reports show missing page view data. Which fix should you apply?",
    options: {
      A: "Add view events for each SPA navigation",
      B: "Send data only on first page load",
      C: "Disable SPA routing",
      D: "Use static HTML pages"
    },
    answer: "A",
    explanation: "SPA에서는 라우트 변경 시마다 view 이벤트를 발송해야 빠진 페이지뷰 데이터를 방지할 수 있습니다."
  },
  {
    id: 95,
    question: "Your marketing analyst reports that CJA shows two identities for the same customer. How can you unify them?",
    options: {
      A: "Use Identity Graph to map the identifiers",
      B: "Delete one identifier",
      C: "Request Privacy Service for merge",
      D: "Block duplicate records"
    },
    answer: "A",
    explanation: "Identity Graph를 통해 서로 다른 식별자를 같은 사람으로 매핑해 CJA에서 통합할 수 있습니다."
  },
  {
    id: 96,
    question: "Your sales team wants product recommendations based on real-time behavior. Which AEP feature should you use?",
    options: {
      A: "Real-Time Customer Data Platform",
      B: "Data Lake",
      C: "Privacy Service",
      D: "Report Builder"
    },
    answer: "A",
    explanation: "RTCDP를 통해 실시간 행동 기반으로 제품 추천을 제공할 수 있습니다."
  },
  {
    id: 97,
    question: "You migrate from AppMeasurement to Web SDK and notice faster page loads but missing campaign parameters. What should you check?",
    options: {
      A: "Query string capture in XDM schema mapping",
      B: "Target activities sync",
      C: "Privacy Service status",
      D: "Local cache settings"
    },
    answer: "A",
    explanation: "캠페인 파라미터가 누락되면 XDM 스키마 매핑에서 쿼리스트링 캡처가 설정되어 있는지 확인해야 합니다."
  },
  {
    id: 98,
    question: "You need to implement GDPR access requests for all customer data in AEP. Which approach is correct?",
    options: {
      A: "Use Privacy Service access requests with all linked namespaces",
      B: "Send CSV exports to the requester",
      C: "Delete the customer's data",
      D: "Use IP-based filtering"
    },
    answer: "A",
    explanation: "GDPR 접근 요청 시 연결된 모든 네임스페이스로 Privacy Service 접근 요청을 수행해야 합니다."
  },
  {
    id: 99,
    question: "Your personalization campaign in Target is not applying for users coming from a mobile app deep link. What’s the likely cause?",
    options: {
      A: "Missing SPA view event on deep link load",
      B: "ECID duplication",
      C: "Privacy Service active",
      D: "AEP schema version mismatch"
    },
    answer: "A",
    explanation: "모바일 딥링크로 진입 시 SPA view 이벤트가 누락되면 타겟팅이 적용되지 않습니다."
  },
  {
    id: 100,
    question: "A video streaming site using AEP sees performance issues on high-traffic events. What’s the best solution?",
    options: {
      A: "Consolidate all tracking into Web SDK single calls",
      B: "Increase server capacity",
      C: "Track events in multiple APIs",
      D: "Disable tracking during peak hours"
    },
    answer: "A",
    explanation: "Web SDK 단일 호출로 여러 추적을 통합하면 대규모 이벤트 트래픽에서도 성능을 개선할 수 있습니다."
  },
  
  {
    id: 101,
    question: "What must be set up in Adobe Analytics for custom event tracking?",
    options: {
      A: "Processing rules",
      B: "Event variables",
      C: "Conversion eVars",
      D: "Traffic sProps"
    },
    answer: "B",
    explanation: "사용자 이벤트 추적을 위해서는 이벤트 변수를 정의하고 설정해야 합니다."
  },
  {
    id: 102,
    question: "What is an advantage of using Data Layer for Adobe Analytics implementation?",
    options: {
      A: "Improved user interface",
      B: "Consistent and reliable data collection",
      C: "Faster browser rendering",
      D: "Automatic variable mapping"
    },
    answer: "B",
    explanation: "데이터 레이어는 일관되고 신뢰할 수 있는 데이터 수집을 가능하게 합니다."
  },
  {
    id: 103,
    question: "Which Adobe tool is primarily used for tag management?",
    options: {
      A: "Audience Manager",
      B: "Experience Platform Launch",
      C: "Report Builder",
      D: "LiveCycle"
    },
    answer: "B",
    explanation: "Adobe Experience Platform Launch는 태그 관리 및 배포에 특화된 도구입니다."
  },
  {
    id: 104,
    question: "Which variable type in Adobe Analytics remains tied to a single visit?",
    options: {
      A: "eVar",
      B: "sProp",
      C: "Event",
      D: "ListVar"
    },
    answer: "B",
    explanation: "sProp은 방문 단위로 값을 기록하므로 여러 페이지 이동 시 연동되지 않습니다."
  },
  {
    id: 105,
    question: "When mapping data to Adobe's XDM schema, what is a key requirement?",
    options: {
      A: "Correct data types for each field",
      B: "Compressed variable names",
      C: "Only string values allowed",
      D: "Duplicate field names"
    },
    answer: "A",
    explanation: "모든 필드에 적합한 데이터 타입 매핑이 반드시 필요합니다."
  },
  {
    id: 106,
    question: "Which extension in Launch helps detect data layer changes?",
    options: {
      A: "Rule Engine",
      B: "Data Layer Manager",
      C: "Privacy Connector",
      D: "Experience Events"
    },
    answer: "B",
    explanation: "Data Layer Manager 확장은 데이터 레이어 변화 감지와 트리거에 사용됩니다."
  },
  {
    id: 107,
    question: "To ensure Analytics tracking works on mobile web, what should be verified?",
    options: {
      A: "Responsive design only",
      B: "AppMeasurement.js loaded correctly",
      C: "Tracking server supports HTTPS",
      D: "User agent string"
    },
    answer: "B",
    explanation: "모바일에서도 AppMeasurement.js의 정상 로딩이 중요합니다."
  },
  {
    id: 108,
    question: "Which setting is required for enabling cross-domain Analytics tracking?",
    options: {
      A: "Unique report suite per domain",
      B: "Visitor ID service",
      C: "Custom tagging rule",
      D: "Separate XDM schema"
    },
    answer: "B",
    explanation: "크로스도메인 추적은 Visitor ID 서비스 적용이 핵심입니다."
  },
  {
    id: 109,
    question: "Which report suite setting allows customizing currency reporting in Analytics?",
    options: {
      A: "Time zone",
      B: "Data retention period",
      C: "Currency code",
      D: "Session length"
    },
    answer: "C",
    explanation: "통화 코드를 지정하면 보고서의 화폐 단위가 맞게 설정됩니다."
  },
  {
    id: 110,
    question: "For real-time segmentation in AEP, which system is used?",
    options: {
      A: "Data Lake",
      B: "RTCDP",
      C: "Processing rules",
      D: "Report Builder"
    },
    answer: "B",
    explanation: "RTCDP(Real-Time Customer Data Platform)는 실시간 세그먼트화에 사용됩니다."
  },
  {
    id: 111,
    question: "Which of the following cannot be configured via the Launch UI?",
    options: {
      A: "Tag firing rules",
      B: "Data elements mapping",
      C: "Custom report suite settings",
      D: "Extension installation"
    },
    answer: "C",
    explanation: "보고서 설정은 Adobe Analytics UI에서 해야 하며 Launch에서는 불가능합니다."
  },
  {
    id: 112,
    question: "What should an Analytics developer do before publishing Launch changes?",
    options: {
      A: "Clear cookies",
      B: "Perform a build audit and staging test",
      C: "Change report suite IDs",
      D: "Disable all extensions"
    },
    answer: "B",
    explanation: "배포 전 빌드 감사 및 스테이징 테스트가 필수입니다."
  },
  {
    id: 113,
    question: "Which Adobe Analytics API allows pulling segmented data programmatically?",
    options: {
      A: "Reporting API v2",
      B: "Experience Events API",
      C: "Privacy Service API",
      D: "Mobile Services API"
    },
    answer: "A",
    explanation: "Reporting API v2가 세그먼트 데이터 등 리포트 추출을 지원합니다."
  },
  {
    id: 114,
    question: "A new variable must be tracked only when a specific button is clicked. Where should this logic be configured in Launch?",
    options: {
      A: "In the extension manifest",
      B: "As a rule with event trigger 'Click'",
      C: "Directly in the data layer",
      D: "Privacy Settings"
    },
    answer: "B",
    explanation: "특정 버튼 클릭에 대한 추적은 Launch Rule에서 'Click' 이벤트로 지정해야 합니다."
  },
  {
    id: 115,
    question: "To debug Analytics beacon issues, which tool is recommended?",
    options: {
      A: "Launch Rule editor",
      B: "Browser Network Inspector",
      C: "Conversion Variable manager",
      D: "Data Layer Logger"
    },
    answer: "B",
    explanation: "네트워크 인스펙터에서 Beacon 호출 및 응답을 디버깅할 수 있습니다."
  },
  {
    id: 116,
    question: "Which Launch feature enables scheduling when tagging rules are active?",
    options: {
      A: "Rule Conditions",
      B: "Library Publishing",
      C: "Data Elements",
      D: "Extension Loader"
    },
    answer: "A",
    explanation: "Rule의 조건(Conditions)을 통해 태그가 작동하는 시점을 제어할 수 있습니다."
  },
  {
    id: 117,
    question: "Which analytics variable tracks the value of a completed transaction?",
    options: {
      A: "event1",
      B: "purchaseID",
      C: "eVar",
      D: "Revenue"
    },
    answer: "D",
    explanation: "Revenue 변수는 구매 금액 등 트랜잭션 값을 기록합니다."
  },
  {
    id: 118,
    question: "What is a common reason for missing Analytics data after go-live?",
    options: {
      A: "Wrong report suite ID",
      B: "Slow internet",
      C: "Changes in CSS selectors",
      D: "Outdated browser cache"
    },
    answer: "A",
    explanation: "잘못된 리포트 슈트 ID 사용 시 데이터가 누락될 수 있습니다."
  },
  {
    id: 119,
    question: "Which method can combine multiple identifiers in the Experience Platform?",
    options: {
      A: "Identity Graph mapping",
      B: "Event concatenation",
      C: "Report suite stitching",
      D: "Custom variable combine"
    },
    answer: "A",
    explanation: "Identity Graph는 여러 고객 식별자를 통합합니다."
  },
  {
    id: 120,
    question: "Before migrating from AppMeasurement.js to Web SDK, which check is most important?",
    options: {
      A: "Consent configuration compatibility",
      B: "HTML doctype declaration",
      C: "Mobile screen resolution",
      D: "Image compression settings"
    },
    answer: "A",
    explanation: "Web SDK 마이그레이션 전 동의 설정 호환성 검토가 매우 중요합니다."
  },
  {
    id: 121,
    question: "When implementing Adobe Experience Platform Web SDK, what is the primary purpose of the 'configure' command?",
    options: {
      A: "To define report suite mappings",
      B: "To set up edge domain, datastream ID, and configuration options",
      C: "To initialize Processing Rules",
      D: "To configure Workspace permissions"
    },
    answer: "B",
    explanation: "Web SDK의 configure 명령은 datastream ID, edge 도메인, privacy 설정 등 핵심 구성을 지정하여 SDK가 데이터를 Adobe Edge Network로 전송할 수 있도록 준비합니다."
  },
  {
    id: 122,
    question: "In Adobe Analytics, what happens if an eVar is set with 'Visit' expiration?",
    options: {
      A: "The value persists only until the next hit",
      B: "The value persists across all hits within the same visit",
      C: "The value is permanent until cleared manually",
      D: "The value persists across multiple visits"
    },
    answer: "B",
    explanation: "eVar가 'Visit' 만료로 설정되면 방문(session) 동안 모든 히트에 해당 값이 유지됩니다. 새로운 방문이 시작되면 값은 자동으로 만료됩니다."
  },
  {
    id: 123,
    question: "Which Adobe Analytics variable is specifically used to measure internal campaigns?",
    options: {
      A: "eVar1",
      B: "s.campaign",
      C: "s.channel",
      D: "s.campaign_internal"
    },
    answer: "B",
    explanation: "s.campaign은 일반적으로 외부 캠페인뿐만 아니라 내부 캠페인을 추적하는 데에도 사용됩니다. Processing Rules나 Classifications을 활용하여 Internal/External을 구분할 수 있습니다."
  },
  {
    id: 124,
    question: "Which tool allows you to debug Web SDK network calls in the browser?",
    options: {
      A: "Adobe Debugger extension",
      B: "Launch Property Editor",
      C: "Processing Rules Manager",
      D: "Report Suite Editor"
    },
    answer: "A",
    explanation: "Adobe Experience Platform Debugger 확장은 브라우저에서 Web SDK 및 AppMeasurement 요청을 모니터링하고 디버깅하는 핵심 도구입니다."
  },
  {
    id: 125,
    question: "What is the impact of enabling 'Timestamp Required' in a report suite?",
    options: {
      A: "All hits must include a timestamp or they will be discarded",
      B: "Timestamps are ignored, and data is processed in real time",
      C: "Data is delayed until timestamps are processed",
      D: "It allows backdated hits automatically"
    },
    answer: "A",
    explanation: "Timestamp Required 옵션이 켜진 Report Suite는 모든 서버콜에 timestamp 필드가 반드시 포함되어야 합니다. 그렇지 않으면 데이터가 수집되지 않습니다."
  },
  {
    id: 126,
    question: "Which Adobe Analytics API is most commonly used to programmatically extract Workspace data?",
    options: {
      A: "Data Insertion API",
      B: "1.4 Reporting API",
      C: "2.0 Analytics Reporting API",
      D: "Bulk Data Insertion API"
    },
    answer: "C",
    explanation: "2.0 Analytics Reporting API는 Analysis Workspace 쿼리를 기반으로 데이터를 추출하는 현대적인 방식입니다. REST 기반 구조와 OAuth 인증을 사용합니다."
  },
  {
    id: 127,
    question: "What is the main difference between 's.products' merchandising syntax and event binding?",
    options: {
      A: "s.products supports eVar binding at product level",
      B: "Event binding does not require syntax",
      C: "s.products only allows numeric events",
      D: "There is no difference"
    },
    answer: "A",
    explanation: "s.products 문자열은 상품 단위로 eVar를 연결할 수 있는 반면, 일반 이벤트 바인딩은 전역 수준에서만 가능합니다."
  },
  {
    id: 128,
    question: "Which feature ensures data is collected even if cookies are disabled by the user?",
    options: {
      A: "Visitor ID Service",
      B: "Experience Cloud ID (ECID)",
      C: "Fallback to first-party server-side forwarding",
      D: "Prop duplication"
    },
    answer: "C",
    explanation: "쿠키가 비활성화된 경우 서버사이드 전송을 통해 데이터를 보완할 수 있습니다. ECID만으로는 쿠키 거부 시 추적이 불가합니다."
  },
  {
    id: 129,
    question: "What is the main purpose of Context Data variables?",
    options: {
      A: "They directly populate eVars",
      B: "They are temporary placeholders mapped via Processing Rules",
      C: "They replace props",
      D: "They store permanent classifications"
    },
    answer: "B",
    explanation: "Context Data는 수집 시점에 임시 보관되는 값으로, Processing Rules를 통해 eVar, prop, event 등에 매핑됩니다."
  },
  {
    id: 130,
    question: "Which command in Web SDK is used to send data to Adobe Edge?",
    options: {
      A: "sendEvent",
      B: "track",
      C: "dispatch",
      D: "capture"
    },
    answer: "A",
    explanation: "Web SDK의 sendEvent 명령은 수집된 데이터를 Adobe Edge Network로 전송합니다."
  },
  {
    id: 131,
    question: "What is the difference between Data Feeds and Data Warehouse in Adobe Analytics?",
    options: {
      A: "Data Feeds provide hit-level raw data, Data Warehouse aggregates",
      B: "Data Feeds are aggregated, Data Warehouse is raw",
      C: "Both are aggregated reports",
      D: "Both provide hit-level raw data"
    },
    answer: "A",
    explanation: "Data Feeds는 완전한 히트 레벨 로그를 제공하지만, Data Warehouse는 변수 조합을 기반으로 집계된 데이터를 제공합니다."
  },
  {
    id: 132,
    question: "Which Adobe Launch feature allows rules to fire after a data layer object becomes available?",
    options: {
      A: "Event Configuration",
      B: "Rule Ordering",
      C: "Custom Event with Conditions",
      D: "Direct Call Rule"
    },
    answer: "D",
    explanation: "Direct Call Rule은 개발자가 특정 dataLayer 준비 시점을 지정하여 Launch rule을 실행하도록 제어할 수 있습니다."
  },
  {
    id: 133,
    question: "What does 'Low-traffic' indicate in Adobe Analytics reports?",
    options: {
      A: "Data loss due to network issues",
      B: "Values exceeding the unique limit for a variable",
      C: "Hits coming from bots",
      D: "Processing Rules not firing"
    },
    answer: "B",
    explanation: "Low-traffic 값은 변수의 고유 값 수가 제한(보통 500,000) 이상일 때 초과된 값들이 묶여서 보고되는 것을 의미합니다."
  },
  {
    id: 134,
    question: "Which variable is recommended for tracking internal search terms?",
    options: {
      A: "s.prop1",
      B: "s.eVar1",
      C: "s.campaign",
      D: "s.pageName"
    },
    answer: "B",
    explanation: "내부 검색어는 보통 eVar로 수집해 지속적인 분석이 가능하도록 구성합니다. prop을 쓰면 단일 히트 분석만 가능합니다."
  },
  {
    id: 135,
    question: "In Adobe Analytics, what is the difference between 'Hit', 'Visit', and 'Visitor' containers in segment definition?",
    options: {
      A: "Hit = page view, Visit = campaign, Visitor = user",
      B: "Hit = single server call, Visit = group of hits in session, Visitor = unique user across sessions",
      C: "They are all identical",
      D: "Visitor container excludes visits"
    },
    answer: "B",
    explanation: "Hit은 서버콜 단위, Visit은 동일 세션의 히트 집합, Visitor는 여러 방문에 걸친 고유 사용자 식별 단위입니다."
  },
  {
    id: 136,
    question: "Which type of variable should be used for pathing analysis?",
    options: {
      A: "eVars",
      B: "props",
      C: "events",
      D: "classifications"
    },
    answer: "B",
    explanation: "Pathing 분석은 props에만 적용됩니다. eVar는 pathing 기능이 지원되지 않습니다."
  },
  {
    id: 137,
    question: "Which method ensures minimal data loss when sending hits from mobile apps?",
    options: {
      A: "Offline tracking with queued hits",
      B: "ECID sharing",
      C: "Prop duplication",
      D: "Multi-suite tagging"
    },
    answer: "A",
    explanation: "모바일 환경에서는 네트워크 불안정으로 전송 실패가 발생할 수 있으므로, SDK에서 오프라인 큐를 활용해 나중에 재전송하도록 하는 것이 중요합니다."
  },
  {
    id: 138,
    question: "What does the 'Link Tracking' configuration in AppMeasurement.js allow?",
    options: {
      A: "Automatic capture of exit, download, and custom links",
      B: "Tracking only campaign links",
      C: "Tracking form submissions",
      D: "Blocking bot traffic"
    },
    answer: "A",
    explanation: "AppMeasurement의 Link Tracking은 사용자가 클릭하는 exit 링크, 다운로드, 사용자 정의 링크를 자동으로 수집합니다."
  },
  {
    id: 139,
    question: "What is the purpose of 'Processing Rules' in Adobe Analytics?",
    options: {
      A: "To filter bot traffic",
      B: "To map context data to eVars/props/events",
      C: "To classify variables",
      D: "To schedule data feeds"
    },
    answer: "B",
    explanation: "Processing Rules는 수집된 contextData 변수를 Analytics 변수로 매핑하거나 조건부 로직을 통해 데이터를 가공하는 기능입니다."
  },
  {
    id: 140,
    question: "Which metric would you use to measure success events such as purchases?",
    options: {
      A: "eVar",
      B: "event",
      C: "prop",
      D: "classification"
    },
    answer: "B",
    explanation: "구매, 클릭 등 성공 지표는 custom event로 정의합니다. eVar/prop은 차원 변수이며 event만이 계량 가능한 지표 역할을 합니다."
  },
  {
    id: 141,
    question: "In Web SDK, which field is used to define the specific Adobe Analytics report suite mapping?",
    options: {
      A: "datastreamId",
      B: "reportSuiteId",
      C: "trackingServer",
      D: "edgeConfigId"
    },
    answer: "A",
    explanation: "Web SDK에서 datastreamId는 Adobe Analytics, Target, Audience Manager 등으로 데이터를 라우팅하는 설정을 포함합니다. Report Suite 매핑도 이 datastream 설정을 통해 제어됩니다."
  },
  {
    id: 142,
    question: "What is the main advantage of using XDM schema in Adobe Experience Platform Web SDK?",
    options: {
      A: "Automatic bot filtering",
      B: "Standardized data model across solutions",
      C: "Server call reduction",
      D: "Direct SQL query access"
    },
    answer: "B",
    explanation: "XDM(Experience Data Model)은 모든 Adobe Experience Cloud 솔루션이 공통적으로 이해할 수 있는 표준 스키마로, 데이터 일관성과 재사용성을 보장합니다."
  },
  {
    id: 143,
    question: "In Adobe Launch, which order of rule execution takes precedence when multiple rules share the same event?",
    options: {
      A: "Rule with earliest creation date",
      B: "Alphabetical order",
      C: "Rule order defined in Launch interface",
      D: "Random order"
    },
    answer: "C",
    explanation: "Adobe Launch에서는 동일한 이벤트를 사용하는 규칙이 여러 개 있을 경우, 'Rule Ordering'에서 정의한 순서에 따라 실행됩니다."
  },
  {
    id: 144,
    question: "Which Adobe Analytics feature allows you to capture visitor-level data across multiple devices?",
    options: {
      A: "Processing Rules",
      B: "Visitor ID Service with ECID",
      C: "Classification",
      D: "Data Feeds"
    },
    answer: "B",
    explanation: "Experience Cloud ID(ECID)는 여러 디바이스 및 도메인에 걸쳐 동일한 사용자를 인식하여 교차 디바이스 분석이 가능합니다."
  },
  {
    id: 145,
    question: "What is the default currency conversion behavior in Adobe Analytics reports?",
    options: {
      A: "All revenue is stored in USD only",
      B: "Values are stored in report suite’s base currency",
      C: "User’s browser locale decides the currency",
      D: "Currency is ignored unless manually configured"
    },
    answer: "B",
    explanation: "Adobe Analytics는 보고서 집합에 설정된 기본 통화로 수익 값을 저장합니다. 필요하면 보고 시점에서 다른 통화로 변환할 수 있습니다."
  },
  {
    id: 146,
    question: "Which Web SDK configuration option ensures data privacy compliance?",
    options: {
      A: "edgeConfigId",
      B: "defaultConsent",
      C: "trackingServerSecure",
      D: "XDM object"
    },
    answer: "B",
    explanation: "defaultConsent 설정은 데이터 전송 전에 사용자 동의 상태를 제어할 수 있어 GDPR, CCPA 같은 개인정보 보호 규정을 준수할 수 있게 합니다."
  },
  {
    id: 147,
    question: "What is the recommended way to track SPA (Single Page Application) page views?",
    options: {
      A: "Trigger s.tl() on each navigation",
      B: "Use sendEvent() with updated page context",
      C: "Force page reload on each route",
      D: "Use processing rules to infer navigation"
    },
    answer: "B",
    explanation: "SPA에서는 브라우저 리로드 없이 라우트가 변경되므로, Web SDK의 sendEvent()를 사용하여 페이지 컨텍스트를 업데이트하는 것이 권장됩니다."
  },
  {
    id: 148,
    question: "Which function in AppMeasurement.js is used for link tracking?",
    options: {
      A: "s.t()",
      B: "s.tl()",
      C: "s.track()",
      D: "s.linkTrack()"
    },
    answer: "B",
    explanation: "s.tl() 함수는 다운로드, exit, custom link tracking을 수행하는 AppMeasurement의 기본 메소드입니다."
  },
  {
    id: 149,
    question: "Which report suite setting ensures consistent visitor identification across multiple domains?",
    options: {
      A: "Cross-domain tracking with CNAME implementation",
      B: "Prop classification",
      C: "Multi-suite tagging",
      D: "Visitor profile merge"
    },
    answer: "A",
    explanation: "크로스도메인 추적을 위해서는 CNAME 기반 1st-party cookie 설정과 ECID 연동이 필수적입니다."
  },
  {
    id: 150,
    question: "What is a potential drawback of multi-suite tagging?",
    options: {
      A: "Decreases data collection speed",
      B: "Increases number of server calls",
      C: "Prevents classification",
      D: "Limits prop usage"
    },
    answer: "B",
    explanation: "멀티 수트 태깅은 동일한 히트를 여러 Report Suite에 전송하므로 서버콜 횟수가 늘어나고 비용이 증가할 수 있습니다."
  },
  {
    id: 151,
    question: "Which variable type supports numeric allocation for merchandising?",
    options: {
      A: "events",
      B: "props",
      C: "eVars",
      D: "listVars"
    },
    answer: "C",
    explanation: "Merchandising eVar는 상품 단위로 할당되며, event 값과 함께 Numeric allocation 분석이 가능합니다."
  },
  {
    id: 152,
    question: "What is the maximum number of classifications allowed per variable?",
    options: {
      A: "5",
      B: "10",
      C: "30",
      D: "50"
    },
    answer: "C",
    explanation: "각 변수당 최대 30개의 분류(Classifications)를 적용할 수 있습니다. 이 제한은 데이터 모델을 복잡하게 만들지 않기 위한 것입니다."
  },
  {
    id: 153,
    question: "Which hit type in Adobe Analytics corresponds to file downloads?",
    options: {
      A: "Custom link",
      B: "Exit link",
      C: "Download link",
      D: "Page view"
    },
    answer: "C",
    explanation: "파일 다운로드는 'Download link' 히트 유형으로 분류되며, AppMeasurement 설정에서 자동으로 추적되도록 할 수 있습니다."
  },
  {
    id: 154,
    question: "How does Adobe Analytics handle bot filtering?",
    options: {
      A: "Processing Rules",
      B: "IAB Bot Rules and custom IP filters",
      C: "s.prop exclusion",
      D: "Link tracking suppression"
    },
    answer: "B",
    explanation: "Adobe Analytics는 IAB International Spiders & Bots 리스트를 기반으로 자동 필터링하며, 추가적으로 IP 기반 커스텀 봇 필터를 설정할 수 있습니다."
  },
  {
    id: 155,
    question: "Which Adobe Analytics feature enables virtual segmentation without creating new report suites?",
    options: {
      A: "Virtual Report Suites",
      B: "Classifications",
      C: "Calculated Metrics",
      D: "Segments"
    },
    answer: "A",
    explanation: "Virtual Report Suites(VRS)는 단일 소스의 데이터를 다양한 기준으로 가상 분리해, 실제 Report Suite를 나누지 않고도 분석할 수 있습니다."
  },
  {
    id: 156,
    question: "Which Launch feature allows external scripts to trigger rules?",
    options: {
      A: "Custom Event",
      B: "Direct Call Rule",
      C: "Rule Ordering",
      D: "Extensions"
    },
    answer: "B",
    explanation: "Direct Call Rule은 개발자가 지정한 함수 호출을 통해 Launch Rule을 강제로 실행할 수 있습니다."
  },
  {
    id: 157,
    question: "Which element in an Adobe Analytics hit determines visit boundaries?",
    options: {
      A: "Session cookie timeout",
      B: "ECID persistence",
      C: "Processing Rules",
      D: "Server-side timestamp"
    },
    answer: "A",
    explanation: "방문(Visit)의 경계는 세션 쿠키 만료(기본 30분 비활동 시) 또는 새로운 캠페인/브라우저 재시작 같은 이벤트로 결정됩니다."
  },
  {
    id: 158,
    question: "What is the recommended way to test Processing Rules before applying them?",
    options: {
      A: "Use a staging report suite",
      B: "Apply directly in production",
      C: "Test with segments in Workspace",
      D: "Use Data Warehouse"
    },
    answer: "A",
    explanation: "Processing Rules는 데이터 수집 시점에서 적용되므로, 반드시 별도의 Staging Report Suite에서 테스트한 뒤 Production에 배포해야 합니다."
  },
  {
    id: 159,
    question: "Which Workspace feature enables anomaly detection in metrics?",
    options: {
      A: "Flow visualization",
      B: "Anomaly Detection with Machine Learning",
      C: "Data Warehouse query",
      D: "Segments"
    },
    answer: "B",
    explanation: "Analysis Workspace는 머신러닝 기반의 Anomaly Detection을 통해 과거 데이터 패턴과 비교하여 비정상적인 수치를 자동으로 감지합니다."
  },
  {
    id: 160,
    question: "Which data collection method is recommended for server-side integrations?",
    options: {
      A: "Bulk Data Insertion API",
      B: "2.0 Reporting API",
      C: "AppMeasurement.js",
      D: "s.tl()"
    },
    answer: "A",
    explanation: "서버사이드에서 데이터를 Adobe Analytics로 전송할 때는 BAAAM 또는 Bulk Data Insertion API를 사용하는 것이 권장됩니다."
  }

]; 