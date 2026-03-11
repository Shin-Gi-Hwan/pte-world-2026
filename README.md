# PTE World 2026 – Interactive Newsletter

Incheon Airport의 PTE World 2026 전시 디렉토리를 인터랙티브하게 탐색할 수 있는 웹 페이지입니다.
뉴스레터 이미지의 제품 영역을 클릭하면 우측에 해당 제품 상세 이미지가 표시됩니다.

---

## 프로젝트 구조

```
project/
 ├── index.html          ← 메인 페이지
 ├── style.css           ← 스타일
 ├── script.js           ← 핫스팟 데이터 & 인터랙션 로직
 ├── images/
 │   ├── newsletter.jpg      ← 뉴스레터 이미지
 │   ├── avdgs.jpeg          ← A-VDGS 상세 이미지
 │   ├── airlym.jpeg         ← AIRLYM™ 상세 이미지
 │   ├── acgps.jpeg          ← AC-GPS 상세 이미지
 │   ├── aerodrome.jpeg      ← Aerodrome Obstacle Control System 상세 이미지
 │   ├── apron.jpeg          ← Airport Smart Apron Control Platform Solution 상세 이미지
 │   ├── adma.jpeg           ← A-DMA 상세 이미지
 │   ├── selfcheckin.jpeg    ← Self Check-in Robot 상세 이미지
 │   └── lguhd.jpeg          ← LG UHD Signage 상세 이미지
 └── pdf/
     └── directory.pdf       ← 제품 카탈로그 PDF (참고용)
```

---

## 기능

| 기능 | 설명 |
|------|------|
| 핫스팟 클릭 | 뉴스레터 이미지의 제품 영역 클릭 → 우측에 제품 상세 이미지 표시 |
| 범례(Legend) | 하단 텍스트 버튼으로도 동일하게 이동 가능 |
| 토글 | 같은 항목 재클릭 시 이미지 닫기 |
| Close 버튼 | 이미지 뷰어 닫기 |
| 반응형 | 모바일: 위쪽 뉴스레터 + 아래쪽 상세 이미지 |

---

## 로컬 실행

### Python (권장)
```bash
cd project
python3 -m http.server 8080
# → http://localhost:8080
```

### IntelliJ
`index.html` 열고 우측 상단 브라우저 아이콘 클릭 → 자동으로 로컬 서버 실행

---

## 핫스팟 좌표 수정

`script.js` 상단의 `hotspots` 배열에서 좌표를 수정하세요.
모든 값은 이미지 크기 대비 **퍼센트(%)** 기준입니다.

```js
{
  id: 'avdgs',
  label: 'A-VDGS',
  image: 'images/avdgs.jpeg',  // 표시할 상세 이미지 경로
  x: 53.0,  // 왼쪽 경계 (%)
  y: 54.5,  // 위쪽 경계 (%)
  w: 20,    // 너비 (%)
  h: 9      // 높이 (%)
}
```

### 좌표 찍는 방법
1. `script.js` 맨 아래 주석 처리된 디버그 코드 주석 해제
2. `buildHotspots()` 주석 처리
3. 브라우저에서 열고 이미지 위 원하는 위치 클릭 → 콘솔에 x, y 출력
4. 좌표 확인 후 원복

---

## GitHub Pages 배포

```bash
# 1. Git 초기화
cd project
git init && git add . && git commit -m "init"

# 2. GitHub 저장소 연결 (GitHub에서 repo 먼저 생성)
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main

# 3. Settings → Pages → Branch: main / root → Save
# → https://<USERNAME>.github.io/<REPO>/ 로 접근
```

## Vercel 배포 (대안)

```bash
npm i -g vercel
vercel
```

또는 GitHub 저장소를 Vercel에서 Import → Deploy 클릭.
