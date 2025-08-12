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
    explanation: "Analysis Workspace is the core analysis tool in Adobe Analytics that allows business users to perform analysis freely using drag-and-drop functionality."
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
    explanation: "Dimensions are criteria for classifying data (e.g., pages, products, regions), while Metrics are values being measured (e.g., visitors, revenue, conversion rate)."
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
    explanation: "Segments are used to separate user groups that meet specific conditions for analysis, filter data, and perform comparative analysis with other groups."
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
    explanation: "Conversion Funnel analysis aims to identify at which stage users drop off in the process toward goal conversion to find improvement opportunities."
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
    explanation: "Attribution models determine how to distribute the value of multiple marketing channels that contributed to user conversion."
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
    explanation: "Calculated Metrics are used to create new metrics that are more meaningful to business by combining existing metrics (e.g., conversion rate, average order value)."
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
    explanation: "Cohort Analysis is primarily used to analyze retention rates over time for user groups acquired during specific periods to understand user behavior patterns."
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
    explanation: "Flow Analysis visually shows how users move through a website, making it easy to understand user journeys."
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
    explanation: "Alert functionality detects abnormal data changes (e.g., traffic spikes, conversion rate drops) based on set thresholds and provides immediate notifications."
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
    explanation: "When sharing Workspace Projects, it's important to set access permissions, ensure data security, and add clear project descriptions."
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
    explanation: "Real-Time Reports show real-time data but have limited advanced analysis features such as segments, calculated metrics, and complex filtering."
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
    explanation: "Data Warehouse can process much larger amounts of data compared to regular reports, making it suitable for large-scale data analysis."
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
    explanation: "Anomaly Detection uses statistical algorithms to automatically detect abnormal data patterns, greatly reducing manual analysis time."
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
    explanation: "Breakdown functionality allows detailed analysis by segmenting specific metrics by other dimensions. For example, revenue can be classified by product or region."
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
    explanation: "Workspace Templates apply consistent analysis methodology within organizations and provide reusable analysis frameworks to improve analysis efficiency."
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
    explanation: "When writing Calculated Metrics formulas, data types of metrics must be consistent, and appropriate conversion is needed when mixing numbers and percentages."
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
    explanation: "Segment Comparison is used to understand behavior pattern differences between different user groups (e.g., new vs existing customers, mobile vs desktop users)."
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
    explanation: "Freeform Table provides various analysis features including drag and drop, sorting/filtering, segment creation, and conditional formatting."
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
    explanation: "Attribution IQ is an advanced feature that allows comparison analysis of various attribution models such as First Touch, Last Touch, Linear, and Time Decay."
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
    explanation: "Visualization tools express complex data through charts, graphs, heatmaps, etc., making data easy to understand intuitively."
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
    explanation: "Data Sources enable more comprehensive analysis by integrating external data such as CRM data and offline data with Adobe Analytics data."
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
    explanation: "Advanced Functions support various mathematical and logical functions such as SUM, AVERAGE, COUNT, IF, and CASE."
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
    explanation: "Retention Rate represents the percentage of users who return after a specific period among users acquired during that period."
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
    explanation: "Fallout Visualization visually shows at which point users drop off in each step of the conversion funnel to identify improvement opportunities."
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
    explanation: "Histograms visually show data distribution patterns, making it easy to identify outliers or data concentration."
  }
];
