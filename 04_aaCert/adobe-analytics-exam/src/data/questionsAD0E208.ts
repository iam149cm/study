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

export const questionsAD0E208: Question[] = [
  {
    id: 1,
    question: "Which Adobe Analytics tool is most commonly used by business users for analysis?",
    options: {
      A: "Analysis Workspace",
      B: "Data Warehouse",
      C: "Report Builder",
      D: "Real-Time Reports"
    },
    answer: "A",
    explanation: "Analysis Workspace is the core analysis tool in Adobe Analytics that allows business users to perform analysis freely using drag-and-drop functionality.\n\nAnalysis Workspace는 Adobe Analytics의 핵심 분석 도구로, 비즈니스 사용자들이 드래그 앤 드롭 방식으로 자유롭게 분석을 수행할 수 있게 해줍니다."
  },
  {
    id: 2,
    question: "What is the difference between Dimensions and Metrics in Analysis Workspace?",
    options: {
      A: "Dimensions are numbers, Metrics are text",
      B: "Dimensions are classification criteria, Metrics are measurement values",
      C: "Dimensions are time-based, Metrics are space-based",
      D: "Dimensions are fixed values, Metrics are variable values"
    },
    answer: "B",
    explanation: "Dimensions are criteria for classifying data (e.g., pages, products, regions), while Metrics are values being measured (e.g., visitors, revenue, conversion rate).\n\n차원(Dimension)은 데이터를 분류하는 기준(예: 페이지, 제품, 지역)이고, 지표(Metric)는 측정하는 값(예: 방문자 수, 매출, 전환율)입니다."
  },
  {
    id: 3,
    question: "What are the main purposes of Segments in Adobe Analytics? (Select all that apply)",
    options: {
      A: "Separate specific user groups for analysis",
      B: "Filter data",
      C: "Perform comparative analysis",
      D: "Export data",
      E: "Real-time monitoring"
    },
    answer: ["A", "B", "C"],
    explanation: "Segments are used to separate user groups that meet specific conditions for analysis, filter data, and perform comparative analysis with other groups.\n\n세그먼트는 특정 조건을 만족하는 사용자 그룹을 분리하여 분석하고, 데이터를 필터링하며, 다른 그룹과의 비교 분석을 수행하는 데 사용됩니다."
  },
  {
    id: 4,
    question: "What is the purpose of Conversion Funnel analysis in Adobe Analytics?",
    options: {
      A: "Measure website speed",
      B: "Track user behavior paths",
      C: "Confirm revenue increase",
      D: "Identify drop-off points"
    },
    answer: "D",
    explanation: "Conversion Funnel analysis aims to identify at which stage users drop off in the process toward goal conversion to find improvement opportunities.\n\n전환 퍼널 분석은 사용자가 목표 전환까지의 과정에서 어느 단계에서 이탈하는지 파악하여 개선점을 찾는 것이 주요 목적입니다."
  },
  {
    id: 5,
    question: "What is the role of Attribution models in Adobe Analytics?",
    options: {
      A: "Validate data accuracy",
      B: "Distribute value of channels contributing to conversion",
      C: "Identify users",
      D: "Automate reporting"
    },
    answer: "B",
    explanation: "Attribution models determine how to distribute the value of multiple marketing channels that contributed to user conversion.\n\nAttribution 모델은 사용자의 전환에 기여한 여러 마케팅 채널의 가치를 어떻게 분배할지 결정하는 역할을 합니다."
  },
  {
    id: 6,
    question: "Why are Calculated Metrics used in Adobe Analytics?",
    options: {
      A: "Save data storage space",
      B: "Create metrics meaningful to business",
      C: "Improve report speed",
      D: "Enhance data security"
    },
    answer: "B",
    explanation: "Calculated Metrics are used to create new metrics that are more meaningful to business by combining existing metrics (e.g., conversion rate, average order value).\n\nCalculated Metrics는 기존 지표들을 조합하여 비즈니스에 더 의미 있는 새로운 지표(예: 전환율, 평균 주문 가치)를 생성하는 데 사용됩니다."
  },
  {
    id: 7,
    question: "What is the main application area of Cohort Analysis in Adobe Analytics?",
    options: {
      A: "Website performance measurement",
      B: "User retention analysis",
      C: "Real-time traffic monitoring",
      D: "A/B test result analysis"
    },
    answer: "B",
    explanation: "Cohort Analysis is primarily used to analyze retention rates over time for user groups acquired during specific periods to understand user behavior patterns.\n\n코호트 분석은 특정 기간에 획득한 사용자 그룹의 시간에 따른 유지율을 분석하여 사용자 행동 패턴을 파악하는 데 주로 사용됩니다."
  },
  {
    id: 8,
    question: "What is the advantage of Flow Analysis in Adobe Analytics?",
    options: {
      A: "Improve data processing speed",
      B: "Visualize user journey",
      C: "Automate reporting",
      D: "Validate data accuracy"
    },
    answer: "B",
    explanation: "Flow Analysis visually shows how users move through a website, making it easy to understand user journeys.\n\nFlow Analysis는 사용자가 웹사이트에서 어떤 경로로 이동하는지 시각적으로 보여주어 사용자 여정을 쉽게 이해할 수 있게 해줍니다."
  },
  {
    id: 9,
    question: "What is the main purpose of Alert functionality in Adobe Analytics?",
    options: {
      A: "Data backup",
      B: "Detect abnormal data changes",
      C: "Automatically send reports",
      D: "User permission management"
    },
    answer: "B",
    explanation: "Alert functionality detects abnormal data changes (e.g., traffic spikes, conversion rate drops) based on set thresholds and provides immediate notifications.\n\nAlert 기능은 설정된 임계값을 기준으로 비정상적인 데이터 변화(예: 트래픽 급증, 전환율 하락)를 감지하여 즉시 알림을 제공합니다."
  },
  {
    id: 10,
    question: "What should be considered when sharing Workspace Projects in Adobe Analytics? (Select all that apply)",
    options: {
      A: "Set access permissions",
      B: "Data security",
      C: "Add project description",
      D: "Auto-refresh settings",
      E: "Color theme application"
    },
    answer: ["A", "B", "C"],
    explanation: "When sharing Workspace Projects, it's important to set access permissions, ensure data security, and add clear project descriptions.\n\nWorkspace Projects 공유 시 접근 권한 설정, 데이터 보안, 그리고 프로젝트에 대한 명확한 설명을 추가하는 것이 중요합니다."
  },
  {
    id: 11,
    question: "What is the limitation of Real-Time Reports in Adobe Analytics?",
    options: {
      A: "Lack of data accuracy",
      B: "Limited analysis capabilities",
      C: "High cost",
      D: "Complex setup"
    },
    answer: "B",
    explanation: "Real-Time Reports show real-time data but have limited advanced analysis features such as segments, calculated metrics, and complex filtering.\n\nReal-Time Reports는 실시간 데이터를 보여주지만, 세그먼트, 계산 지표, 복잡한 필터링 등 고급 분석 기능이 제한적입니다."
  },
  {
    id: 12,
    question: "What is the difference between Data Warehouse and regular reports in Adobe Analytics?",
    options: {
      A: "Data Warehouse is faster",
      B: "Data Warehouse can process more data",
      C: "Data Warehouse provides real-time data",
      D: "Data Warehouse is free"
    },
    answer: "B",
    explanation: "Data Warehouse can process much larger amounts of data compared to regular reports, making it suitable for large-scale data analysis.\n\nData Warehouse는 일반 보고서보다 훨씬 많은 양의 데이터를 처리할 수 있어 대용량 데이터 분석에 적합합니다."
  },
  {
    id: 13,
    question: "What is the advantage of Anomaly Detection in Adobe Analytics?",
    options: {
      A: "Reduce manual analysis time",
      B: "Save data storage space",
      C: "Automate report generation",
      D: "User permission management"
    },
    answer: "A",
    explanation: "Anomaly Detection uses statistical algorithms to automatically detect abnormal data patterns, greatly reducing manual analysis time.\n\nAnomaly Detection은 통계적 알고리즘을 사용하여 비정상적인 데이터 패턴을 자동으로 감지하여 수동 분석 시간을 크게 단축시킵니다."
  },
  {
    id: 14,
    question: "What is the use case for Breakdown functionality in Adobe Analytics?",
    options: {
      A: "Data backup",
      B: "Segment metrics by dimensions",
      C: "Automate reporting",
      D: "User authentication"
    },
    answer: "B",
    explanation: "Breakdown functionality allows detailed analysis by segmenting specific metrics by other dimensions. For example, revenue can be classified by product or region.\n\nBreakdown 기능은 특정 지표를 다른 차원으로 세분화하여 더 상세한 분석을 가능하게 합니다. 예를 들어, 매출을 제품별, 지역별로 분류할 수 있습니다."
  },
  {
    id: 15,
    question: "What is the advantage of Workspace Templates in Adobe Analytics?",
    options: {
      A: "Apply consistent analysis methodology",
      B: "Improve data processing speed",
      C: "Automatically send reports",
      D: "User permission management"
    },
    answer: "A",
    explanation: "Workspace Templates apply consistent analysis methodology within organizations and provide reusable analysis frameworks to improve analysis efficiency.\n\nWorkspace Templates는 조직 내에서 일관된 분석 방법론을 적용하고, 재사용 가능한 분석 프레임워크를 제공하여 분석 효율성을 높입니다."
  },
  {
    id: 16,
    question: "What should be considered when writing Calculated Metrics formulas in Adobe Analytics?",
    options: {
      A: "Case sensitivity",
      B: "Data type consistency",
      C: "Color code usage",
      D: "Font size settings"
    },
    answer: "B",
    explanation: "When writing Calculated Metrics formulas, data types of metrics must be consistent, and appropriate conversion is needed when mixing numbers and percentages.\n\nCalculated Metrics 수식 작성 시 지표들의 데이터 타입이 일치해야 하며, 숫자와 백분율을 혼용할 때는 적절한 변환이 필요합니다."
  },
  {
    id: 17,
    question: "What is the purpose of Segment Comparison analysis in Adobe Analytics?",
    options: {
      A: "Validate data accuracy",
      B: "Understand behavior differences between user groups",
      C: "Automate reporting",
      D: "User authentication"
    },
    answer: "B",
    explanation: "Segment Comparison is used to understand behavior pattern differences between different user groups (e.g., new vs existing customers, mobile vs desktop users).\n\nSegment Comparison은 서로 다른 사용자 그룹(예: 신규 vs 기존 고객, 모바일 vs 데스크톱 사용자) 간의 행동 패턴 차이를 파악하는 데 사용됩니다."
  },
  {
    id: 18,
    question: "What features can be used in Freeform Table in Adobe Analytics Workspace? (Select all that apply)",
    options: {
      A: "Drag and drop dimensions and metrics",
      B: "Sorting and filtering",
      C: "Create segments by clicking cells",
      D: "Apply conditional formatting",
      E: "Real-time data updates"
    },
    answer: ["A", "B", "C", "D"],
    explanation: "Freeform Table provides various analysis features including drag and drop, sorting/filtering, segment creation, and conditional formatting.\n\nFreeform Table은 드래그 앤 드롭, 정렬/필터링, 세그먼트 생성, 조건부 서식 등 다양한 분석 기능을 제공합니다."
  },
  {
    id: 19,
    question: "What is the main feature of Attribution IQ in Adobe Analytics?",
    options: {
      A: "Data backup",
      B: "Compare multiple attribution models",
      C: "Automate reporting",
      D: "User permission management"
    },
    answer: "B",
    explanation: "Attribution IQ is an advanced feature that allows comparison analysis of various attribution models such as First Touch, Last Touch, Linear, and Time Decay.\n\nAttribution IQ는 First Touch, Last Touch, Linear, Time Decay 등 다양한 Attribution 모델을 비교 분석할 수 있게 해주는 고급 기능입니다."
  },
  {
    id: 20,
    question: "What is the advantage of Visualization tools in Adobe Analytics Workspace?",
    options: {
      A: "Save data storage space",
      B: "Express complex data intuitively",
      C: "Automatically send reports",
      D: "User authentication"
    },
    answer: "B",
    explanation: "Visualization tools express complex data through charts, graphs, heatmaps, etc., making data easy to understand intuitively.\n\n시각화 도구는 복잡한 데이터를 차트, 그래프, 히트맵 등으로 표현하여 데이터를 직관적으로 이해할 수 있게 해줍니다."
  },
  {
    id: 21,
    question: "What is the role of Data Sources in Adobe Analytics?",
    options: {
      A: "Measure website performance",
      B: "Integrate external data with Adobe Analytics data",
      C: "Real-time monitoring",
      D: "User authentication"
    },
    answer: "B",
    explanation: "Data Sources enable more comprehensive analysis by integrating external data such as CRM data and offline data with Adobe Analytics data.\n\nData Sources는 CRM 데이터, 오프라인 데이터 등 외부 데이터를 Adobe Analytics 데이터와 통합하여 더 포괄적인 분석을 가능하게 합니다."
  },
  {
    id: 22,
    question: "What functions can be used in Advanced Functions of Calculated Metrics in Adobe Analytics? (Select all that apply)",
    options: {
      A: "SUM",
      B: "AVERAGE",
      C: "COUNT",
      D: "IF",
      E: "CASE"
    },
    answer: ["A", "B", "C", "D", "E"],
    explanation: "Advanced Functions support various mathematical and logical functions such as SUM, AVERAGE, COUNT, IF, and CASE.\n\nAdvanced Functions에서는 SUM, AVERAGE, COUNT, IF, CASE 등 다양한 수학적 및 논리적 함수를 사용할 수 있습니다."
  },
  {
    id: 23,
    question: "What does Retention Rate mean in Cohort Table in Adobe Analytics Workspace?",
    options: {
      A: "Percentage of users who return after a specific period among all visitors",
      B: "Page loading speed",
      C: "Conversion rate",
      D: "Drop-off rate"
    },
    answer: "A",
    explanation: "Retention Rate represents the percentage of users who return after a specific period among users acquired during that period.\n\nRetention Rate는 특정 기간에 획득한 사용자 중에서 이후 기간에도 다시 방문한 사용자의 비율을 나타냅니다."
  },
  {
    id: 24,
    question: "What is the use case for Fallout Visualization in Adobe Analytics Workspace?",
    options: {
      A: "Website performance measurement",
      B: "Analyze drop-off points in conversion funnel",
      C: "Real-time traffic monitoring",
      D: "A/B test result analysis"
    },
    answer: "B",
    explanation: "Fallout Visualization visually shows at which point users drop off in each step of the conversion funnel to identify improvement opportunities.\n\nFallout Visualization은 사용자가 전환 퍼널의 각 단계에서 어느 지점에서 이탈하는지 시각적으로 보여주어 개선점을 파악하는 데 사용됩니다."
  },
  {
    id: 25,
    question: "What is the advantage of Histogram in Adobe Analytics Workspace?",
    options: {
      A: "Visualize data distribution patterns",
      B: "Real-time data updates",
      C: "Automatically generate reports",
      D: "User permission management"
    },
    answer: "A",
    explanation: "Histograms visually show data distribution patterns, making it easy to identify outliers or data concentration.\n\n히스토그램은 데이터의 분포 패턴을 시각적으로 보여주어 이상치(outlier)나 데이터 집중도를 쉽게 파악할 수 있게 해줍니다."
  },
  {
    id: 26,
    question: "If you want to analyze the number of product sample requests, which combination should you use?",
    options: {
      A: "prop3 + event12",
      B: "eVar4 + event12",
      C: "prop3 + eVar4",
      D: "event12 + segment"
    },
    answer: "B",
    explanation: "eVars persist values, so combining eVar4 (product page name) with event12 (sample request) produces accurate sample request counts.\n\neVar4(제품 페이지명)과 event12(샘플 요청)을 결합하면 정확한 샘플 요청 수를 집계할 수 있습니다. eVar는 값이 지속됩니다."
  },
  {
    id: 27,
    question: "Which visualization would you use to show user journeys and drop-off points?",
    options: {
      A: "Fallout Report",
      B: "Map Visualization",
      C: "Bar Chart",
      D: "Freeform Table"
    },
    answer: "A",
    explanation: "Fallout visualizations display step-by-step user journeys and highlight where users drop off.\n\nFallout 시각화는 사용자 여정의 각 단계별 이탈 지점을 보여줍니다."
  },
  {
    id: 28,
    question: "Which variable type is suitable for tracking pathing behavior, such as page-to-page movement?",
    options: {
      A: "eVar",
      B: "Event",
      C: "Prop",
      D: "Segment"
    },
    answer: "C",
    explanation: "Props are traffic variables ideal for tracking sequential page views and analyzing pathing behavior.\n\nProp는 순차적인 페이지 뷰와 경로 분석에 적합한 트래픽 변수입니다."
  },
  {
    id: 29,
    question: "A business stakeholder receives a report showing unique visitor and visit totals that don't match the sum of row-level values. Why?",
    options: {
      A: "Totals are de-duplicated and don't sum linearly",
      B: "There is a filter applied on the report",
      C: "Data for April inflates totals",
      D: "Totals are based on sample data"
    },
    answer: "A",
    explanation: "Unique visitor and visit metrics are de-duplicated, so their totals reflect site-wide counts, not row-level sums.\n\n고유 방문자와 방문 지표는 중복이 제거되어 전체 사이트 기준으로 계산되어 행별 합계와 일치하지 않을 수 있습니다."
  },
  {
    id: 30,
    question: "How can you identify the source of traffic in Adobe Analytics?",
    options: {
      A: "By analyzing user demographics",
      B: "By examining the referral path",
      C: "By reviewing campaign tags",
      D: "By tracking IP addresses"
    },
    answer: "C",
    explanation: "Reviewing campaign tags allows marketers to determine which campaigns drove site traffic.\n\n캠페인 태그를 확인하면 어떤 캠페인이 트래픽을 유도했는지 파악할 수 있습니다."
  },
  {
    id: 31,
    question: "What should be done with generated metrics when business conditions change?",
    options: {
      A: "Update regularly",
      B: "Delete permanently",
      C: "Ignore changes",
      D: "Leave as is"
    },
    answer: "A",
    explanation: "Generated metrics need periodic updates to reflect the latest business goals and conditions.\n\n생성된 메트릭은 최신 비즈니스 목표 및 상황을 반영하도록 주기적으로 업데이트해야 합니다."
  },
  {
    id: 32,
    question: "Which tool best supports scheduled delivery of customizable reports to stakeholders?",
    options: {
      A: "Report Builder",
      B: "Analysis Workspace",
      C: "Data Warehouse",
      D: "ClickMap"
    },
    answer: "B",
    explanation: "Analysis Workspace enables creating, customizing, and scheduling delivery of interactive reports.\n\nAnalysis Workspace에서는 보고서를 생성·맞춤화하고, 정기적으로 스테이크홀더에 배포할 수 있습니다."
  },
  {
    id: 33,
    question: "What is a common reason for zero users showing in Fallout visualization on Next Hit mode?",
    options: {
      A: "No direct path between touchpoints",
      B: "Eventual path conversion never occurred",
      C: "No conversions on any path",
      D: "Data was filtered incorrectly"
    },
    answer: "A",
    explanation: "If no user makes an immediate transition from one step to the next, Next Hit mode in Fallout shows zero visitors.\n\n각 단계 사이에 즉시 이동하는 사용자가 없으면 Fallout의 Next Hit 모드에서 방문자가 0으로 표시됩니다."
  },
  {
    id: 34,
    question: "Which two metrics would you use to assess if a landing page redesign confused users?",
    options: {
      A: "Bounce Rate and Time Spent on Page",
      B: "Entries and Page Views",
      C: "Unique Visitors and Exit Rate",
      D: "Segments and Events"
    },
    answer: "A",
    explanation: "Bounce Rate and Time Spent on Page measure engagement and can indicate confusion if Bounce Rate increases and time spent decreases.\n\nBounce Rate와 Time Spent on Page는 사용자의 참여도를 측정하며, Bounce Rate가 오르고 체류 시간이 감소하면 랜딩 페이지 혼란을 의미할 수 있습니다."
  },
  {
    id: 35,
    question: "Which tool enables you to query large sets of raw data for advanced analysis?",
    options: {
      A: "Report Builder",
      B: "Data Warehouse",
      C: "Analysis Workspace",
      D: "Segments"
    },
    answer: "B",
    explanation: "Data Warehouse provides access to raw Adobe Analytics data suitable for custom, large-scale queries.\n\nData Warehouse는 Adobe Analytics의 원시 데이터를 기반으로 맞춤형 대규모 쿼리를 지원합니다."
  },
  {
    id: 36,
    question: "A pharmaceutical company wants products grouped by product name in a Freeform Table. What should they use?",
    options: {
      A: "Unique Page URLs",
      B: "Product Name Dimension",
      C: "Visit Number",
      D: "Entry Page"
    },
    answer: "B",
    explanation: "Grouping via the Product Name Dimension ensures products are arranged specifically by name in Freeform Tables.\n\nProduct Name Dimension을 활용하면 Freeform Table에서 제품명을 기준으로 데이터를 그룹화할 수 있습니다."
  },
  {
    id: 37,
    question: "What Adobe product provides tag management capabilities?",
    options: {
      A: "Adobe Launch",
      B: "Data Feed",
      C: "ClickMap",
      D: "Report Builder"
    },
    answer: "A",
    explanation: "Adobe Launch is Adobe’s tag management solution, enabling deployment of analytics and marketing tags.\n\nAdobe Launch는 Adobe의 태그 관리 솔루션으로, 분석 및 마케팅 태그 배포를 지원합니다."
  },
  {
    id: 38,
    question: "Which variable is best for tracking how users move through a defined appointment process?",
    options: {
      A: "event1",
      B: "eVar1",
      C: "event2",
      D: "prop1"
    },
    answer: "D",
    explanation: "Prop variables are suitable for recording user navigation steps, such as appointment pathing.\n\nProp 변수는 예약 경로 등 사용자 이동 단계를 기록하는 데 적합합니다."
  },
  {
    id: 39,
    question: "What is segment stacking used for in Adobe Analytics?",
    options: {
      A: "Combining multiple smaller segments into one",
      B: "Splitting segments into granular groups",
      C: "Bypassing report segment limits",
      D: "Visualizing segment overlap"
    },
    answer: "A",
    explanation: "Segment stacking enables combining various granular segments into one consolidated segment for complex analyses.\n\nSegment stacking은 여러 세밀한 세그먼트를 하나로 합쳐 복합 분석을 가능하게 합니다."
  },
  {
    id: 40,
    question: "What’s a common data quality issue in Adobe Analytics reporting?",
    options: {
      A: "Inconsistent naming conventions",
      B: "Too many variables",
      C: "Excessive data volume",
      D: "High bounce rate"
    },
    answer: "A",
    explanation: "Inconsistent naming conventions lead to confusion, misreporting, and difficulty in data aggregation and analysis.\n\n명명 규칙이 일관되지 않으면 데이터 집계와 분석, 보고서 해석에 혼란을 초래할 수 있습니다."
  },
  {
    id: 41,
    question: "Which metric best represents the total number of individual users who visited a website within a given time period?",
    options: {
      A: "Unique Visitors",
      B: "Page Views",
      C: "Visits",
      D: "Bounce Rate"
    },
    answer: "A",
    explanation: "Unique Visitors is a metric that identifies each user only once within a reporting period, regardless of how many times they visit.\n\nUnique Visitors는 보고 기간 내 여러 번 방문하더라도 한 명의 사용자를 한 번만 집계하는 지표입니다."
  },
  {
    id: 42,
    question: "Which variable type is designed to persist values across multiple hits and visits?",
    options: {
      A: "Prop",
      B: "eVar",
      C: "Event",
      D: "Segment"
    },
    answer: "B",
    explanation: "eVars (conversion variables) are designed to retain values across hits and visits, making them suitable for tracking user actions over time.\n\neVar(변환 변수)는 여러 히트와 방문에 걸쳐 값을 유지하므로 시간 경과에 따라 사용자의 행동을 추적하는 데 적합합니다."
  },
  {
    id: 43,
    question: "Which metric indicates how often users left the site after viewing only one page?",
    options: {
      A: "Entries",
      B: "Bounce Rate",
      C: "Average Time on Site",
      D: "Exit Rate"
    },
    answer: "B",
    explanation: "Bounce Rate measures the percentage of single-page sessions where users leave without interacting further.\n\nBounce Rate(이탈률)는 사용자가 한 페이지만 보고 사이트를 떠난 세션의 비율을 나타냅니다."
  },
  {
    id: 44,
    question: "Which tool allows users to create ad hoc reports using drag-and-drop functionality?",
    options: {
      A: "Analysis Workspace",
      B: "Report Builder",
      C: "Data Warehouse",
      D: "ClickMap"
    },
    answer: "A",
    explanation: "Analysis Workspace is Adobe Analytics’ primary reporting interface, featuring intuitive drag-and-drop report creation.\n\nAnalysis Workspace는 Adobe Analytics에서 직관적 드래그 앤 드롭으로 보고서를 생성할 수 있는 주요 인터페이스입니다."
  },
  {
    id: 45,
    question: "What is the primary function of a segment in Adobe Analytics?",
    options: {
      A: "Aggregate data for all users",
      B: "Filter data to specific user groups",
      C: "Visualize data trends",
      D: "Store conversion variable values"
    },
    answer: "B",
    explanation: "Segments group and filter users or hits based on defined criteria to allow targeted analysis.\n\n세그먼트는 정의된 기준에 따라 사용자 또는 히트를 그룹화/필터링하여 타겟 분석을 가능하게 합니다."
  },
  {
    id: 46,
    question: "In Analysis Workspace, which panel type allows you to compare the contribution of multiple dimensions and metrics side-by-side with freeform tables and visualizations?",
    options: {
      A: "Cohort Table",
      B: "Freeform",
      C: "Attribution IQ",
      D: "Anomaly Detection"
    },
    answer: "B",
    explanation: "Freeform panels provide flexible, side-by-side comparisons using drag-and-drop tables and visualizations.\n\nFreeform 패널은 드래그 앤 드롭 방식의 표와 시각화를 통해 유연하게 지표와 차원을 나란히 비교할 수 있습니다."
  },
  {
    id: 47,
    question: "Which attribution model in Attribution IQ gives credit to all touchpoints but weights later interactions more heavily than earlier ones?",
    options: {
      A: "First Touch",
      B: "Linear",
      C: "Time Decay",
      D: "Last Touch"
    },
    answer: "C",
    explanation: "Time Decay attribution spreads credit to all qualifying touchpoints but emphasizes those closest to conversion time.\n\nTime Decay 모델은 모든 기여 채널에 점수를 배분하되, 전환에 가까운 시점의 터치포인트에 더 큰 가중치를 둡니다."
  },
  {
    id: 48,
    question: "A business user wants to track retention of users who performed a 'Sign Up' event and returned within 7, 14, and 30 days. Which Workspace feature should they use?",
    options: {
      A: "Fallout",
      B: "Cohort Analysis",
      C: "Flow",
      D: "Anomaly Detection"
    },
    answer: "B",
    explanation: "Cohort Analysis measures user retention and return behavior across time windows such as 7/14/30 days.\n\nCohort 분석은 7/14/30일 등 기간별 사용자 유지율과 재방문 행동을 측정하는 데 사용됩니다."
  },
  {
    id: 49,
    question: "Which statement best describes a Virtual Report Suite (VRS)?",
    options: {
      A: "A permanent copy of the original report suite’s data",
      B: "A filtered view of a single parent report suite using segments and permissions",
      C: "A combined dataset of multiple report suites into one",
      D: "A separate processing pipeline with different data collection beacons"
    },
    answer: "B",
    explanation: "VRS provides a filtered and permission-controlled view of a parent suite without duplicating data.\n\nVRS는 데이터 복제 없이 세그먼트/권한을 적용한 부모 수트의 필터링된 보기입니다."
  },
  {
    id: 50,
    question: "A marketer needs to break down Orders by Marketing Channel and then by Device Type in a single table. What is the most efficient Workspace method?",
    options: {
      A: "Create two separate tables and export to CSV",
      B: "Use Calculated Metrics",
      C: "Apply nested breakdowns directly in a Freeform table",
      D: "Use a Fallout panel"
    },
    answer: "C",
    explanation: "Nested breakdowns in a Freeform table enable multi-level analysis within the same view.\n\nFreeform 표의 중첩 분해를 통해 동일 표에서 다단계 분석을 수행할 수 있습니다."
  },
  {
    id: 51,
    question: "Which metric attribution type ensures that a page dimension receives credit when a success event occurs later in the visit?",
    options: {
      A: "Participation",
      B: "Occurrences",
      C: "Page Views",
      D: "Visits"
    },
    answer: "A",
    explanation: "Participation distributes credit for success events to all related dimension items viewed within the visit.\n\nParticipation은 방문 중 성공 이벤트에 관련된 모든 차원 항목에 기여도를 분배합니다."
  },
  {
    id: 52,
    question: "A Workspace user notices sudden spikes in traffic. Which built-in feature helps determine whether the change is statistically significant and identifies correlated dimensions?",
    options: {
      A: "Attribution IQ",
      B: "Anomaly Detection with Contribution Analysis",
      C: "Cohort Table",
      D: "Calendar Events"
    },
    answer: "B",
    explanation: "Anomaly Detection detects statistically significant deviations; Contribution Analysis suggests correlated factors.\n\nAnomaly Detection은 통계적 이상치를, Contribution Analysis는 연관 요인을 제시합니다."
  },
  {
    id: 53,
    question: "Which component allows you to reuse a commonly applied date range like 'Last 13 Weeks' across multiple Workspace panels?",
    options: {
      A: "Calculated Metric",
      B: "Segment",
      C: "Calendar Preset",
      D: "Panel Drop-down Filter"
    },
    answer: "C",
    explanation: "Calendar presets standardize reusable date ranges for consistent analysis.\n\nCalendar preset을 사용하면 범용 날짜 범위를 표준화해 일관된 분석이 가능합니다."
  },
  {
    id: 54,
    question: "To analyze where users abandon a critical funnel (Home → Product → Cart → Checkout → Order), which visualization is most appropriate?",
    options: {
      A: "Flow",
      B: "Fallout",
      C: "Summary Change",
      D: "Scatterplot"
    },
    answer: "B",
    explanation: "Fallout visualizes stepwise drop-offs and completion rates in funnels.\n\nFallout은 퍼널 단계별 이탈과 완료율을 시각화합니다."
  },
  {
    id: 55,
    question: "Which segment scope would you use to include only hits where 'Internal Search Term' exists and then evaluate success events within the same visit?",
    options: {
      A: "Hit scope only",
      B: "Visit scope with a hit-level condition",
      C: "Visitor scope only",
      D: "Visitor scope with sequential condition"
    },
    answer: "B",
    explanation: "Use a visit-scoped segment filtered by a hit-level condition to analyze outcomes within the same visit.\n\n히트 조건으로 필터링된 방문 범위 세그먼트를 사용하면 동일 방문 내 성과를 평가할 수 있습니다."
  },
  {
    id: 56,
    question: "Which Workspace feature lets you schedule and automatically deliver updated dashboards to stakeholders?",
    options: {
      A: "Download CSV",
      B: "Share Link",
      C: "Scheduled Projects",
      D: "Annotations"
    },
    answer: "C",
    explanation: "Scheduled Projects enable automated distribution of dashboards at defined intervals.\n\nScheduled Projects를 통해 대시보드를 정기적으로 자동 배포할 수 있습니다."
  },
  {
    id: 57,
    question: "A team wants to exclude internal employee traffic from reports but still allow a QA team to view their own behavior. What is the best practice?",
    options: {
      A: "Apply company-wide IP filters only",
      B: "Create a VRS for external traffic and a separate VRS for QA via segments",
      C: "Delete internal hits from the database",
      D: "Use Marketing Channel processing rules"
    },
    answer: "B",
    explanation: "Create VRS views using appropriate segments for external-only and QA traffic.\n\n세그먼트를 적용한 VRS를 분리 구성해 외부/QA 트래픽을 각각 제공합니다."
  },
  {
    id: 58,
    question: "Which model is most appropriate when you want a single touchpoint to receive 100% credit for a conversion that occurs later?",
    options: {
      A: "Linear",
      B: "U-Shaped",
      C: "First Touch or Last Touch",
      D: "Time Decay"
    },
    answer: "C",
    explanation: "First or Last Touch gives full credit to the first or last interaction respectively.\n\nFirst/Last Touch는 최초 또는 최종 접점에 100%의 기여도를 부여합니다."
  },
  {
    id: 59,
    question: "Which Workspace feature helps you quickly pivot a table to show multiple metrics as columns while keeping the same dimension item rows?",
    options: {
      A: "Table Builder: Column Settings (Multiple Metrics)",
      B: "Flow Visualization",
      C: "Segment Stacking",
      D: "Dimension Summary"
    },
    answer: "A",
    explanation: "Use column settings to add multiple metrics side-by-side for the same rows.\n\n컬럼 설정을 사용하면 동일 행에서 여러 지표를 열로 나란히 표시할 수 있습니다."
  },
  {
    id: 60,
    question: "An analyst needs to compare performance between 'Paid Search' and 'Organic Search' across regions while keeping one consistent time filter. What is the most efficient approach?",
    options: {
      A: "Create two separate projects with different date ranges",
      B: "Use a single project with one date range component and multiple segmented tables",
      C: "Export data to Excel and combine",
      D: "Use a Fallout panel"
    },
    answer: "B",
    explanation: "Maintain a single date range and use side-by-side segmented tables for clean comparisons.\n\n하나의 날짜 범위를 공유하고 세그먼트가 적용된 표를 병렬 배치해 비교합니다."
  },
  {
    id: 61,
    question: "Which feature allows you to detect unusual drops or spikes in key KPIs and notify stakeholders automatically?",
    options: {
      A: "Calculated Metrics",
      B: "Intelligent Alerts",
      C: "Segments",
      D: "Workspace Bookmarks"
    },
    answer: "B",
    explanation: "Intelligent Alerts monitor KPIs and send notifications when anomalies occur.\n\nIntelligent Alerts는 KPI 이상 변동을 감지하고 자동 알림을 보냅니다."
  },
  {
    id: 62,
    question: "A product manager asks to visualize the most common next pages after 'Cart'. Which visualization should you select?",
    options: {
      A: "Flow",
      B: "Fallout",
      C: "Summary Number",
      D: "Histogram"
    },
    answer: "A",
    explanation: "Flow visualization shows common next/previous paths from a given node.\n\nFlow는 특정 페이지 이후(또는 이전)의 대표적인 이동 경로를 보여줍니다."
  },
  {
    id: 63,
    question: "Which approach lets you standardize a frequently used success definition (e.g., 'Qualified Lead') across projects and users?",
    options: {
      A: "Create a Calculated Metric and share it",
      B: "Add a note in project description",
      C: "Use a one-off segment in a single table",
      D: "Export the logic to CSV"
    },
    answer: "A",
    explanation: "A shared Calculated Metric enforces consistent definitions across teams and projects.\n\n공유된 계산 지표를 사용하면 조직 전반에서 동일한 정의를 일관되게 적용할 수 있습니다."
  },
  {
    id: 64,
    question: "Which setting helps ensure Workspace trends align to your fiscal calendar rather than the standard Gregorian calendar?",
    options: {
      A: "Marketing Channel override",
      B: "Report Suite calendar settings",
      C: "Panel filter by segment",
      D: "Data Repair API"
    },
    answer: "B",
    explanation: "Report Suite calendar settings allow fiscal calendar configurations used by Workspace.\n\n리포트 수트의 달력 설정에서 회계연도 달력을 구성하면 Workspace 트렌드에 반영됩니다."
  },
  {
    id: 65,
    question: "A stakeholder wants to track the percentage change week-over-week within the same table for multiple KPIs. What is the best method?",
    options: {
      A: "Create a Calculated Metric that uses a time comparison function and apply it to the table",
      B: "Use a separate panel for each KPI",
      C: "Export weekly data and compute in a spreadsheet",
      D: "Rely on Anomaly Detection"
    },
    answer: "A",
    explanation: "Time comparison within Calculated Metrics enables dynamic WoW percentage change in tables.\n\n계산 지표의 시간 비교 기능을 이용하면 표 내에서 주간 대비 증감률을 동적으로 계산할 수 있습니다."
  },
  {
    id: 66,
    question: "Which Adobe Analytics feature allows you to save a custom set of dimensions, metrics, and visualizations for future reuse?",
    options: {
      A: "Project Templates",
      B: "Workspace Bookmarks",
      C: "Calculated Metrics",
      D: "Virtual Report Suites"
    },
    answer: "B",
    explanation: "Workspace Bookmarks let you save a configured view for quick access later.\n\nWorkspace 북마크를 사용하면 설정한 보기(차원, 지표, 시각화 포함)를 저장하여 나중에 쉽게 불러올 수 있습니다."
  },
  {
    id: 67,
    question: "When configuring an eVar, which allocation type ensures that the most recent value overwrites previous values within the same visit?",
    options: {
      A: "Original Value",
      B: "Most Recent",
      C: "Linear Allocation",
      D: "Participation"
    },
    answer: "B",
    explanation: "Most Recent allocation captures and retains the latest value seen in the visit.\n\nMost Recent 할당은 방문 중 마지막으로 수집된 값을 유지합니다."
  },
  {
    id: 68,
    question: "Which Workspace visualization best represents the correlation between two numeric metrics?",
    options: {
      A: "Summary Change",
      B: "Scatterplot",
      C: "Fallout",
      D: "Flow"
    },
    answer: "B",
    explanation: "Scatterplots show the relationship and trend between two numeric metrics.\n\n산점도는 두 개의 수치형 지표 간 관계와 경향을 시각화합니다."
  },
  {
    id: 69,
    question: "In Adobe Analytics, which type of metric can be incremented multiple times during a single hit?",
    options: {
      A: "Counter event",
      B: "Conversion eVar",
      C: "List prop",
      D: "Calculated Metric"
    },
    answer: "A",
    explanation: "Counter events can be incremented multiple times within a hit to track multiple occurrences.\n\n카운터 이벤트는 한 히트 내 여러 번 증가시켜 다중 발생을 추적할 수 있습니다."
  },
  {
    id: 70,
    question: "Which Workspace feature allows you to limit a table's results to the top N items?",
    options: {
      A: "Table Builder: Row Limit",
      B: "Segment Container",
      C: "Dimension Summary",
      D: "Custom Date Ranges"
    },
    answer: "A",
    explanation: "The Row Limit setting restricts displayed rows to the top N results.\n\nRow Limit 설정은 표에 표시되는 상위 N개 결과로 제한합니다."
  },
  {
    id: 71,
    question: "A team wants to compare device types only for users coming from social media campaigns. What is the most efficient method?",
    options: {
      A: "Apply device type breakdown and then filter table by marketing channel",
      B: "Create a segment for social media traffic and apply to the panel",
      C: "Export full dataset and filter in Excel",
      D: "Use Data Warehouse only"
    },
    answer: "B",
    explanation: "Apply a social-media-only segment at panel level to limit all visualizations to that audience.\n\n소셜 미디어 전용 세그먼트를 패널에 적용해 모든 분석을 해당 트래픽으로 한정할 수 있습니다."
  },
  {
    id: 72,
    question: "Which type of metric is stored in a cookie and persists across multiple visits?",
    options: {
      A: "List Variables",
      B: "eVar",
      C: "Prop",
      D: "Counter Event"
    },
    answer: "B",
    explanation: "eVars can persist values across visits using visitor-level storage.\n\neVar는 방문자 단위 저장을 통해 여러 방문에 걸쳐 값을 유지할 수 있습니다."
  },
  {
    id: 73,
    question: "Which Workspace functionality can reveal seasonal trends in data?",
    options: {
      A: "Line Chart with Year-over-Year Comparison",
      B: "Flow Visualization",
      C: "Segment Stacking",
      D: "Fallout"
    },
    answer: "A",
    explanation: "Using YoY comparisons in a line chart highlights seasonal patterns.\n\n선형 차트에서 전년 대비 비교를 사용하면 계절적 패턴을 확인할 수 있습니다."
  },
  {
    id: 74,
    question: "Which component in Workspace enables applying the same filter to multiple panels at once?",
    options: {
      A: "Panel-Level Segment",
      B: "Global Filter Bar",
      C: "Date Range Component",
      D: "Dimension Breakdown"
    },
    answer: "B",
    explanation: "Global filter bar applies a filter to all panels and visualizations in a project.\n\n전역 필터 바를 통해 프로젝트 내 모든 패널과 시각화에 동일한 필터를 적용할 수 있습니다."
  },
  {
    id: 75,
    question: "Which report type is best suited for exporting complete raw data from Adobe Analytics?",
    options: {
      A: "Data Feed",
      B: "Workspace Freeform",
      C: "Report Builder",
      D: "Anomaly Detection"
    },
    answer: "A",
    explanation: "Data Feeds export hit-level raw data for advanced processing.\n\nData Feed는 히트 단위 원시 데이터를 내보내 고급 분석을 가능하게 합니다."
  },
  {
    id: 76,
    question: "What is the primary benefit of using classification in Adobe Analytics?",
    options: {
      A: "Group raw values into meaningful categories",
      B: "Apply calculated metrics",
      C: "Track visits more precisely",
      D: "Filter bot traffic"
    },
    answer: "A",
    explanation: "Classifications allow mapping raw dimension values to organized categories.\n\n분류(Classification)는 원시 차원 값을 구조화된 카테고리로 매핑하는 기능입니다."
  },
  {
    id: 77,
    question: "When using Flow visualization, what does the center column represent?",
    options: {
      A: "Starting point only",
      B: "The selected dimension item or page",
      C: "Exit rate",
      D: "Conversion rate"
    },
    answer: "B",
    explanation: "The middle column is the focal node; flows are shown into and out of it.\n\n가운데 열은 분석 대상 노드이며, 앞뒤 경로 흐름이 표시됩니다."
  },
  {
    id: 78,
    question: "Which Workspace visualization is best for finding the proportion of a metric contributed by different dimension items?",
    options: {
      A: "Horizontal Bar",
      B: "Pie Chart",
      C: "Scatterplot",
      D: "Flow"
    },
    answer: "B",
    explanation: "Pie charts visualize proportions of total metric values per dimension.\n\n파이 차트는 각 차원 항목이 지표에서 차지하는 비율을 보여줍니다."
  },
  {
    id: 79,
    question: "A marketer needs to see a single KPI for multiple ad campaigns in one number per campaign. Which visualization is most suitable?",
    options: {
      A: "Summary Number",
      B: "Flow",
      C: "Fallout",
      D: "Line Chart"
    },
    answer: "A",
    explanation: "Summary Numbers show a single metric value for each item.\n\nSummary Number 시각화는 각 항목에 대한 단일 지표 값을 표시합니다."
  },
  {
    id: 80,
    question: "In classification uploads, which file format is typically accepted by Adobe Analytics?",
    options: {
      A: "CSV",
      B: "JSON",
      C: "XML",
      D: "XLSX"
    },
    answer: "A",
    explanation: "Classifications are usually uploaded using CSV format.\n\n분류(Classification) 데이터는 일반적으로 CSV 형식으로 업로드합니다."
  },
  {
    id: 81,
    question: "Which type of visualization best identifies sudden changes over time in a metric?",
    options: {
      A: "Line Chart",
      B: "Pie Chart",
      C: "Table Builder",
      D: "Cohort Table"
    },
    answer: "A",
    explanation: "Line charts are ideal for spotting spikes or drops in trends.\n\n라인 차트는 추세에서 급등이나 급락을 식별하는 데 유용합니다."
  },
  {
    id: 82,
    question: "What is the primary difference between 'Visits' and 'Unique Visitors' in Adobe Analytics?",
    options: {
      A: "'Visits' count sessions; 'Unique Visitors' count distinct people",
      B: "'Visits' count page views; 'Unique Visitors' count sessions",
      C: "They are the same metric",
      D: "'Visits' are only for marketing traffic"
    },
    answer: "A",
    explanation: "Visits measure the number of sessions, while Unique Visitors count unique individuals.\n\nVisits는 세션 수를, Unique Visitors는 고유 인원 수를 측정합니다."
  },
  {
    id: 83,
    question: "Which eVar expiration setting should be used when you want its value to be kept until a purchase event occurs?",
    options: {
      A: "Visit",
      B: "Never",
      C: "Purchase Event",
      D: "Custom Time Period"
    },
    answer: "C",
    explanation: "Event-level expiration retains eVar value until the specified event (Purchase) occurs.\n\n이벤트 만료 설정은 지정된 이벤트(구매) 발생 시까지 eVar 값을 유지합니다."
  },
  {
    id: 84,
    question: "In Contribution Analysis, what is the main purpose?",
    options: {
      A: "Identify which factors most influenced a change in a metric",
      B: "Visualize user paths",
      C: "Detect anomalies",
      D: "Define attribution models"
    },
    answer: "A",
    explanation: "Contribution Analysis pinpoints dimensions driving metric changes.\n\nContribution Analysis는 지표 변화에 영향을 준 차원을 식별하는 데 사용됩니다."
  },
  {
    id: 85,
    question: "Which feature in Adobe Analytics enables breaking down a single dimension item by multiple other dimensions at once?",
    options: {
      A: "Multiple Breakdown",
      B: "Segment Container",
      C: "Freeform Table Nested Breakdowns",
      D: "Data Warehouse Export"
    },
    answer: "C",
    explanation: "Nested breakdowns allow analyzing an item by more than one dimension.\n\n중첩 분해를 통해 하나의 항목을 여러 차원으로 세부 분석할 수 있습니다."
  },
  {
    id: 86,
    question: "What is the primary purpose of eVars in Adobe Analytics?",
    options: {
      A: "Track page views only",
      B: "Capture and persist custom conversion variables",
      C: "Monitor server performance",
      D: "Store demographic data"
    },
    answer: "B",
    explanation: "eVars are designed to capture custom conversion variables that persist across visits and can be used for attribution analysis.\n\neVar는 방문 간 지속되는 사용자 정의 전환 변수를 캡처하여 기여도 분석에 사용됩니다."
  },
  {
    id: 87,
    question: "Which metric represents the percentage of visits that viewed only one page?",
    options: {
      A: "Exit Rate",
      B: "Bounce Rate", 
      C: "Page Views",
      D: "Single Access"
    },
    answer: "B",
    explanation: "Bounce Rate measures the percentage of single-page visits where visitors leave without viewing additional pages.\n\n이탈률은 추가 페이지를 보지 않고 떠나는 단일 페이지 방문의 비율을 측정합니다."
  },
  {
    id: 88,
    question: "What is the maximum number of success events that can be configured in Adobe Analytics?",
    options: {
      A: "100",
      B: "200", 
      C: "1000",
      D: "Unlimited"
    },
    answer: "C",
    explanation: "Adobe Analytics allows up to 1,000 custom success events (event1-event1000) to be configured.\n\nAdobe Analytics에서는 최대 1,000개의 사용자 정의 성공 이벤트(event1-event1000)를 구성할 수 있습니다."
  },
  {
    id: 89,
    question: "Which attribution model gives 100% credit to the last marketing channel before conversion?",
    options: {
      A: "First Touch",
      B: "Last Touch",
      C: "Linear",
      D: "Time Decay"
    },
    answer: "B",
    explanation: "Last Touch attribution assigns full credit to the final touchpoint before conversion occurs.\n\n라스트 터치 어트리뷰션은 전환 발생 직전의 마지막 터치포인트에 모든 크레딧을 할당합니다."
  },
  {
    id: 90,
    question: "What does the 'Instances' metric represent in Adobe Analytics?",
    options: {
      A: "Total page views",
      B: "Number of times a variable was set",
      C: "Unique visitors count",
      D: "Session duration"
    },
    answer: "B",
    explanation: "Instances counts the number of times a specific variable (prop, eVar, event) was explicitly set or fired.\n\n인스턴스는 특정 변수(prop, eVar, event)가 명시적으로 설정되거나 발생한 횟수를 계산합니다."
  },
  {
    id: 91,
    question: "Which workspace component allows you to compare date ranges side by side?",
    options: {
      A: "Cohort Table",
      B: "Flow Visualization",
      C: "Date Comparison",
      D: "Fallout Visualization"
    },
    answer: "C",
    explanation: "Date Comparison feature enables side-by-side analysis of different time periods within Analysis Workspace.\n\n날짜 비교 기능을 통해 Analysis Workspace에서 서로 다른 기간을 나란히 분석할 수 있습니다."
  },
  {
    id: 92,
    question: "What is the difference between a Hit and a Visit in Adobe Analytics?",
    options: {
      A: "No difference, they are the same",
      B: "Hit is a single server call, Visit is a series of hits in one session",
      C: "Hit counts pages, Visit counts users",
      D: "Hit is monthly, Visit is daily"
    },
    answer: "B",
    explanation: "A Hit represents a single image request to Adobe servers, while a Visit encompasses all hits from one visitor session.\n\n히트는 Adobe 서버에 대한 단일 이미지 요청을 나타내며, 방문은 한 방문자 세션의 모든 히트를 포함합니다."
  },
  {
    id: 93,
    question: "Which feature helps identify where visitors commonly exit your site?",
    options: {
      A: "Flow Visualization",
      B: "Exit Pages report",
      C: "Bounce Rate analysis",
      D: "All of the above"
    },
    answer: "D",
    explanation: "Flow visualization, Exit Pages report, and Bounce Rate analysis all provide insights into visitor exit patterns.\n\n플로우 시각화, 종료 페이지 보고서, 이탈률 분석 모두 방문자 이탈 패턴에 대한 인사이트를 제공합니다."
  },
  {
    id: 94,
    question: "What is the primary purpose of Virtual Report Suites in Adobe Analytics?",
    options: {
      A: "Create backup copies of data",
      B: "Apply segments and settings without affecting raw data",
      C: "Export data to external systems",
      D: "Increase processing speed"
    },
    answer: "B",
    explanation: "Virtual Report Suites allow you to apply segments, date ranges, and processing settings without modifying the underlying data.\n\n가상 보고서 세트를 통해 기본 데이터를 수정하지 않고 세그먼트, 날짜 범위 및 처리 설정을 적용할 수 있습니다."
  },
  {
    id: 95,
    question: "Which dimension would be most appropriate for tracking campaign effectiveness?",
    options: {
      A: "Page URL",
      B: "Browser Type",
      C: "Tracking Code",
      D: "Time Spent"
    },
    answer: "C",
    explanation: "Tracking Code dimension captures campaign identifiers and is specifically designed for measuring campaign performance.\n\n추적 코드 차원은 캠페인 식별자를 캡처하며 캠페인 성과 측정을 위해 특별히 설계되었습니다."
  },
  {
    id: 96,
    question: "What happens when you apply multiple segments to a report?",
    options: {
      A: "Only the first segment is applied",
      B: "Segments are combined using OR logic",
      C: "Segments are combined using AND logic by default",
      D: "Data is averaged across segments"
    },
    answer: "C",
    explanation: "Multiple segments are combined using AND logic, meaning visitors must qualify for all applied segments.\n\n여러 세그먼트는 AND 로직으로 결합되어, 방문자가 적용된 모든 세그먼트 조건을 만족해야 합니다."
  },
  {
    id: 97,
    question: "Which calculated metric function would you use to count unique occurrences of a dimension?",
    options: {
      A: "Sum()",
      B: "Count()",
      C: "Approximate Count Distinct()",
      D: "Average()"
    },
    answer: "C",
    explanation: "Approximate Count Distinct function counts unique values of a dimension, similar to how Unique Visitors works.\n\nApproximate Count Distinct 함수는 고유 방문자와 유사하게 차원의 고유 값을 계산합니다."
  },
  {
    id: 98,
    question: "What is the recommended approach for tracking single-page applications (SPAs)?",
    options: {
      A: "Use standard page view tracking only",
      B: "Implement virtual page views for route changes",
      C: "Disable analytics on SPAs",
      D: "Only track the initial page load"
    },
    answer: "B",
    explanation: "SPAs require virtual page view tracking to capture route changes that don't trigger traditional page loads.\n\nSPA는 기존 페이지 로드를 트리거하지 않는 경로 변경을 캡처하기 위해 가상 페이지 뷰 추적이 필요합니다."
  },
  {
    id: 99,
    question: "Which Analysis Workspace visualization is best for showing customer journey paths?",
    options: {
      A: "Bar Chart",
      B: "Flow Visualization",
      C: "Histogram",
      D: "Scatter Plot"
    },
    answer: "B",
    explanation: "Flow Visualization displays the paths visitors take through your site, making it ideal for journey analysis.\n\n플로우 시각화는 방문자가 사이트를 통과하는 경로를 표시하므로 여정 분석에 이상적입니다."
  },
  {
    id: 100,
    question: "What is the main benefit of using Processing Rules in Adobe Analytics?",
    options: {
      A: "Increase data collection speed",
      B: "Modify or populate variables during data processing",
      C: "Create custom reports",
      D: "Export data automatically"
    },
    answer: "B",
    explanation: "Processing Rules allow you to modify context data and populate analytics variables during the data processing phase.\n\n처리 규칙을 통해 데이터 처리 단계에서 컨텍스트 데이터를 수정하고 분석 변수를 채울 수 있습니다."
  },
  {
    id: 101,
    question: "Which metric should you use to measure the effectiveness of site search functionality?",
    options: {
      A: "Page Views",
      B: "Internal Search Instances",
      C: "Bounce Rate",
      D: "Time on Site"
    },
    answer: "B",
    explanation: "Internal Search Instances specifically tracks how often visitors use your site's search feature.\n\n내부 검색 인스턴스는 방문자가 사이트의 검색 기능을 사용하는 빈도를 구체적으로 추적합니다."
  },
  {
    id: 102,
    question: "What does 'Participation' allocation do for conversion events?",
    options: {
      A: "Credits only the last value",
      B: "Credits only the first value",
      C: "Credits all values in the conversion path",
      D: "Splits credit equally among all values"
    },
    answer: "C",
    explanation: "Participation allocation gives full credit to all values that participated in the conversion path.\n\n참여 할당은 전환 경로에 참여한 모든 값에 전체 크레딧을 부여합니다."
  },
  {
    id: 103,
    question: "Which workspace panel type is specifically designed for cohort analysis?",
    options: {
      A: "Freeform Panel",
      B: "Media Concurrent Viewers Panel",
      C: "Cohort Panel",
      D: "Quick Insights Panel"
    },
    answer: "C",
    explanation: "Cohort Panel is specifically built for retention analysis and tracking user behavior over time periods.\n\n코호트 패널은 리텐션 분석과 시간 경과에 따른 사용자 행동 추적을 위해 특별히 구축되었습니다."
  },
  {
    id: 104,
    question: "What is the maximum number of breakdowns you can apply in a Freeform Table?",
    options: {
      A: "3 levels",
      B: "5 levels", 
      C: "10 levels",
      D: "Unlimited levels"
    },
    answer: "B",
    explanation: "Freeform Tables support up to 5 levels of breakdowns to maintain performance and readability.\n\n자유 형식 테이블은 성능과 가독성을 유지하기 위해 최대 5레벨의 분해를 지원합니다."
  },
  {
    id: 105,
    question: "Which method is recommended for implementing Adobe Analytics on mobile apps?",
    options: {
      A: "Web SDK only",
      B: "Mobile SDK (AEP Mobile SDK)",
      C: "Server-side implementation only",
      D: "Third-party tracking tools"
    },
    answer: "B",
    explanation: "Adobe Experience Platform Mobile SDK is the recommended solution for mobile app analytics implementation.\n\nAdobe Experience Platform Mobile SDK는 모바일 앱 분석 구현을 위한 권장 솔루션입니다."
  },
  {
    id: 106,
    question: "Which of the following are valid eVar allocation settings? (Select all that apply)",
    options: {
      A: "Most Recent (Last)",
      B: "Original Value (First)",
      C: "Linear",
      D: "Participation"
    },
    answer: ["A", "B","C", "D"],
    explanation: "All listed options are valid eVar allocation methods available in Adobe Analytics for attribution analysis.\n\n나열된 모든 옵션은 기여도 분석을 위해 Adobe Analytics에서 사용 가능한 유효한 eVar 할당 방법입니다."
  },
  {
    id: 107,
    question: "You notice that your e-commerce site's conversion rate dropped 20% this week. Your manager asks you to investigate. What steps should you take first in Adobe Analytics?",
    options: {
      A: "Check for tracking code changes or site updates",
      B: "Compare traffic sources week-over-week",
      C: "Analyze the checkout funnel for drop-off points",
      D: "Review mobile vs desktop performance trends"
    },
    answer: "A",
    explanation: "First step should be validating data integrity by checking for implementation changes that could affect tracking accuracy.\n\n첫 번째 단계는 추적 정확도에 영향을 줄 수 있는 구현 변경 사항을 확인하여 데이터 무결성을 검증하는 것입니다."
  },
  {
    id: 108,
    question: "Which components are required to set up goal tracking in Adobe Analytics? (Select all that apply)",
    options: {
      A: "Success Events",
      B: "Conversion Variables (eVars)",
      C: "Processing Rules",
      D: "Segments"
    },
    answer: ["A", "B"],
    explanation: "Success Events and Conversion Variables (eVars) are the core components needed for goal tracking, while Processing Rules and Segments are optional enhancements.\n\n성공 이벤트와 전환 변수(eVar)는 목표 추적에 필요한 핵심 구성 요소이며, 처리 규칙과 세그먼트는 선택적 향상 기능입니다."
  },
  {
    id: 109,
    question: "Your marketing team wants to track video engagement across different campaigns. They need to measure video starts, 25% completion, 50% completion, 75% completion, and video completes. How would you configure this in Adobe Analytics?",
    options: {
      A: "Use 5 separate success events for each milestone",
      B: "Use 1 counter event with different values",
      C: "Use props to capture video percentage",
      D: "Use calculated metrics only"
    },
    answer: "A",
    explanation: "Video milestone tracking requires separate success events for each completion percentage to enable proper funnel analysis and campaign attribution.\n\n비디오 마일스톤 추적은 적절한 퍼널 분석과 캠페인 기여도 분석을 위해 각 완료 비율에 대한 별도의 성공 이벤트가 필요합니다."
  },
  {
    id: 110,
    question: "Which of the following can cause data discrepancies in Adobe Analytics? (Select all that apply)",
    options: {
      A: "Ad blockers",
      B: "JavaScript errors on pages",
      C: "Bot traffic",
      D: "Timezone differences"
    },
    answer: ["A", "B","C", "D"],
    explanation: "All these factors can impact data accuracy: ad blockers prevent tracking, JavaScript errors stop data collection, bot traffic inflates metrics, and timezone differences affect reporting periods.\n\n이 모든 요소가 데이터 정확성에 영향을 줄 수 있습니다: 광고 차단기는 추적을 방해하고, JavaScript 오류는 데이터 수집을 중단시키며, 봇 트래픽은 지표를 부풀리고, 시간대 차이는 보고 기간에 영향을 줍니다."
  },
  {
    id: 111,
    question: "A retail client wants to understand which products are frequently viewed together. They have product data in eVar5 and want to create a cross-sell analysis. What approach would you recommend?",
    options: {
      A: "Use Flow visualization with product dimension",
      B: "Create a segment for product viewers and analyze next page views",
      C: "Set up a calculated metric for product correlation",
      D: "Use Fallout visualization"
    },
    answer: "A",
    explanation: "Flow visualization can show the path between different products, revealing which products are commonly viewed in sequence.\n\n플로우 시각화는 서로 다른 제품 간의 경로를 보여주어 어떤 제품들이 순차적으로 조회되는지 알 수 있습니다."
  },
  {
    id: 112,
    question: "Which of the following are benefits of using Virtual Report Suites? (Select all that apply)",
    options: {
      A: "Apply permanent data filtering",
      B: "Test different attribution models",
      C: "Create custom calendar definitions",
      D: "Isolate specific user segments"
    },
    answer: "B,C,D",
    explanation: "Virtual Report Suites allow testing attribution models, custom calendars, and segment isolation. They don't permanently filter raw data, just the view of it.\n\n가상 보고서 세트는 기여도 모델 테스트, 사용자 정의 캘린더, 세그먼트 격리를 허용합니다. 원시 데이터를 영구적으로 필터링하지는 않고 단지 보기만 필터링합니다."
  },
  {
    id: 113,
    question: "Your company launched a new mobile app and wants to track user engagement. The product manager asks: 'How many users opened the app more than 5 times in their first week?' How would you build this analysis?",
    options: {
      A: "Create a segment for new users, then filter by app launches > 5",
      B: "Use Cohort analysis with app launch as the inclusion event",
      C: "Build a calculated metric dividing visits by unique visitors",
      D: "Use Flow visualization starting from first app open"
    },
    answer: "B",
    explanation: "Cohort analysis is designed to track user behavior over specific time periods after an initial action, perfect for first-week engagement tracking.\n\n코호트 분석은 초기 액션 이후 특정 기간 동안의 사용자 행동을 추적하도록 설계되어 첫 주 참여도 추적에 완벽합니다."
  },
  {
    id: 114,
    question: "Which workspace features help ensure report accuracy and reliability? (Select all that apply)",
    options: {
      A: "Data validation using segments",
      B: "Date range annotations",
      C: "Attribution panel comparisons",
      D: "Calculated metric testing"
    },
    answer: ["A", "B","C", "D"],
    explanation: "All these features contribute to report accuracy: segments validate data quality, annotations provide context, attribution panels compare models, and calculated metrics need testing.\n\n이 모든 기능이 보고서 정확성에 기여합니다: 세그먼트는 데이터 품질을 검증하고, 주석은 맥락을 제공하며, 기여도 패널은 모델을 비교하고, 계산된 지표는 테스트가 필요합니다."
  },
  {
    id: 115,
    question: "A SaaS company wants to track feature adoption across different user tiers (Free, Pro, Enterprise). They implemented custom events for each feature use. What's the best way to analyze feature adoption rates by user tier?",
    options: {
      A: "Create separate reports for each user tier",
      B: "Use eVar for user tier and breakdown feature events by it",
      C: "Use props for both user tier and features",
      D: "Implement calculated metrics for each combination"
    },
    answer: "B",
    explanation: "Using eVar for user tier enables persistent tracking and allows breaking down feature events by user segment for comprehensive adoption analysis.\n\n사용자 계층에 eVar를 사용하면 지속적인 추적이 가능하고 기능 이벤트를 사용자 세그먼트별로 분해하여 포괄적인 도입 분석을 할 수 있습니다."
  },
  {
    id: 116,
    question: "Which Attribution IQ models are available in Adobe Analytics? (Select all that apply)",
    options: {
      A: "Linear",
      B: "Time Decay",
      C: "U-Shaped",
      D: "Algorithmic"
    },
    answer: ["A", "B","C", "D"],
    explanation: "Adobe Analytics Attribution IQ includes all these models: Linear distributes credit equally, Time Decay gives more credit to recent touchpoints, U-Shaped credits first and last, and Algorithmic uses machine learning.\n\nAdobe Analytics Attribution IQ에는 이 모든 모델이 포함됩니다: Linear는 크레딧을 균등하게 분배하고, Time Decay는 최근 터치포인트에 더 많은 크레딧을 주며, U-Shaped는 첫 번째와 마지막에 크레딧을 주고, Algorithmic은 머신러닝을 사용합니다."
  },
  {
    id: 117,
    question: "You're analyzing a sudden spike in bounce rate on your homepage. Visitors increased 40% but engagement dropped significantly. Your stakeholders want to understand why. What analysis approach would provide the most actionable insights?",
    options: {
      A: "Segment by traffic source and compare bounce rates",
      B: "Check page load times and technical metrics",
      C: "Analyze mobile vs desktop performance separately",
      D: "All of the above in a systematic approach"
    },
    answer: "D",
    explanation: "A comprehensive analysis requires examining traffic sources, technical performance, and device differences to identify the root cause of engagement issues.\n\n포괄적인 분석을 위해서는 참여도 문제의 근본 원인을 파악하기 위해 트래픽 소스, 기술적 성능, 기기 차이를 모두 검토해야 합니다."
  },
  {
    id: 118,
    question: "Which of the following require careful consideration when setting up cross-domain tracking? (Select all that apply)",
    options: {
      A: "Visitor ID service configuration",
      B: "Cookie domain settings",
      C: "Referrer header handling",
      D: "SSL certificate consistency"
    },
    answer: ["A", "B", "C"],
    explanation: "Cross-domain tracking requires proper Visitor ID service setup, correct cookie domain configuration, and referrer header management. SSL certificates don't directly impact tracking.\n\n크로스 도메인 추적에는 적절한 방문자 ID 서비스 설정, 올바른 쿠키 도메인 구성, 리퍼러 헤더 관리가 필요합니다. SSL 인증서는 추적에 직접적인 영향을 주지 않습니다."
  },
  {
    id: 119,
    question: "A content publisher wants to measure article engagement beyond page views. They ask: 'Which articles keep readers engaged the longest and drive the most social shares?' How would you structure this analysis?",
    options: {
      A: "Use Time Spent on Page and Social Media referrals only",
      B: "Create a calculated metric combining time spent, scroll depth, and social events",
      C: "Focus on bounce rate analysis by article",
      D: "Use page views as the primary metric"
    },
    answer: "B",
    explanation: "A comprehensive engagement analysis requires multiple metrics combined into a calculated metric that reflects true reader engagement beyond simple page views.\n\n포괄적인 참여도 분석에는 단순한 페이지 뷰를 넘어 실제 독자 참여를 반영하는 여러 지표를 계산된 지표로 결합해야 합니다."
  },
  {
    id: 120,
    question: "Which workspace visualizations are best for time-series analysis? (Select all that apply)",
    options: {
      A: "Line Chart",
      B: "Area Chart",
      C: "Cohort Table",
      D: "Flow Visualization"
    },
    answer: ["A", "B", "C"],
    explanation: "Line charts, area charts, and cohort tables effectively show trends over time. Flow visualization shows paths but not time-series trends.\n\n선 차트, 영역 차트, 코호트 테이블은 시간 경과에 따른 트렌드를 효과적으로 보여줍니다. 플로우 시각화는 경로를 보여주지만 시계열 트렌드는 보여주지 않습니다."
  },
  {
    id: 121,
    question: "A B2B company runs account-based marketing campaigns. They want to track: 'How many target accounts engaged with our content in the last quarter, and what was their journey?' You have company domain in eVar10. What analysis framework would you recommend?",
    options: {
      A: "Create company domain segments and use Flow visualization",
      B: "Use Fallout analysis with company domains",
      C: "Build cohort analysis by company engagement",
      D: "Focus on individual visitor journey only"
    },
    answer: "A",
    explanation: "Company domain segments combined with Flow visualization provides the clearest view of account-level engagement patterns and customer journey paths.\n\n회사 도메인 세그먼트와 플로우 시각화를 결합하면 계정 수준의 참여 패턴과 고객 여정 경로를 가장 명확하게 볼 수 있습니다."
  },
  {
    id: 122,
    question: "Which of the following can be used as containers in Adobe Analytics segments? (Select all that apply)",
    options: {
      A: "Hit",
      B: "Visit",
      C: "Visitor",
      D: "Page View"
    },
    answer: ["A", "B", "C"],
    explanation: "Adobe Analytics supports Hit, Visit, and Visitor containers for segmentation. Page View is a metric, not a container type.\n\nAdobe Analytics는 세그먼테이션을 위해 히트, 방문, 방문자 컨테이너를 지원합니다. 페이지 뷰는 지표이지 컨테이너 유형이 아닙니다."
  },
  {
    id: 123,
    question: "Your SaaS platform shows that trial-to-paid conversion decreased from 15% to 8% over two months. The CEO wants to understand what changed. You have trial start date, user properties, and feature usage data. What analysis sequence would provide the most insights?",
    options: {
      A: "Analyze trial user cohorts by start month and compare feature engagement patterns",
      B: "Look at overall traffic trends only",
      C: "Focus on payment page abandonment",
      D: "Compare marketing campaign performance"
    },
    answer: "A",
    explanation: "Cohort analysis by trial start month, combined with feature engagement comparison, reveals behavioral changes between high-converting and low-converting user groups.\n\n체험 시작 월별 코호트 분석과 기능 참여도 비교를 통해 높은 전환율과 낮은 전환율 사용자 그룹 간의 행동 변화를 파악할 수 있습니다."
  },
  {
    id: 124,
    question: "Which data processing features can modify data before it appears in reports? (Select all that apply)",
    options: {
      A: "Processing Rules",
      B: "VISTA Rules",
      C: "Marketing Channel Rules",
      D: "Classification Rules"
    },
    answer: ["A", "B", "C"],
    explanation: "Processing Rules, VISTA Rules, and Marketing Channel Rules all modify data during processing. Classification Rules organize data but don't modify the original values.\n\n처리 규칙, VISTA 규칙, 마케팅 채널 규칙은 모두 처리 중에 데이터를 수정합니다. 분류 규칙은 데이터를 정리하지만 원래 값을 수정하지는 않습니다."
  },
  {
    id: 125,
    question: "An education platform wants to identify at-risk students. They define at-risk as: 'Students who had high initial engagement (>10 course interactions in week 1) but then showed declining activity (50% drop in week 3).' How would you build this analysis?",
    options: {
      A: "Create two segments and use intersection logic",
      B: "Use sequential segmentation with time-based conditions",
      C: "Build a calculated metric for engagement decline",
      D: "Use cohort analysis with custom metrics"
    },
    answer: "B",
    explanation: "Sequential segmentation with time-based conditions allows you to define users who meet criteria in week 1 AND then show different behavior in week 3.\n\n시간 기반 조건이 있는 순차적 세그먼테이션을 통해 1주차에 조건을 만족하고 3주차에 다른 행동을 보이는 사용자를 정의할 수 있습니다."
  }
];
