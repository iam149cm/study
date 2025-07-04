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
  FormLabel
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedQuestionCount, setSelectedQuestionCount] = React.useState<number>(25);

  useEffect(() => {
    console.log('홈페이지에 진입했습니다.');
  }, []);

  const handleQuestionCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedQuestionCount(Number(event.target.value));
  };

  const handleStartQuiz = () => {
    navigate('/quiz', { state: { questionCount: selectedQuestionCount } });
  };

  const handleViewResults = () => {
    navigate('/results');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          [AD0-E213] Adobe Analytics Developer Professional<br/>
          자격증 시험 모의고사
        </Typography>
        
        <Card sx={{ mt: 4, mb: 4 }}>
          <CardContent>
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