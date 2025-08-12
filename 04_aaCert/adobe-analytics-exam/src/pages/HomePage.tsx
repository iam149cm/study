import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button, 
  Box,
  Paper,
  Card,
  CardContent,
  CardActions,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedQuestionCount, setSelectedQuestionCount] = React.useState<number>(25);
  const [selectedCertification, setSelectedCertification] = React.useState<string>('AD0-E213');

  useEffect(() => {
    console.log('홈페이지에 진입했습니다.');
    // 기본 타이틀 설정
    document.title = 'Adobe Analytics 자격증 시험 모의고사';
  }, []);

  useEffect(() => {
    // 선택된 자격증에 따라 타이틀 변경
    const certInfo = getCertificationInfo(selectedCertification);
    document.title = `[${selectedCertification}] ${certInfo.title} 인증 시험 모의고사`;
  }, [selectedCertification]);

  const handleQuestionCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedQuestionCount(Number(event.target.value));
  };

  const handleCertificationChange = (event: React.MouseEvent<HTMLElement>, newCertification: string) => {
    if (newCertification !== null) {
      setSelectedCertification(newCertification);
    }
  };

  const handleStartQuiz = () => {
    navigate('/quiz', { 
      state: { 
        questionCount: selectedQuestionCount,
        certification: selectedCertification
      } 
    });
  };

  const handleViewResults = () => {
    navigate('/results');
  };

  const getCertificationInfo = (cert: string) => {
    switch (cert) {
      case 'AD0-E213':
        return {
          title: 'Adobe Analytics Developer Professional',
          description: 'Adobe Analytics 구현 및 개발 전문가 자격증',
          focus: '구현, 개발, 기술적 측면'
        };
      case 'AD0-E209':
        return {
          title: 'Adobe Analytics Developer Expert',
          description: 'Adobe Analytics 개발자 전문가 (고급) 자격증',
          focus: '고급 구현, 서버사이드 추적, API, 고급 분석'
        };
      case 'AD0-E208':
        return {
          title: 'Adobe Analytics Business Practitioner Expert',
          description: 'Adobe Analytics 비즈니스 실무 전문가 자격증',
          focus: '비즈니스 분석, 리포트 작성, 데이터 해석, 실무 활용'
        };
      default:
        return {
          title: '',
          description: '',
          focus: ''
        };
    }
  };

  const certInfo = getCertificationInfo(selectedCertification);

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Adobe Analytics 자격증 시험 모의고사
        </Typography>
        
        <Card sx={{ mt: 4, mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              자격증 선택
            </Typography>
            
            <ToggleButtonGroup
              value={selectedCertification}
              exclusive
              onChange={handleCertificationChange}
              aria-label="자격증 선택"
              sx={{ mb: 3 }}
            >
              <ToggleButton value="AD0-E213" aria-label="AD0-E213" sx={{ minWidth: 200 }}>
                <Box sx={{ textAlign: 'center', p: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    AD0-E213
                  </Typography>
                  <Typography variant="caption" display="block">
                    Developer Professional
                  </Typography>
                </Box>
              </ToggleButton>
              <ToggleButton value="AD0-E209" aria-label="AD0-E209" sx={{ minWidth: 200 }}>
                <Box sx={{ textAlign: 'center', p: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    AD0-E209
                  </Typography>
                  <Typography variant="caption" display="block">
                    Developer Expert
                  </Typography>
                </Box>
              </ToggleButton>
              <ToggleButton value="AD0-E208" aria-label="AD0-E208" sx={{ minWidth: 200 }}>
                <Box sx={{ textAlign: 'center', p: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    AD0-E208
                  </Typography>
                  <Typography variant="caption" display="block">
                    Business Practitioner Expert
                  </Typography>
                </Box>
              </ToggleButton>
            </ToggleButtonGroup>

            <Box sx={{ mb: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                {certInfo.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {certInfo.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>중점 영역:</strong> {certInfo.focus}
              </Typography>
            </Box>

            <FormControl component="fieldset">
              <FormLabel component="legend">문제 수 선택</FormLabel>
              <RadioGroup
                value={selectedQuestionCount}
                onChange={handleQuestionCountChange}
                row
                sx={{ justifyContent: 'center', mt: 2 }}
              >
                <FormControlLabel 
                  value={5} 
                  control={<Radio />} 
                  label="5문제 (7분)" 
                />
                <FormControlLabel 
                  value={25} 
                  control={<Radio />} 
                  label="25문제 (30분)" 
                />
                <FormControlLabel 
                  value={50} 
                  control={<Radio />} 
                  label="50문제 (60분)" 
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={handleStartQuiz}
            >
              시험 시작하기
            </Button>
          </CardActions>
        </Card>

        <Button 
          variant="outlined" 
          onClick={handleViewResults}
          sx={{ mt: 2 }}
        >
          이전 결과 보기
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage; 