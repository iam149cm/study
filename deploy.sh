#!/bin/bash

TARGET_DIR="04_aaCert/adobe-analytics-exam"

echo "🚀 이동: $TARGET_DIR"
cd "$TARGET_DIR" || exit 1

echo "📦 의존성 설치 (필요한 경우)"
npm install

echo "🔨 빌드 실행"
npm run build

echo "🌐 gh-pages 브랜치로 배포"
npx gh-pages -d build -b gh-pages -f

echo "🔙 상위 디렉토리 복귀"
cd - || exit 1

echo "✅ 배포 완료: https://iam149cm.github.io/study/04_aaCert/adobe-analytics-exam/"
