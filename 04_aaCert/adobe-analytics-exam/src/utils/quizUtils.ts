import { Question } from '../data/questions';

// 선택지를 랜덤으로 섞는 함수
export const shuffleOptions = (options: { [key: string]: string }) => {
  const entries = Object.entries(options);
  for (let i = entries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }
  return Object.fromEntries(entries);
};

// 문제를 랜덤으로 선택하는 함수
export const getRandomQuestions = (questions: Question[], count: number) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// 정답 키를 새로운 순서에 맞게 변환하는 함수
export const convertAnswer = (answer: string | string[], shuffledOptions: { [key: string]: string }) => {
  if (Array.isArray(answer)) {
    return answer.map(key => {
      const originalValue = shuffledOptions[key];
      const newKey = Object.entries(shuffledOptions).find(([_, value]) => value === originalValue)?.[0];
      return newKey || key;
    });
  }
  const originalValue = shuffledOptions[answer];
  const newKey = Object.entries(shuffledOptions).find(([_, value]) => value === originalValue)?.[0];
  return newKey || answer;
}; 