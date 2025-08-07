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
      D: "All of the above"
    },
    answer: ["B", "C"],
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
  },
  {
    id: 36,
    question: "Which syntax correctly sets a merchandising eVar in the s.products string using product syntax?",
    options: {
      A: "s.products = 'Footwear;Running Shoes;1;69.95;eVar3=Discount'",
      B: "s.products = 'Footwear;Running Shoes;1;69.95;;;eVar3=Discount'",
      C: "s.products = 'Footwear;Running Shoes;1;69.95;;eVar3=Discount'",
      D: "s.products = 'Footwear;Running Shoes;1;69.95;eVar3:Discount'"
    },
    answer: ["C"],
    explanation: "product syntax에서 merchandising eVar는 6번째 위치에 들어가야 하므로, 다섯 번째 필드를 비워두기 위해 세미콜론(;)을 두 번 연속으로 써야 합니다."
  },
  {
    id: 37,
    question: "How can values from context data variables be transferred to props and eVars in Adobe Analytics?",
    options: {
      A: "By using Data Warehouse",
      B: "By enabling the variables in Launch",
      C: "By using Processing Rules",
      D: "By writing a custom JavaScript plugin"
    },
    answer: ["C"],
    explanation: "Context data 값은 Processing Rules를 통해 props, eVars, events에 매핑되어야 Analytics 보고서에 나타납니다."
  },
  {
    id: 38,
    question: "Which method allows a mobile app developer to send analytics data to multiple report suites?",
    options: {
      A: "Use a Virtual Report Suite",
      B: "Specify multiple rsids in the 'analytics.rsids' field, comma-separated and no spaces",
      C: "Enable multi-suite tracking in Processing Rules",
      D: "Use Report Builder to duplicate data"
    },
    answer: ["B"],
    explanation: "모바일 SDK 설정에서 'analytics.rsids' 항목에 복수의 RSID를 쉼표로 구분해 입력하면, 동일한 데이터를 여러 Report Suite에 전송할 수 있습니다."
  },
  {
    id: 39,
    question: "How does the s_gi() function behave when called with a report suite ID?",
    options: {
      A: "It returns a unique session ID",
      B: "It sends data to Adobe Analytics immediately",
      C: "It returns a tracking object instance for the specified report suite ID",
      D: "It opens the report suite interface in Adobe Analytics"
    },
    answer: ["C"],
    explanation: "s_gi() 함수는 지정된 Report Suite ID에 대한 tracking object 인스턴스를 반환하며, 이 객체를 통해 eVar, prop 설정 및 데이터 전송이 가능합니다."
  },
  {
    id: 40,
    question: "What is a key characteristic of tags in Adobe Launch?",
    options: {
      A: "Tags store raw data in the Adobe cloud",
      B: "Tags allow for custom database connections",
      C: "Tags execute code based on defined conditions or events",
      D: "Tags automatically deduplicate tracking data"
    },
    answer: ["C"],
    explanation: "태그(tag)는 사용자가 정의한 조건이나 이벤트에 따라 JavaScript 코드 또는 추적 명령을 실행하는 방식으로 동작합니다."
  },
  {
    id: 41,
    question: "During an Adobe Analytics implementation review, the analyst sees 'TypeError: Cannot read property eVar1 of null' in the debugger console. How does this affect data accuracy?",
    options: {
      A: "The value is partially sent to Adobe Analytics with fallback",
      B: "The eVar1 value is not set and will be missing from the report",
      C: "Adobe Analytics auto-fixes this during ingestion",
      D: "It only affects JavaScript logging, not data collection"
    },
    answer: ["B"],
    explanation: "JavaScript 오류로 인해 eVar1이 설정되지 않으면 해당 히트에서 값이 전송되지 않으며, 보고서에 eVar1 값이 누락됩니다."
  },
  {
    id: 42,
    question: "An analyst notices that the Page Name variable is frequently missing or inconsistent in reports. What is the most likely cause?",
    options: {
      A: "The Page Name variable is not enabled from Adobe Analytics UI",
      B: "JavaScript errors on the website are preventing the Page Name variable from being captured",
      C: "The Page Name variable is not configured in Adobe Launch",
      D: "The Page Name variable is set to expire too quickly"
    },
    answer: ["B"],
    explanation: "페이지 로딩 시 자바스크립트 오류가 발생하면 pageName 설정 코드가 실행되지 않아 값이 누락될 수 있습니다."
  },
  {
    id: 43,
    question: "After completing an implementation, a developer sees eVar data in the debugger but not in reports. What is the likely reason?",
    options: {
      A: "The eVars are not included in the report suite settings",
      B: "The eVars are not passed in the image request",
      C: "The eVars are not enabled in the Adobe Analytics report suite",
      D: "The eVars were not added to the workspace project"
    },
    answer: ["C"],
    explanation: "보고서에 값이 나타나지 않는 경우, 해당 eVar가 Report Suite 설정에서 활성화되지 않았을 가능성이 큽니다."
  },
  {
    id: 44,
    question: "Which method is used to dynamically change a report suite in the Adobe Launch configuration?",
    options: {
      A: "Enable Report Suite Switcher Extension",
      B: "Map a dynamic data element to the report suite ID field",
      C: "Use Processing Rules to change RSIDs",
      D: "Use Virtual Report Suite logic in custom code"
    },
    answer: ["B"],
    explanation: "Report Suite ID는 Adobe Launch의 Analytics Extension 설정에서 data element를 매핑하여 동적으로 변경할 수 있습니다."
  },
  {
    id: 45,
    question: "Which value type should be selected when using a data element to reference '%Analytics Page Name%' in Adobe Launch?",
    options: {
      A: "Static Value",
      B: "Dynamic Value",
      C: "From Data Element",
      D: "Context Variable"
    },
    answer: ["A"],
    explanation: "'%...%' 구문을 사용한 경우 Launch에서 Static Value 입력칸에 넣더라도 런타임 시 동적으로 Data Element를 참조하므로, 실제 동작은 동적입니다. 하지만 UI에서 입력할 때는 'Static Value'로 입력됩니다."
  },
  {
    id: 46,
    question: "Which syntax correctly sets a merchandising eVar in the s.products string using product syntax?",
    options: {
      A: "s.products = 'Footwear;Running Shoes;1;69.95;eVar3=Discount'",
      B: "s.products = 'Footwear;Running Shoes;1;69.95;;;eVar3=Discount'",
      C: "s.products = 'Footwear;Running Shoes;1;69.95;;eVar3=Discount'",
      D: "s.products = 'Footwear;Running Shoes;1;69.95;eVar3:Discount'"
    },
    answer: ["C"],
    explanation: "product syntax에서 merchandising eVar는 6번째 위치에 들어가야 하므로, 다섯 번째 필드를 비워두기 위해 세미콜론(;)을 두 번 연속으로 써야 합니다."
  },
  {
    id: 47,
    question: "How can values from context data variables be transferred to props and eVars in Adobe Analytics?",
    options: {
      A: "By using Data Warehouse",
      B: "By enabling the variables in Launch",
      C: "By using Processing Rules",
      D: "By writing a custom JavaScript plugin"
    },
    answer: ["C"],
    explanation: "Context data 값은 Processing Rules를 통해 props, eVars, events에 매핑되어야 Analytics 보고서에 나타납니다."
  },
  {
    id: 48,
    question: "Which method allows a mobile app developer to send analytics data to multiple report suites?",
    options: {
      A: "Use a Virtual Report Suite",
      B: "Specify multiple rsids in the 'analytics.rsids' field, comma-separated and no spaces",
      C: "Enable multi-suite tracking in Processing Rules",
      D: "Use Report Builder to duplicate data"
    },
    answer: ["B"],
    explanation: "모바일 SDK 설정에서 'analytics.rsids' 항목에 복수의 RSID를 쉼표로 구분해 입력하면, 동일한 데이터를 여러 Report Suite에 전송할 수 있습니다."
  },
  {
    id: 49,
    question: "How does the s_gi() function behave when called with a report suite ID?",
    options: {
      A: "It returns a unique session ID",
      B: "It sends data to Adobe Analytics immediately",
      C: "It returns a tracking object instance for the specified report suite ID",
      D: "It opens the report suite interface in Adobe Analytics"
    },
    answer: ["C"],
    explanation: "s_gi() 함수는 지정된 Report Suite ID에 대한 tracking object 인스턴스를 반환하며, 이 객체를 통해 eVar, prop 설정 및 데이터 전송이 가능합니다."
  },
  {
    id: 50,
    question: "What is a key characteristic of tags in Adobe Launch?",
    options: {
      A: "Tags store raw data in the Adobe cloud",
      B: "Tags allow for custom database connections",
      C: "Tags execute code based on defined conditions or events",
      D: "Tags automatically deduplicate tracking data"
    },
    answer: ["C"],
    explanation: "태그(tag)는 사용자가 정의한 조건이나 이벤트에 따라 JavaScript 코드 또는 추적 명령을 실행하는 방식으로 동작합니다."
  },
  {
    id: 51,
    question: "During an Adobe Analytics implementation review, the analyst sees 'TypeError: Cannot read property eVar1 of null' in the debugger console. How does this affect data accuracy?",
    options: {
      A: "The value is partially sent to Adobe Analytics with fallback",
      B: "The eVar1 value is not set and will be missing from the report",
      C: "Adobe Analytics auto-fixes this during ingestion",
      D: "It only affects JavaScript logging, not data collection"
    },
    answer: ["B"],
    explanation: "JavaScript 오류로 인해 eVar1이 설정되지 않으면 해당 히트에서 값이 전송되지 않으며, 보고서에 eVar1 값이 누락됩니다."
  },
  {
    id: 52,
    question: "An analyst notices that the Page Name variable is frequently missing or inconsistent in reports. What is the most likely cause?",
    options: {
      A: "The Page Name variable is not enabled from Adobe Analytics UI",
      B: "JavaScript errors on the website are preventing the Page Name variable from being captured",
      C: "The Page Name variable is not configured in Adobe Launch",
      D: "The Page Name variable is set to expire too quickly"
    },
    answer: ["B"],
    explanation: "페이지 로딩 시 자바스크립트 오류가 발생하면 pageName 설정 코드가 실행되지 않아 값이 누락될 수 있습니다."
  },
  {
    id: 53,
    question: "After completing an implementation, a developer sees eVar data in the debugger but not in reports. What is the likely reason?",
    options: {
      A: "The eVars are not included in the report suite settings",
      B: "The eVars are not passed in the image request",
      C: "The eVars are not enabled in the Adobe Analytics report suite",
      D: "The eVars were not added to the workspace project"
    },
    answer: ["C"],
    explanation: "보고서에 값이 나타나지 않는 경우, 해당 eVar가 Report Suite 설정에서 활성화되지 않았을 가능성이 큽니다."
  },
  {
    id: 54,
    question: "Which method is used to dynamically change a report suite in the Adobe Launch configuration?",
    options: {
      A: "Enable Report Suite Switcher Extension",
      B: "Map a dynamic data element to the report suite ID field",
      C: "Use Processing Rules to change RSIDs",
      D: "Use Virtual Report Suite logic in custom code"
    },
    answer: ["B"],
    explanation: "Report Suite ID는 Adobe Launch의 Analytics Extension 설정에서 data element를 매핑하여 동적으로 변경할 수 있습니다."
  },
  {
    id: 55,
    question: "Which value type should be selected when using a data element to reference '%Analytics Page Name%' in Adobe Launch?",
    options: {
      A: "Static Value",
      B: "Dynamic Value",
      C: "From Data Element",
      D: "Context Variable"
    },
    answer: ["A"],
    explanation: "'%...%' 구문을 사용한 경우 Launch에서 Static Value 입력칸에 넣더라도 런타임 시 동적으로 Data Element를 참조하므로, 실제 동작은 동적입니다. 하지만 UI에서 입력할 때는 'Static Value'로 입력됩니다."
  },
  {
    id: 56,
    question: "What is the main purpose of the 'channel' variable in Adobe Analytics?",
    options: {
      A: "To assign traffic to a marketing channel",
      B: "To categorize website sections and assess popularity",
      C: "To track server load distribution",
      D: "To store internal campaign impressions"
    },
    answer: ["B"],
    explanation: "channel 변수는 사이트 내 섹션을 구분하여 각 영역의 트래픽과 인기도를 분석할 수 있도록 합니다."
  },
  {
    id: 57,
    question: "A sales team reports that transaction IDs are missing from Adobe Analytics reports, but the developer sees them in the debugger. What is the likely cause?",
    options: {
      A: "The Transaction ID is overwritten by another value",
      B: "The debugger tool is malfunctioning",
      C: "Transaction ID is not enabled in the report suite settings",
      D: "The transaction variable was expired too early"
    },
    answer: ["C"],
    explanation: "Debugger에서는 값을 볼 수 있으나 보고서에 보이지 않는 경우, 해당 변수가 Report Suite 설정에서 활성화되지 않았을 수 있습니다."
  },
  {
    id: 58,
    question: "What is the difference between the product syntax and conversion syntax for a merchandising eVar?",
    options: {
      A: "Conversion syntax uses fewer parameters than product syntax",
      B: "Product syntax appends eVar within s.products; conversion syntax sets eVar outside s.products",
      C: "Product syntax is used only for event-based tracking",
      D: "Conversion syntax sets eVars through context data"
    },
    answer: ["B"],
    explanation: "Product syntax는 s.products 문자열 내에서 eVar 값을 설정하고, conversion syntax는 s.eVarN = 'value' 형식으로 제품 외부에서 설정합니다."
  },
  {
    id: 59,
    question: "How should the 'cookieDomainPeriods' variable be configured for a client with multiple country-based domains (e.g., mysite.com, mysite.co.jp, mysite.au)?",
    options: {
      A: "cookieDomainPeriods = 1",
      B: "cookieDomainPeriods = 2",
      C: "cookieDomainPeriods = 3",
      D: "cookieDomainPeriods should be disabled"
    },
    answer: ["2"],
    explanation: "2차 도메인까지 포함되는 일반적인 경우 cookieDomainPeriods는 2로 설정하여 공통 도메인에서 동일 방문자로 인식되도록 해야 합니다."
  },
  {
    id: 60,
    question: "Which method allows a mobile app to send data to multiple Adobe Analytics report suites?",
    options: {
      A: "Set up data forwarding in Processing Rules",
      B: "Use multiple API calls to different RSIDs",
      C: "Set the rsids field in the sa() function, comma-separated without spaces",
      D: "Set separate SDK configurations per RSID"
    },
    answer: ["C"],
    explanation: "모바일 앱에서는 sa() 함수 내 rsids 필드에 쉼표로 구분된 여러 RSID를 설정하면 하나의 히트가 모든 Report Suite로 전송됩니다."
  },
  {
    id: 61,
    question: "An Adobe Analytics developer modifies the name of a data element from 'Page Name' to 'Analytics Page Name' after it was already used to populate eVar1. What will eVar1 capture after this change?",
    options: {
      A: "The value of 'Analytics Page Name' if updated everywhere",
      B: "Nothing, since the original reference is broken",
      C: "A static string '%Analytics Page Name%'",
      D: "The fallback default value of the extension"
    },
    answer: ["C"],
    explanation: "Data Element 이름이 바뀌었지만 Adobe Launch 룰 설정에서 기존 이름 그대로 '%Page Name%'로 남아 있다면, eVar1에는 해당 문자열이 그대로 기록됩니다."
  },
  {
    id: 62,
    question: "What is the difference between Static Value and Dynamic Value in Adobe Launch?",
    options: {
      A: "Static Value changes based on user behavior; Dynamic Value does not",
      B: "Static Value uses hard-coded strings, while Dynamic Value references Data Elements using percent signs",
      C: "Static Value requires a custom rule; Dynamic Value does not",
      D: "There is no difference in Adobe Launch"
    },
    answer: ["B"],
    explanation: "Static Value는 문자열을 직접 입력하는 방식이며, '%Data Element%' 형태로 입력하면 런타임에서 Data Element 값으로 대체됩니다. 반면 Dynamic Value 타입은 Data Element 자체를 직접 선택하는 방식입니다."
  },
  {
    id: 63,
    question: "How should a developer refer to the 'language' value in an event object when configuring Adobe Launch to handle _satellite.track?",
    options: {
      A: "%event.language%",
      B: "%event.data.language%",
      C: "%event.detail.language%",
      D: "%data.language%"
    },
    answer: ["C"],
    explanation: "_satellite.track()에서 전달된 두 번째 매개변수는 detail 객체로 전달되므로, Launch에서 참조 시에는 '%event.detail.변수명%' 형태를 사용해야 합니다."
  },
  {
    id: 64,
    question: "Which data element type should be selected in Adobe Launch when referencing a value from the JavaScript data layer?",
    options: {
      A: "JavaScript Variable",
      B: "URL Parameter",
      C: "Query String",
      D: "Constant"
    },
    answer: ["A"],
    explanation: "data layer 객체는 일반적으로 window 객체 아래 존재하므로 JavaScript Variable 타입을 사용하여 예: window.digitalData.page.language 와 같이 참조해야 합니다."
  },
  {
    id: 65,
    question: "Which plugin can help convert all eVar values to lowercase in traditional Adobe Analytics implementations?",
    options: {
      A: "lowercaseVars",
      B: "cleanVars",
      C: "manageVars",
      D: "formatVars"
    },
    answer: ["C"],
    explanation: "manageVars 플러그인을 사용하면 지정한 변수(eVar, prop 등)를 자동으로 소문자(lowercase)로 변환할 수 있습니다. Web SDK에는 적용되지 않습니다."
  },
  {
    id: 66,
    question: "Which of the following variables is responsible for storing the Adobe Experience Cloud ID (ECID)?",
    options: {
      A: "s.visitorID",
      B: "s.eVar0",
      C: "s_fid",
      D: "MID"
    },
    answer: ["D"],
    explanation: "MID는 Adobe Experience Cloud ID (ECID)를 저장하는 필드로, Adobe Launch에서 ECID 서비스가 활성화되어 있으면 s_vi 쿠키 대신 MID가 사용됩니다."
  },
  {
    id: 67,
    question: "Which method is used to pass custom data into Adobe Analytics via Web SDK?",
    options: {
      A: "s.linkTrackVars",
      B: "s.contextData",
      C: "sendEvent() with xdm object",
      D: "setContext()"
    },
    answer: ["C"],
    explanation: "Web SDK에서는 sendEvent() 메서드를 사용하여 데이터를 전송하며, xdm 객체 내부에 사용자 정의 데이터를 넣어 전달합니다."
  },
  {
    id: 68,
    question: "Which of the following statements about Processing Rules is TRUE?",
    options: {
      A: "Processing Rules only apply to historical data",
      B: "Processing Rules can overwrite variable values before data is stored",
      C: "Processing Rules only work with mobile SDKs",
      D: "Processing Rules require code deployment"
    },
    answer: ["B"],
    explanation: "Processing Rules는 수집 시점에 context data 값을 eVar, prop, event 등에 매핑하거나 값을 조건적으로 변경할 수 있으며, 코드 수정 없이 Adobe Analytics UI에서 설정 가능합니다."
  },
  {
    id: 69,
    question: "Which variable is typically used in Adobe Analytics to track internal search terms?",
    options: {
      A: "prop5",
      B: "eVar5",
      C: "pageName",
      D: "events"
    },
    answer: ["B"],
    explanation: "내부 검색어는 일반적으로 eVar5 같은 eVar에 저장하여 방문자가 검색한 키워드를 세션 단위로 추적하고 분석할 수 있도록 합니다."
  },
  {
    id: 70,
    question: "Which Adobe Analytics tool allows creating virtual segments of data based on rules, without needing multiple report suites?",
    options: {
      A: "Processing Rules",
      B: "Virtual Report Suite",
      C: "Classifications",
      D: "Data Warehouse"
    },
    answer: ["B"],
    explanation: "Virtual Report Suite는 실제 데이터를 복사하지 않고 세그먼트 기반 필터링으로 다른 보고서처럼 사용할 수 있어, 리포트 수트를 나누지 않고도 목적별 분석이 가능합니다."
  }

  
]; 