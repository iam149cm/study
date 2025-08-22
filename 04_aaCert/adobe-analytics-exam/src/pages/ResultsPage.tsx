import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  CircularProgress,
  IconButton,
  Collapse,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import confetti from 'canvas-confetti';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useGTM from '../utils/useGTM';

interface QuizResult {
  totalQuestions: number;
  answeredQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  certification?: string;
  questions: {
    question: string;
    userAnswer: string[];
    correctAnswer: string | string[];
    isCorrect: boolean;
    explanation?: string;
    shuffledOptions?: { [key: string]: string };
  }[];
}

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const { trackButtonClick, trackPageView, trackCustomEvent } = useGTM();
  const [results, setResults] = useState<QuizResult | null>(null);
  const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>({});
  const [showNoResultsModal, setShowNoResultsModal] = useState(false);

  useEffect(() => {
    console.log('결과 페이지에 진입했습니다.');
    // 결과 페이지 타이틀 설정
    document.title = 'Adobe Analytics 모의고사 결과';
    
    // GTM 페이지뷰 추적
    trackPageView({
      page_name: '/results',
      page_title: 'Adobe Analytics 모의고사 결과'
    });
  }, [trackPageView]);

  const fireConfetti = useCallback(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // 왼쪽에서 폭죽
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });

      // 오른쪽에서 폭죽
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  }, []);

  useEffect(() => {
    const savedResults = localStorage.getItem('quizResults');
    if (!savedResults) {
      setShowNoResultsModal(true);
      return;
    }
    
    const parsedResults = JSON.parse(savedResults);
    setResults(parsedResults);
    
    const score = (parsedResults.correctAnswers / parsedResults.totalQuestions) * 100;
    if (score >= 70) {
      fireConfetti();
    }
    
    // GTM 결과 페이지 로드 추적
    trackCustomEvent('results_page_loaded', {
      total_questions: parsedResults.totalQuestions,
      correct_answers: parsedResults.correctAnswers,
      score_percentage: Math.round(score),
      time_spent: parsedResults.timeSpent,
      certification: parsedResults.certification
    });
  }, [fireConfetti, trackCustomEvent]);

  const toggleRow = (index: number) => {
    setExpandedRows(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
    
    // GTM 문제 상세 보기 추적
    trackButtonClick({
      name: expandedRows[index] ? 'hide_question_detail' : 'show_question_detail',
      category: 'interaction',
      location: 'results_page',
      additionalData: {
        question_number: index + 1
      }
    });
  };

  const handleCloseModal = () => {
    setShowNoResultsModal(false);
    
    // GTM 모달 닫기 추적
    trackButtonClick({
      name: 'close_no_results_modal',
      category: 'interaction',
      location: 'results_page'
    });
    
    navigate('/');
  };

  if (!results) {
    return (
      <>
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        </Container>
        <Dialog
          open={showNoResultsModal}
          onClose={handleCloseModal}
        >
          <DialogTitle>알림</DialogTitle>
          <DialogContent>
            <Typography>
              아직 시험을 응시하지 않았습니다. 시험을 먼저 응시해주세요.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={handleCloseModal} 
              color="primary"
            >
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  const score = Math.round((results.correctAnswers / results.totalQuestions) * 100);
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}분 ${remainingSeconds}초`;
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          퀴즈 결과
        </Typography>
        
        {results.certification && (
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h5" gutterBottom>
              {results.certification === 'AD0-E213' ? 'Adobe Analytics Developer Professional' : 'Adobe Analytics Developer Expert'}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {results.certification} 모의고사 결과
            </Typography>
          </Box>
        )}
        
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                점수
              </Typography>
              <Typography variant="h3" color={score >= 70 ? 'success.main' : 'error.main'}>
                {score}%
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                정답 수
              </Typography>
              <Typography variant="h3">
                {results.correctAnswers} / {results.totalQuestions}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                소요 시간
              </Typography>
              <Typography variant="h3">
                {formatTime(results.timeSpent)}
              </Typography>
            </Box>
          </Box>
        </Paper>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width="50px" />
                <TableCell>문제</TableCell>
                <TableCell>정답 여부</TableCell>
                <TableCell>사용자 답변</TableCell>
                <TableCell>정답</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.questions.map((q, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={() => toggleRow(index)}
                      >
                        {expandedRows[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </TableCell>
                    <TableCell>{q.question}</TableCell>
                    <TableCell>
                      <Chip 
                        label={q.isCorrect ? "정답" : "오답"} 
                        color={q.isCorrect ? "success" : "error"}
                      />
                    </TableCell>
                    <TableCell>
                      {Array.isArray(q.userAnswer) ? q.userAnswer.join(', ') : q.userAnswer}
                    </TableCell>
                    <TableCell>
                      {Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                      <Collapse in={expandedRows[index]} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 2 }}>
                          <Typography variant="subtitle1" gutterBottom component="div">
                            정답
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {Object.entries(q.shuffledOptions || {}).map(([key, value]) => {
                              const isCorrect = Array.isArray(q.correctAnswer) 
                                ? q.correctAnswer.includes(key)
                                : q.correctAnswer === key;
                              return isCorrect ? value : null;
                            }).filter(Boolean).join(', ')}
                          </Typography>
                          <Typography variant="subtitle1" gutterBottom component="div">
                            해설
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-wrap' }}>
                            {q.explanation || "해설이 없습니다."}
                          </Typography>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button 
            variant="contained" 
            onClick={() => {
              trackButtonClick({
                name: 'go_home_from_results',
                category: 'navigation',
                location: 'results_page'
              });
              navigate('/');
            }}
            sx={{ mr: 2 }}
          >
            홈으로
          </Button>
          <Button 
            variant="outlined" 
            onClick={() => {
              trackButtonClick({
                name: 'retake_quiz',
                category: 'navigation',
                location: 'results_page'
              });
              navigate('/quiz');
            }}
          >
            다시 풀기
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ResultsPage; 