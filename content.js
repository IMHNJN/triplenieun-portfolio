window.portfolioContent = {
  ko: {
    nav: { home: "Home", projects: "Projects", experience: "Experiences", contact: "Contact" },
    hero: {
      kicker: "백엔드 개발자 / 빌더",
      summary:
        "백엔드 개발자이자 문제 해결을 좋아하는 사람입니다. 명확한 구조를 설계하고, 신뢰할 수 있는 결과물을 만들며, 기획과 구현을 연결해 팀이 더 자신 있게 움직일 수 있도록 돕습니다.",
    },
    projects: {
      heading: "Projects",
      back: "< 뒤로",
      role: "역할",
      outcome: "결과",
      items: {
        yeodam: {
          listTitle: "생성형 AI기반 일정 자동화 여행 협업 플래너, 여담",
          listSummary:
            "사용자가 선택한 여행지를 AI 일정, 협업 칸반, 경로·준비물 관리로 연결한 여행 계획 서비스를 구현했습니다.",
          title: "생성형 AI기반 일정 자동화 여행 협업 플래너, 여담",
          status: "프로젝트",
          summary:
            "여담은 사용자가 선택한 관광지를 바탕으로 여행 생성부터 AI 일정 초안, 동행자 협업 칸반, 교통수단별 경로 확인, 준비물 체크까지 이어지는 계획 과정을 한곳에서 관리하는 AI 기반 여행 계획 서비스입니다. 장소 선택과 일정 조정부터 여행 실행 전 준비까지의 흐름을 하나의 서비스 경험으로 연결했습니다.",
          role:
            "프론트엔드 개발 리드와 Spring Security를 맡아 로그인 요청을 필터에서 가로채 인증하고 JWT를 발급·검증하는 필터 기반 인증 흐름을 구현했습니다. ADMIN/EDITOR/VIEWER 권한 모델을 적용하고, Vue.js 화면, 여행 생성·관광지 추가, 협업 칸반, 경로 확인, 준비물 체크리스트, 변경 이력 표시를 개발했습니다. Figma 와이어프레임, Vite 설정, 통합 테스트·UX 보완과 Redis 캐시 구성에도 참여했습니다.",
          outcome:
            "장소 선택부터 AI 일정 구성, 협업 편집, 경로 확인, 준비물 체크까지의 흐름을 연결하며 외부 API 연동, 권한 모델, 캐싱을 포함한 서비스 구현 경험을 쌓았습니다.",
          tags: [
            "Vue.js",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "MySQL",
            "MyBatis",
            "Redis",
            "Vite",
            "GPT-4o-mini",
          ],
        },
        community: {
          listTitle: "외국인 유학생을 위한 대학 커뮤니티 서비스",
          listSummary:
            "번역 지원과 책임 기반 참여 구조를 통해 외국인 유학생의 진입 장벽을 낮추는 커뮤니티 서비스를 구축했습니다.",
          title: "외국인 유학생을 위한 대학 커뮤니티 서비스",
          status: "메인 프로젝트",
          summary:
            "로컬 LLM을 이용한 다국어 번역 지원을 통해 외국인 유학생이 한국어가 서툴더라도 쉽게 소통할 수 있도록 했으며, 낮은 익명성을 제공하여 사용자의 책임감 있는 서비스 참여를 유도했습니다. 즉, 외국인 유학생의 진입 장벽을 낮춘 대학 커뮤니티 서비스입니다.",
          role:
            "프로젝트 방향을 정의하고 역할을 조율했고 효율적인 팀 협업을 유도했습니다. 백엔드 개발 템플릿을 제공하여 팀원들의 개발 구조를 일치시켰고, Swagger 기반 API 문서를 정리하여 프론트엔드 팀원과의 개발 소통을 증진시켰습니다.",
          outcome:
            "커뮤니티 핵심 기능과 번역, 메시징, 식당 리뷰 기능까지 구현 및 배포하면서 초기 구조 설계가 개발 속도에 미치는 영향을 배웠습니다.",
          tags: ["Spring Boot", "PostgreSQL", "Swagger", "Docker", "GitHub Actions"],
        },
        lms: {
          listTitle: "대학생을 위한 똑똑한 LMS",
          listSummary:
            "업로드한 강의 자료를 자동 요약과 퀴즈 학습 흐름으로 연결하는 LMS 경험을 설계했습니다.",
          title: "대학생을 위한 똑똑한 LMS",
          status: "프로젝트",
          summary:
            "사용자가 강의 자료를 업로드하기만 하면 자동으로 요약본을 생성하고, 퀴즈 생성도 단순화 시켜서 학습 부담을 줄이도록 설계한 LMS 프로젝트입니다. 사용자의 AI활용역량이 낮아도 고품질의 생성물을 얻을 수 있도록 프롬프트 엔지니어링을 거쳤습니다.",
          role:
            "파일 업로드와 자료 관리 기능을 중심으로 맡았고, AWS S3와 MinIO를 활용해 안정적인 저장 구조를 구성했습니다.",
          outcome:
            "AI 보조 학습 흐름에서 백엔드 구조와 스토리지 설계가 사용자 경험에 어떻게 연결되는지 깊이 이해하게 되었습니다.",
          tags: ["Spring", "AWS S3", "MinIO", "Layered Architecture"],
        },
        drawing: {
          listTitle: "AI 낙서 인식 서비스",
          listSummary:
            "사용자의 낙서를 실시간으로 인식하고 정답을 예측하는 AI 서비스를 구현했습니다.",
          title: "AI 낙서 인식 서비스",
          status: "프로젝트",
          summary:
            "구글의 Quick, Draw! 데이터셋으로 CNN 모델을 직접 학습시키고, 이를 사용자가 체험해볼 수 있도록 웹사이트로 구현했습니다. 사용자가 그린 낙서를 실시간으로 분류하고, 정답을 예측합니다.",
          role:
            "데이터셋 전처리 파이프라인을 구성하여 기존의 시계열 데이터를 2차원 벡터로 변환하였고 모델 학습을 진행했습니다. 또한, 프론트엔드와 백엔드를 직접 구현해 결과물까지 연결했습니다.",
          outcome:
            "전처리, 모델 튜닝, 응답 속도, 배포까지 모두 신경쓰며 AI가 실제 서비스에 사용되는 흐름을 경험했습니다.",
          tags: ["Flask", "PyTorch", "GitHub", "GCP"],
        },
      },
    },
    experience: {
      heading: "Experiences",
      introStrong: "3년+",
      intro:
        "동안 프로젝트, 실무, 교육 활동을 통해 협업 감각과 책임감, 대인 관계 경험을 쌓아왔습니다.",
      primaryStack: "주요 스택",
      toolsStack: "도구 및 확장 경험",
      primaryTags: ["Java", "Spring Boot", "REST API", "Git", "GitHub", "Swagger", "PyTorch"],
      toolsTags: ["JavaScript", "AWS S3", "Docker", "PostgreSQL"],
      timeline: [
        {
          period: "2026.01 - 현재",
          title: "SSAFY 15기",
          place: "대한민국",
          body: "CS, 알고리즘, AI를 더 깊게 다지며 백엔드 개발자로서의 기술 기반을 강화하고 있습니다.",
        },
        {
          period: "2024.07 - 2025.12",
          title: "유학생입학팀 근로",
          place: "대학 행정",
          body: "실제 유학생 입학 프로세스를 지원하고 학생 관리 업무를 수행하며 정확한 커뮤니케이션과 실무 조율, 책임감 있는 업무 수행 태도를 익혔습니다.",
        },
        {
          period: "2024.03 - 2025.12",
          title: "초등학생 대상 교육 봉사 활동",
          place: "봉사 교육",
          body: "약 20회의 교육 봉사를 통해 복잡한 내용을 쉽게 설명하는 방법을 익혔습니다. 학생들을 이해시키는 과정과 수업 참여를 독려하는 경험을 통해 소통 능력과 이해심을 증진시킬 수 있었습니다.",
        },
        {
          period: "2023.03 - 2025.12",
          title: "성우 동아리 활동",
          place: "교내 동아리",
          body: "동아리 활동에 열정적으로 참여했고 대인 관계 역시 원활했습니다. 총 3번의 공연 활동에서 무대에 직접 참여하는 경험을 통해 많은 사람들 앞에서 팀원들과 준비해온 성과를 보여주는 능력을 길렀습니다. 편집부장으로서 활동 영상을 제작하고 결과물을 내는 과정을 통해 성취감을 느끼고 다른 부원들과의 끊임 없는 소통을 가질 수 있었습니다.",
        },
      ],
    },
    contact: {
      heading: "Contact",
      copy:
        "백엔드 개발, 협업, 그리고 더 탄탄한 구조와 안정적인 실행이 필요한 프로젝트에 대해 언제든 편하게 이야기 나누고 싶습니다.",
      button: "이메일 보내기",
    },
  },
  en: {
    nav: { home: "Home", projects: "Projects", experience: "Experiences", contact: "Contact" },
    hero: {
      kicker: "Backend developer / builder",
      summary:
        "Backend developer & problem solver. I design clear structures, build reliable products, and connect planning with implementation so teams can move with more confidence.",
    },
    projects: {
      heading: "Projects",
      back: "< Back",
      role: "Role",
      outcome: "Outcome",
      items: {
        yeodam: {
          listTitle: "Yeodam, a Generative AI-Powered Automated Travel Collaboration Planner",
          listSummary:
            "Built a travel planning service that connects user-selected places with AI scheduling, collaborative editing, route comparison, and packing management.",
          title: "Yeodam, a Generative AI-Powered Automated Travel Collaboration Planner",
          status: "Project",
          summary:
            "Yeodam is an AI travel planning service that brings together trip creation, AI itinerary drafts, collaborative kanban editing, transport-specific route review, and packing checklists in one planning flow. It connects place selection and schedule coordination with the preparation needed before a trip.",
          role:
            "Led frontend development and Spring Security work by implementing a filter-based authentication flow that intercepts login requests and issues and verifies JWTs. I applied the ADMIN/EDITOR/VIEWER authorization model and built Vue.js screens, trip creation and place-add flows, the collaborative kanban, route review, packing checklist, and change-history views. I also contributed to Figma wireframes, Vite setup, integration testing, UX refinement, and Redis cache configuration.",
          outcome:
            "Connected place selection, AI itinerary generation, collaborative editing, route review, and packing into one product flow while gaining experience with external API integration, authorization models, and caching.",
          tags: [
            "Vue.js",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "MySQL",
            "MyBatis",
            "Redis",
            "Vite",
            "GPT-4o-mini",
          ],
        },
        community: {
          listTitle: "Community Platform for International Students",
          listSummary:
            "Built a student community service with translation support, identity-based participation, and a more reliable interaction structure.",
          title: "Community Platform for International Students",
          status: "Main Project",
          summary:
            "A community service designed to reduce barriers for international students through translation support and a more accountable, identity-based structure.",
          role:
            "Helped define the project direction, aligned responsibilities, documented API structure with Swagger, and supported the team with a shared development base.",
          outcome:
            "Built and deployed core community features along with translation, messaging, and review capabilities while learning how early structure affects delivery speed.",
          tags: ["Spring Boot", "PostgreSQL", "Swagger", "Docker", "GitHub Actions"],
        },
        lms: {
          listTitle: "AI-Based Learning Management System",
          listSummary:
            "Designed an LMS experience that turns uploaded lecture material into summarized content and quiz-based learning flow.",
          title: "AI-Based Learning Management System",
          status: "Project",
          summary:
            "An LMS concept that reduces study friction by turning uploaded lecture material into summarized content and quiz-ready learning assets.",
          role:
            "Focused on file upload and content management, using AWS S3 and MinIO to support stable storage and learning material flow.",
          outcome:
            "Strengthened my understanding of how backend structure and storage design can support product usability in AI-assisted workflows.",
          tags: ["Spring", "AWS S3", "MinIO", "Layered Architecture"],
        },
        drawing: {
          listTitle: "AI Drawing Recognition Service",
          listSummary:
            "Delivered an end-to-end AI service that recognizes user-drawn sketches in real time and turns model work into product form.",
          title: "AI Drawing Recognition Service",
          status: "Project",
          summary:
            "An AI project that classifies user-drawn sketches in real time and turns a model experiment into an end-to-end service experience.",
          role:
            "Worked as a project lead, organized the pipeline, improved the model workflow, and directly implemented both frontend and backend for delivery.",
          outcome:
            "Learned how preprocessing, model tuning, response speed, and deployment all contribute to the real quality of an AI product.",
          tags: ["Flask", "PyTorch", "GitHub", "GCP"],
        },
      },
    },
    experience: {
      heading: "Experiences",
      introStrong: "3+ years",
      intro:
        "building teamwork, responsibility, and practical development experience through projects, operations, and education activities.",
      primaryStack: "Primary Stack",
      toolsStack: "Tools & Expansion",
      primaryTags: ["Java", "Spring Boot", "REST API", "Git", "GitHub", "Swagger", "PyTorch"],
      toolsTags: ["JavaScript", "AWS S3", "Docker", "PostgreSQL"],
      timeline: [
        {
          period: "2026 - Present",
          title: "SSAFY 15th",
          place: "Korea",
          body: "Strengthening fundamentals in CS, algorithms, and AI while building a stronger technical base for backend development.",
        },
        {
          period: "2024 - 2025",
          title: "International Student Office Work Experience",
          place: "University Administration",
          body: "Built discipline around accurate communication, coordination, and responsibility in day-to-day operational work.",
        },
        {
          period: "2024 - 2025",
          title: "Education Volunteer Activity",
          place: "Volunteer Teaching",
          body: "Learned how to explain complex ideas clearly, which continues to improve collaboration and documentation in development work.",
        },
        {
          period: "2023 - 2025",
          title: "Club Activity and Media Team Work",
          place: "Campus Organization",
          body: "Developed stronger ownership by being responsible for schedules, visible output quality, and finishing work to the end.",
        },
      ],
    },
    contact: {
      heading: "Contact",
      copy:
        "I'm open to conversations about backend development, collaboration, and projects that need stronger structure and reliable execution.",
      button: "Email Me",
    },
  },
};
