# Vercel 배포 가이드

## 배포 방법

### 1. Vercel CLI를 사용한 배포

```bash
# Vercel CLI 설치 (전역)
npm i -g vercel

# 프로젝트 디렉토리로 이동
cd study/06_BullionDB

# 배포
vercel
```

### 2. Vercel 웹 대시보드를 사용한 배포

1. https://vercel.com 에서 GitHub 계정으로 로그인
2. "Add New Project" 클릭
3. GitHub 저장소 선택 (`iam149cm/study`)
4. 프로젝트 설정:
   - **Root Directory**: `study/06_BullionDB`로 설정
   - **Framework Preset**: Next.js (자동 감지)
5. **Environment Variables** 추가:
   - `METALPRICE_API_KEY`: MetalpriceAPI 키 값
6. "Deploy" 클릭

## 환경 변수 설정

Vercel 대시보드에서:
1. 프로젝트 선택
2. Settings → Environment Variables
3. 다음 변수 추가:
   - **Name**: `METALPRICE_API_KEY`
   - **Value**: MetalpriceAPI 키
   - **Environment**: Production, Preview, Development 모두 선택

또는 Vercel CLI로:
```bash
vercel env add METALPRICE_API_KEY
```

## 배포 후 확인

배포가 완료되면 Vercel이 자동으로 URL을 제공합니다:
- 예: `https://bulliondb-xxx.vercel.app`

## 장점

✅ **API 라우트 지원**: Next.js API 라우트가 정상 작동  
✅ **환경 변수 보안**: API 키가 서버에서만 사용되어 노출되지 않음  
✅ **자동 배포**: GitHub에 푸시하면 자동으로 배포  
✅ **무료 플랜**: 개인 프로젝트에 충분한 무료 플랜 제공
