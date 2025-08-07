import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Paper,
  LinearProgress,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { questionsAD0E213 } from '../data/questionsAD0E213';
import { questionsAD0E209 } from '../data/questionsAD0E209';
import { getRandomQuestions, shuffleOptions, convertAnswer } from '../utils/quizUtils';

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const questionCount = location.state?.questionCount || 25;
  const certification = location.state?.certification || 'AD0-E213';
  
  // 시간 설정
  const getTimeLimit = (count: number) => {
    switch (count) {
      case 5: return 7 * 60; // 7분
      case 50: return 60 * 60; // 60분
      default: return 30 * 60; // 30분
    }
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLimit(questionCount));
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(() => {
    const allQuestions = certification === 'AD0-E213' ? questionsAD0E213 : questionsAD0E209;
    const selectedQuestions = getRandomQuestions(allQuestions, questionCount);
    return selectedQuestions.map(q => ({
      ...q,
      shuffledOptions: shuffleOptions(q.options),
      shuffledAnswer: convertAnswer(q.answer, shuffleOptions(q.options))
    }));
  });
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string[] }>({});

  const currentQuestion = quizQuestions[currentQuestionIndex];

  useEffect(() => {
    // 퀴즈 페이지 진입 시 타이틀 변경
    const certTitle = certification === 'AD0-E213' ? 'Adobe Analytics Developer Professional' : 'Adobe Analytics Developer Expert';
    document.title = `[${certification}] ${certTitle} 모의고사 - 문제 ${currentQuestionIndex + 1}/${quizQuestions.length}`;
  }, [certification, currentQuestionIndex, quizQuestions.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerChange = (value: string) => {
    let newAnswers: string[];
    
    if (Array.isArray(currentQuestion.shuffledAnswer)) {
      // 복수 선택인 경우 (체크박스)
      newAnswers = selectedAnswers.includes(value)
        ? selectedAnswers.filter(v => v !== value)
        : [...selectedAnswers, value];
    } else {
      // 단일 선택인 경우 (라디오 버튼)
      newAnswers = [value];
    }
    
    setSelectedAnswers(newAnswers);
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: newAnswers
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswers(userAnswers[currentQuestionIndex + 1] || []);
      setShowExplanation(false);
    } else {
      setShowConfirmDialog(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswers(userAnswers[currentQuestionIndex - 1] || []);
    }
  };

  const handleFinish = () => {
    const results = {
      totalQuestions: quizQuestions.length,
      answeredQuestions: Object.keys(userAnswers).length,
      correctAnswers: quizQuestions.reduce((count, q, index) => {
        const userAnswer = userAnswers[index]?.sort().join(',') || '';
        const correctAnswer = Array.isArray(q.shuffledAnswer) 
          ? q.shuffledAnswer.sort().join(',')
          : q.shuffledAnswer;
        return count + (userAnswer === correctAnswer ? 1 : 0);
      }, 0),
      timeSpent: getTimeLimit(questionCount) - timeLeft,
      certification: certification,
      questions: quizQuestions.map((q, index) => ({
        question: q.question,
        userAnswer: userAnswers[index] || [],
        correctAnswer: q.shuffledAnswer,
        isCorrect: (userAnswers[index]?.sort().join(',') || '') === (
          Array.isArray(q.shuffledAnswer) 
            ? q.shuffledAnswer.sort().join(',')
            : q.shuffledAnswer
        ),
        explanation: q.explanation,
        shuffledOptions: q.shuffledOptions
      }))
    };

    localStorage.setItem('quizResults', JSON.stringify(results));
    navigate('/results');
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (isTimeUp) {
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            시간이 종료되었습니다!
          </Typography>
          <Button variant="contained" onClick={handleFinish}>
            결과 보기
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            {certification === 'AD0-E213' ? 'Adobe Analytics Developer Professional' : 'Adobe Analytics Developer Expert'}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {certification} 모의고사
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">
            문제 {currentQuestionIndex + 1} / {quizQuestions.length}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h6" color={timeLeft < 300 ? 'error' : 'inherit'}>
              남은 시간: {formatTime(timeLeft)}
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => navigate('/')}
            >
              처음 화면으로
            </Button>
          </Box>
        </Box>
        
        <LinearProgress 
          variant="determinate" 
          value={(currentQuestionIndex + 1) / quizQuestions.length * 100} 
          sx={{ mb: 3 }}
        />

        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            {currentQuestion.question}
          </Typography>

          {Array.isArray(currentQuestion.shuffledAnswer) ? (
            // 복수 선택인 경우 체크박스 사용
            <FormGroup>
              {Object.entries(currentQuestion.shuffledOptions || {}).map(([key, value]) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox
                      checked={selectedAnswers.includes(key)}
                      onChange={() => handleAnswerChange(key)}
                    />
                  }
                  label={value as string}
                />
              ))}
            </FormGroup>
          ) : (
            // 단일 선택인 경우 라디오 버튼 사용
            <RadioGroup
              value={selectedAnswers[0] || ''}
              onChange={(e) => handleAnswerChange(e.target.value)}
            >
              {Object.entries(currentQuestion.shuffledOptions || {}).map(([key, value]) => (
                <FormControlLabel
                  key={key}
                  value={key}
                  control={<Radio />}
                  label={value as string}
                />
              ))}
            </RadioGroup>
          )}

          {showExplanation && (
            <Alert severity="info" sx={{ mt: 2 }}>
              {currentQuestion.explanation}
            </Alert>
          )}
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Button
              variant="outlined"
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              sx={{ mr: 1 }}
            >
              이전
            </Button>
            <Button
              variant="outlined"
              onClick={() => setShowExplanation(!showExplanation)}
            >
              {showExplanation ? '해설 숨기기' : '해설 보기'}
            </Button>
          </Box>
          <Button
            variant="contained"
            onClick={handleNextQuestion}
            disabled={selectedAnswers.length === 0}
          >
            {currentQuestionIndex === quizQuestions.length - 1 ? '완료' : '다음'}
          </Button>
        </Box>
      </Box>

      <Dialog
        open={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
      >
        <DialogTitle>시험 종료</DialogTitle>
        <DialogContent>
          <Typography>
            시험을 종료하시겠습니까?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowConfirmDialog(false)}>
            취소
          </Button>
          <Button onClick={handleFinish} color="primary">
            종료
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default QuizPage; 