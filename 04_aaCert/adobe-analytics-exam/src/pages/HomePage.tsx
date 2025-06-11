import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button, 
  Box,
  Paper
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('홈페이지에 진입했습니다.');
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Adobe Analytics 인증 시험 모의고사
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          AD0-E213 인증 시험 준비를 위한 모의고사
        </Typography>
        
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="body1" sx={{ mb: 3 }}>
            총 25문제, 제한시간 30분
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<AssignmentIcon />}
              onClick={() => navigate('/quiz')}
              sx={{ minWidth: 200 }}
            >
              문제 풀기
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<AssessmentIcon />}
              onClick={() => navigate('/results')}
              sx={{ minWidth: 200 }}
            >
              결과 보기
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default HomePage; 