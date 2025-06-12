#!/bin/bash

set -e  # 오류 발생 시 중단

# 1. 현재 위치 = study
cd "$(dirname "$0")/04_aaCert/adobe-analytics-exam"

# 2. 빌드 실행
npm install
npm run build

# 3. 루트(study)로 돌아와 배포용 디렉토리 준비
cd ../../
rm -rf .deploy-temp
mkdir -p .deploy-temp/04_aaCert/adobe-analytics-exam  # ✅ study 제거!

# 4. 빌드 결과 복사
cp -r 04_aaCert/adobe-analytics-exam/build/* .deploy-temp/04_aaCert/adobe-analytics-exam
cp -r 04_aaCert/adobe-analytics-exam/build/.* .deploy-temp/04_aaCert/adobe-analytics-exam 2>/dev/null || true

# 5. gh-pages 브랜치로 배포
cd .deploy-temp
git init
git remote add origin https://github.com/iam149cm/study.git
git checkout -b gh-pages

git add .
git commit -m "Deploy to gh-pages"
git push --force origin gh-pages

# 6. 임시 디렉토리 제거
cd ..
rm -rf .deploy-temp

# 7. 완료 안내
echo "✅ 배포 완료: https://iam149cm.github.io/study/04_aaCert/adobe-analytics-exam/"
