# 쉼 온라인 기도실 v6 — 숲속 공동기도

## 구성
- `public/`: GitHub Pages에 업로드하는 정적 웹 파일 (index.html, icons, manifest, sw.js, offline.html)
- `server.js`, `package.json`, `render.yaml`: Render에 배포하는 Node.js WebSocket 서버

## 중요
GitHub Pages는 정적 사이트만 제공합니다. GitHub Pages에서 닉네임/아바타 선택 및 좌석 미리보기는 가능하지만, 다른 사용자와 실시간 공유하려면 Render 배포가 필요합니다.

### 가장 쉬운 방법: Render 전체 사이트 배포
1. 이 ZIP을 풀어 나온 **모든 파일과 public 폴더**를 GitHub 저장소 최상위에 업로드합니다.
2. Render New → Blueprint에서 해당 GitHub 저장소를 연결하거나 New → Web Service에서 npm install / npm start를 설정합니다.
3. Render가 발급한 HTTPS 주소를 지인들에게 공유합니다. Node.js 서버가 정적 파일과 WebSocket을 동시에 제공합니다.
4. 서로 다른 브라우저/스마트폰에서 닉네임 설정, 색상, 좌석 점유, 공동기도 동기화를 시험합니다.

### GitHub Pages 미리보기
`public` 폴더 **안의 파일만** 저장소 루트에 올리면 GitHub Pages에서 화면을 미리 볼 수 있습니다. 이 경우 실시간 기능은 작동하지 않습니다.

## 로컬 실행
Node.js 20+에서 `npm install && npm start` 후 http://localhost:3000

## 보안·운영
닉네임은 로그인 신원 확인이 아니며 다른 사람이 같은 닉네임을 사용할 수 있습니다. 닉네임과 아바타 색상은 브라우저 localStorage에 저장됩니다. 실시간 접속자/좌석은 서버 메모리에만 존재하며 재시작 시 초기화됩니다. 운영 전 신고/삭제 및 개인정보 보호 정책을 보완하세요.
