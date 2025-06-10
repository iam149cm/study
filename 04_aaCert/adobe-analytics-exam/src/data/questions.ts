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

export const questions: Question[] = [
  {
    id: 1,
    question: "Which of the following is NOT a valid method to implement Adobe Analytics tracking?",
    options: {
      A: "Using Adobe Experience Platform Launch",
      B: "Using the AppMeasurement.js library directly",
      C: "Using Google Tag Manager",
      D: "Using the Adobe Analytics API"
    },
    answer: "C",
    explanation: "Google Tag Manager는 Adobe Analytics의 공식 구현 방법이 아닙니다. Adobe Analytics는 Adobe Experience Platform Launch, AppMeasurement.js, 또는 Adobe Analytics API를 통해 구현됩니다."
  },
  {
    id: 2,
    question: "What is the purpose of the s.t() function in Adobe Analytics?",
    options: {
      A: "To track page views",
      B: "To track custom events",
      C: "To track e-commerce transactions",
      D: "To track video views"
    },
    answer: "A",
    explanation: "s.t() 함수는 Adobe Analytics에서 페이지 뷰를 추적하는 데 사용되는 기본 함수입니다. 이 함수는 페이지가 로드될 때 호출되어 페이지 뷰 데이터를 Adobe Analytics 서버로 전송합니다."
  },
  {
    id: 3,
    question: "Which of the following variables are automatically collected by Adobe Analytics? (Select all that apply)",
    options: {
      A: "Page URL",
      B: "Browser type",
      C: "Custom events",
      D: "Screen resolution",
      E: "User ID"
    },
    answer: ["A", "B", "D"],
    explanation: "Adobe Analytics는 페이지 URL, 브라우저 타입, 화면 해상도와 같은 기본 정보를 자동으로 수집합니다. 하지만 커스텀 이벤트와 사용자 ID는 별도로 구현해야 합니다."
  },
  {
    id: 4,
    question: "What is the difference between props and eVars in Adobe Analytics?",
    options: {
      A: "Props are temporary while eVars are permanent",
      B: "Props can be used for pathing while eVars cannot",
      C: "Props have a shorter expiration period than eVars",
      D: "Props are server-side while eVars are client-side"
    },
    answer: "C",
    explanation: "props는 기본적으로 페이지 뷰 이후에 만료되는 반면, eVars는 설정된 만료 기간(예: 방문, 이벤트, 구매 등) 동안 값을 유지합니다. 이는 사용자 행동을 더 오래 추적할 수 있게 해줍니다."
  },
  {
    id: 5,
    question: "Which of the following is the correct way to implement a custom event in Adobe Analytics?",
    options: {
      A: "s.events = 'event1';",
      B: "s.eVar1 = 'event1';",
      C: "s.prop1 = 'event1';",
      D: "s.events = 'event1,event2';"
    },
    answer: "A",
    explanation: "Adobe Analytics에서 커스텀 이벤트는 s.events 변수를 통해 구현됩니다. 여러 이벤트를 추적하려면 쉼표로 구분하여 나열할 수 있습니다."
  },
  {
    id: 6,
    question: "Which of the following is NOT a valid Data Element type in Adobe Launch?",
    options: {
      A: "Cookie",
      B: "JavaScript Variable",
      C: "Local Storage",
      D: "Direct Call Rule"
    },
    answer: "D",
    explanation: "Direct Call Rule은 Data Element 타입이 아닌 Rule의 한 종류입니다. Data Element는 Cookie, JavaScript Variable, Local Storage 등을 포함합니다."
  },
  {
    id: 7,
    question: "What is the main conceptual difference between an eVar and a prop?",
    options: {
      A: "eVars expire at page view",
      B: "props enable attribution",
      C: "props allow pathing analysis",
      D: "eVars allow pathing analysis"
    },
    answer: "D",
    explanation: "eVars는 attribution(귀속) 분석이 가능하고, props는 pathing(경로) 분석이 가능합니다. 이는 두 변수 타입의 가장 큰 개념적 차이점입니다."
  },
  {
    id: 8,
    question: "When troubleshooting missing ECID values, what should you check first?",
    options: {
      A: "Marketing Channel Rules",
      B: "Experience Cloud ID Service",
      C: "Processing Rules",
      D: "Classifications"
    },
    answer: "B",
    explanation: "ECID(Experience Cloud ID) 값이 누락된 경우, 가장 먼저 Experience Cloud ID Service의 구현을 확인해야 합니다. 이는 사용자 식별의 기본이 되는 서비스이기 때문입니다."
  },
  {
    id: 9,
    question: "In Adobe Launch, what is the key factor when writing Rules?",
    options: {
      A: "Adding as many conditions as possible",
      B: "Leaving messages unhandled",
      C: "Managing Rule order and execution priority",
      D: "Relying only on event types"
    },
    answer: "C",
    explanation: "Adobe Launch에서 Rule을 작성할 때 가장 중요한 것은 Rule의 순서와 실행 우선순위를 관리하는 것입니다. 이는 데이터 수집의 정확성과 효율성에 직접적인 영향을 미칩니다."
  },
  {
    id: 10,
    question: "Which feature allows you to capture events differently between props and eVars?",
    options: {
      A: "Processing Rules",
      B: "Custom Events",
      C: "Virtual Report Suites",
      D: "Marketing Channels"
    },
    answer: "B",
    explanation: "Custom Events를 사용하면 props와 eVars에 대해 서로 다른 방식으로 이벤트를 캡처할 수 있습니다. 이는 각 변수 타입의 특성을 최대한 활용할 수 있게 해줍니다."
  },
  {
    id: 11,
    question: "When is Context Data Mapping necessary?",
    options: {
      A: "In Adobe Target",
      B: "In Audience Manager",
      C: "In Adobe Analytics",
      D: "In Adobe Campaign"
    },
    answer: "C",
    explanation: "Context Data Mapping은 Adobe Analytics에서 데이터를 수집할 때 필요한 과정입니다. 이는 원시 데이터를 Analytics 변수로 변환하는 중요한 단계입니다."
  },
  {
    id: 12,
    question: "Which statement best describes a Data Layer?",
    options: {
      A: "It dynamically changes system structure",
      B: "It manually updates by company representative",
      C: "It is decided by developers",
      D: "It is a structured format readable by Analytics"
    },
    answer: "D",
    explanation: "Data Layer는 Analytics가 읽을 수 있는 구조화된 형식으로, 웹사이트나 앱의 데이터를 저장하고 관리하는 중앙 저장소 역할을 합니다."
  },
  {
    id: 13,
    question: "What can NOT be checked using Adobe Experience Platform Debugger?",
    options: {
      A: "Custom Variables",
      B: "ECID",
      C: "Server Call",
      D: "Processing Rules"
    },
    answer: "D",
    explanation: "Processing Rules는 서버 측에서 처리되는 규칙이므로 Adobe Experience Platform Debugger에서 직접 확인할 수 없습니다. Debugger는 주로 클라이언트 측 구현을 검증하는 데 사용됩니다."
  },
  {
    id: 14,
    question: "Which of the following is NOT a true advantage of Virtual Report Suite?",
    options: {
      A: "Access data without changing main report suite",
      B: "Needs separate SDR per VRS",
      C: "Apply separate formatting for each VRS",
      D: "Maintain backup and recovery separately"
    },
    answer: "B",
    explanation: "Virtual Report Suite는 별도의 SDR(Solution Design Reference)이 필요하지 않습니다. VRS는 기존 Report Suite의 데이터를 기반으로 하므로 별도의 구현 계획이 필요하지 않습니다."
  },
  {
    id: 15,
    question: "Why are eVars important for Attribution modeling?",
    options: {
      A: "Variables decay over time",
      B: "They capture the point after an action",
      C: "They work in real-time",
      D: "They depend only on Data Layer mapping"
    },
    answer: "A",
    explanation: "eVars는 시간이 지남에 따라 값이 감소(decay)하는 특성이 있어, Attribution modeling에 매우 중요합니다. 이는 전환에 영향을 미치는 다양한 터치포인트의 가중치를 계산하는 데 사용됩니다."
  },
  {
    id: 16,
    question: "Which type of variable persists beyond a single page view?",
    options: {
      A: "prop",
      B: "event",
      C: "eVar",
      D: "processing rule"
    },
    answer: "C",
    explanation: "eVar는 설정된 만료 기간 동안 값을 유지할 수 있는 반면, prop은 기본적으로 페이지 뷰 이후에 만료됩니다. 이는 eVar가 더 복잡한 분석에 적합한 이유 중 하나입니다."
  },
  {
    id: 17,
    question: "Which Adobe tool allows you to inject scripts without modifying the source code?",
    options: {
      A: "Adobe Target",
      B: "Adobe Experience Platform Launch",
      C: "Adobe Audience Manager",
      D: "Adobe Campaign"
    },
    answer: "B",
    explanation: "Adobe Experience Platform Launch는 소스 코드를 수정하지 않고도 웹사이트에 스크립트를 주입할 수 있는 태그 관리 시스템입니다. 이는 구현의 유연성과 효율성을 높여줍니다."
  },
  {
    id: 18,
    question: "In Adobe Analytics, what is the maximum number of eVars allowed per report suite by default?",
    options: {
      A: "75",
      B: "250",
      C: "100",
      D: "150"
    },
    answer: "B",
    explanation: "Adobe Analytics의 기본 Report Suite 설정에서는 최대 250개의 eVars를 사용할 수 있습니다. 이는 복잡한 분석 요구사항을 충족시키기에 충분한 수입니다."
  },
  {
    id: 19,
    question: "What is the purpose of a Processing Rule?",
    options: {
      A: "Alter data before it reaches reporting",
      B: "Modify live data after reporting",
      C: "Create calculated metrics",
      D: "Delete server calls"
    },
    answer: "A",
    explanation: "Processing Rule은 데이터가 보고서에 도달하기 전에 데이터를 수정하는 데 사용됩니다. 이는 데이터 정제, 변환, 필터링 등의 작업을 수행할 수 있게 해줍니다."
  },
  {
    id: 20,
    question: "Which variable is best for capturing page names?",
    options: {
      A: "eVar",
      B: "prop",
      C: "event",
      D: "listVar"
    },
    answer: "B",
    explanation: "페이지 이름을 캡처하는 데는 prop이 가장 적합합니다. prop은 pathing 분석에 최적화되어 있어 페이지 흐름을 분석하는 데 유용합니다."
  },
  {
    id: 21,
    question: "What is the correct order for firing an Adobe Launch Rule?",
    options: {
      A: "Conditions > Events > Actions",
      B: "Events > Conditions > Actions",
      C: "Actions > Conditions > Events",
      D: "Events > Actions > Conditions"
    },
    answer: "B",
    explanation: "Adobe Launch Rule의 실행 순서는 Events(이벤트 발생) > Conditions(조건 확인) > Actions(액션 실행)입니다. 이는 Rule의 논리적 흐름을 보장합니다."
  },
  {
    id: 22,
    question: "Which API is used to send raw hit data server-side?",
    options: {
      A: "Reporting API",
      B: "Data Insertion API",
      C: "Admin API",
      D: "Visitor ID Service API"
    },
    answer: "B",
    explanation: "Data Insertion API는 서버 측에서 원시 히트 데이터를 Adobe Analytics로 전송하는 데 사용됩니다. 이는 클라이언트 측 추적이 불가능한 경우에 유용합니다."
  },
  {
    id: 23,
    question: "Which element is crucial for ensuring GDPR compliance in Adobe Analytics?",
    options: {
      A: "Data Retention Setting",
      B: "Customer Attributes",
      C: "Tags",
      D: "Processing Rules"
    },
    answer: "A",
    explanation: "GDPR 준수를 위해서는 Data Retention Setting이 가장 중요합니다. 이는 개인 데이터의 보관 기간을 제어하고, 데이터 주체의 권리를 보호하는 데 필수적입니다."
  },
  {
    id: 24,
    question: "What does an s.tl() call track?",
    options: {
      A: "Page Load",
      B: "Link Click",
      C: "Form Submission",
      D: "Both B and C"
    },
    answer: "D",
    explanation: "s.tl() 호출은 링크 클릭과 폼 제출과 같은 사용자 상호작용을 추적하는 데 사용됩니다. 이는 페이지 로드(s.t())와는 다른 방식으로 작동합니다."
  },
  {
    id: 25,
    question: "Which function sets the Experience Cloud ID (ECID) in client-side tracking?",
    options: {
      A: "setVisitorID()",
      B: "getMarketingCloudVisitorID()",
      C: "trackID()",
      D: "setMID()"
    },
    answer: "D",
    explanation: "setMID() 함수는 클라이언트 측 추적에서 Experience Cloud ID(ECID)를 설정하는 데 사용됩니다. 이는 사용자 식별의 기본이 되는 중요한 함수입니다."
  },
  {
    id: 26,
    question: "Which data collection method sends data from server-side rather than client browser?",
    options: {
      A: "s.t()",
      B: "AppMeasurement.js",
      C: "Data Insertion API",
      D: "Context Data"
    },
    answer: "C",
    explanation: "Data Insertion API는 클라이언트 브라우저가 아닌 서버 측에서 데이터를 전송하는 방법입니다. 이는 보안이 중요한 데이터나 클라이언트 측 추적이 불가능한 경우에 유용합니다."
  },
  {
    id: 27,
    question: "How do you capture custom interactions not available by default in Adobe Analytics?",
    options: {
      A: "Using List Variables",
      B: "Using Processing Rules",
      C: "Using Custom Events",
      D: "Using Real-Time API"
    },
    answer: "C",
    explanation: "기본적으로 제공되지 않는 사용자 정의 상호작용을 캡처하려면 Custom Events를 사용해야 합니다. 이는 특정 비즈니스 요구사항에 맞춰 이벤트를 정의하고 추적할 수 있게 해줍니다."
  },
  {
    id: 28,
    question: "Which cookie stores the ECID for Adobe Analytics tracking?",
    options: {
      A: "AMCV_",
      B: "s_vi",
      C: "s_cc",
      D: "demdex"
    },
    answer: "A",
    explanation: "AMCV_ 쿠키는 Adobe Analytics 추적에서 Experience Cloud ID(ECID)를 저장하는 데 사용됩니다. 이는 사용자 식별의 기본이 되는 중요한 쿠키입니다."
  },
  {
    id: 29,
    question: "Which feature allows a developer to modify a server call's content in Adobe Launch?",
    options: {
      A: "Actions",
      B: "Conditions",
      C: "Data Elements",
      D: "Custom Code"
    },
    answer: "D",
    explanation: "Custom Code를 사용하면 Adobe Launch에서 서버 호출의 내용을 수정할 수 있습니다. 이는 복잡한 데이터 변환이나 특별한 로직이 필요한 경우에 유용합니다."
  },
  {
    id: 30,
    question: "Which action should you take if Debugger shows missing props/eVars?",
    options: {
      A: "Reinstall the Adobe Analytics extension",
      B: "Check Data Element mappings",
      C: "Restart browser",
      D: "Increase server call timeout"
    },
    answer: "B",
    explanation: "Debugger에서 props/eVars가 누락된 것으로 표시되면, 가장 먼저 Data Element 매핑을 확인해야 합니다. 이는 변수가 올바르게 설정되었는지 확인하는 첫 번째 단계입니다."
  },
  {
    id: 31,
    question: "What is the best practice for naming variables in Adobe Analytics?",
    options: {
      A: "Use clear, descriptive names that reflect the tracked data",
      B: "Use random letters and numbers",
      C: "Use the same name for all variables",
      D: "Leave variables unnamed"
    },
    answer: "A",
    explanation: "Adobe Analytics에서 변수 이름을 지정할 때는 추적하는 데이터를 명확하게 반영하는 설명적인 이름을 사용하는 것이 좋습니다. 이는 코드의 가독성과 유지보수성을 높여줍니다."
  },
  {
    id: 32,
    question: "Which of the following is NOT a valid trigger for a rule in Adobe Launch?",
    options: {
      A: "Page load",
      B: "Click event",
      C: "Data element change",
      D: "User password reset"
    },
    answer: "D",
    explanation: "사용자 비밀번호 재설정은 Adobe Launch의 유효한 규칙 트리거가 아닙니다. 일반적인 트리거는 페이지 로드, 클릭 이벤트, 데이터 요소 변경 등입니다."
  },
  {
    id: 33,
    question: "What is the function of the Adobe Analytics API?",
    options: {
      A: "To automate data extraction and reporting",
      B: "To manage user permissions",
      C: "To create dashboards",
      D: "To debug implementations"
    },
    answer: "A",
    explanation: "Adobe Analytics API의 주요 기능은 데이터 추출과 보고를 자동화하는 것입니다. 이는 대량의 데이터를 처리하거나 맞춤형 보고서를 생성할 때 유용합니다."
  },
  {
    id: 34,
    question: "What is a prop variable best suited for?",
    options: {
      A: "Tracking page-level data for pathing analysis",
      B: "Tracking conversion events",
      C: "Storing lists of products",
      D: "Managing user accounts"
    },
    answer: "A",
    explanation: "prop 변수는 경로 분석을 위한 페이지 수준 데이터 추적에 가장 적합합니다. 이는 사용자의 페이지 이동 패턴을 분석하는 데 유용합니다."
  },
  {
    id: 35,
    question: "Which of the following should be included in an SDR (Solution Design Reference)?",
    options: {
      A: "Business requirements mapped to variables",
      B: "User account passwords",
      C: "Data layer specifications",
      D: "Server capacity details"
    },
    answer: ["A", "C"],
    explanation: "SDR에는 비즈니스 요구사항을 변수에 매핑한 내용과 데이터 레이어 사양이 포함되어야 합니다. 이는 구현의 기초가 되는 중요한 문서입니다."
  }
]; 