# 환경 변수 설정

## MetalpriceAPI 키 발급

1. https://metalpriceapi.com 에서 회원가입
2. 무료 플랜으로 API 키 발급
3. `.env.local` 파일을 프로젝트 루트에 생성하고 아래 내용 추가:

```
METALPRICE_API_KEY=your_api_key_here
```

## 주의사항

- `.env.local` 파일은 `.gitignore`에 포함되어 있어 Git에 커밋되지 않습니다
- API 키를 절대 공개 저장소에 올리지 마세요
