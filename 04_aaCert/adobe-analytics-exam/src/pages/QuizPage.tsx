import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { questions as allQuestions } from '../data/questions';
import { getRandomQuestions, shuffleOptions, convertAnswer } from '../utils/quizUtils';

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30분
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(() => {
    const selectedQuestions = getRandomQuestions(allQuestions, 25);
    return selectedQuestions.map(q => ({
      ...q,
      shuffledOptions: shuffleOptions(q.options),
      shuffledAnswer: convertAnswer(q.answer, shuffleOptions(q.options))
    }));
  });
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string[] }>({});

  const currentQuestion = quizQuestions[currentQuestionIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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

  useEffect(() => {
    // 현재 문제의 저장된 답변이 있으면 불러오기
    if (userAnswers[currentQuestionIndex]) {
      setSelectedAnswers(userAnswers[currentQuestionIndex]);
    } else {
      setSelectedAnswers([]);
    }
  }, [currentQuestionIndex, userAnswers]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (value: string) => {
    const newAnswers = [value];
    setSelectedAnswers(newAnswers);
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: newAnswers
    }));
  };

  const handleMultipleAnswerChange = (value: string) => {
    const newAnswers = selectedAnswers.includes(value)
      ? selectedAnswers.filter(v => v !== value)
      : [...selectedAnswers, value];
    setSelectedAnswers(newAnswers);
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: newAnswers
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      setShowConfirmDialog(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
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
      timeSpent: 30 * 60 - timeLeft,
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">
            문제 {currentQuestionIndex + 1} / {quizQuestions.length}
          </Typography>
          <Typography variant="h6" color={timeLeft < 300 ? 'error' : 'inherit'}>
            남은 시간: {formatTime(timeLeft)}
          </Typography>
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

          <FormControl component="fieldset" sx={{ width: '100%' }}>
            {Array.isArray(currentQuestion.shuffledAnswer) ? (
              <FormGroup>
                {Object.entries(currentQuestion.shuffledOptions || {}).map(([key, value]) => (
                  <FormControlLabel
                    key={key}
                    control={
                      <Checkbox
                        checked={selectedAnswers.includes(key)}
                        onChange={() => handleMultipleAnswerChange(key)}
                      />
                    }
                    label={value}
                  />
                ))}
              </FormGroup>
            ) : (
              <RadioGroup
                value={selectedAnswers[0] || ''}
                onChange={(e) => handleAnswerChange(e.target.value)}
              >
                {Object.entries(currentQuestion.shuffledOptions || {}).map(([key, value]) => (
                  <FormControlLabel
                    key={key}
                    value={key}
                    control={<Radio />}
                    label={value}
                  />
                ))}
              </RadioGroup>
            )}
          </FormControl>

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
              onClick={() => setShowExplanation(!showExplanation)}
              sx={{ mr: 1 }}
            >
              {showExplanation ? '해설 숨기기' : '해설 보기'}
            </Button>
            {currentQuestionIndex > 0 && (
              <Button
                variant="outlined"
                onClick={handlePrevious}
              >
                이전 문제
              </Button>
            )}
          </Box>
          <Button
            variant="contained"
            onClick={handleNext}
          >
            {currentQuestionIndex === quizQuestions.length - 1 ? '완료' : '다음 문제'}
          </Button>
        </Box>
      </Box>

      <Dialog
        open={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
      >
        <DialogTitle>퀴즈 완료</DialogTitle>
        <DialogContent>
          <Typography>
            모든 문제를 풀었습니다. 결과를 확인하시겠습니까?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowConfirmDialog(false)}>계속하기</Button>
          <Button onClick={handleFinish} variant="contained">
            결과 보기
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default QuizPage; 