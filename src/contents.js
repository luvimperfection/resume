module.exports = {
  profile: {
    name: '박준호 (JoonHo Park)',
    description: 'Android Developer',
    dateOfBirth: '1990.11.27',
    email: 'pjhjohn@gmail.com',
    links: [
      {name: 'Github', href: 'https://github.com/pjhjohn'}
    ]
  },
  introduction: `
    2011년부터 안드로이드를 메인으로 개발을 계속해왔으며, DAU 300만 이상의 SDK 개발 및 운영 경험이 있습니다.<br/>
    좋은 협업으로 인한 효율 향상과 빌드 및 배포 자동화 시스템을 포함한 커뮤니케이션 방법을 중요하게 생각합니다.<br/>
    개개인의 참여가 스스로 이루어질 때 가장 좋은 결과가 나온다고 생각하며, 주도적으로 환경에 적응하는 편입니다.<br/>
    지식의 접근성을 개인 노력의 부족으로 치부하지 않고 지식을 적극적으로 나누어 전체가 성장하는 것을 중요하게 생각합니다.<br/>
    문제의 핵심을 해결하는 데 플랫폼이 제약이 되지 않도록, 안드로이드 뿐만 아니라 다양한 플랫폼에서의 개발경험 또한 보유하고 있습니다.<br/>
    `
  ,
  summary: {
    '경력 요약': [
      {
        'date': ['2017.01', '현재'],
        'title': '(주) 사운들리',
        'contents': [
          '메인 - Android SDK 개발',
          '서브 - Productivity Admin'
        ]
      },
      {
        'date': ['2015.03', '2017.02'],
        'title': '서울대학교 운동연구실',
        'contents': [
          '<strong>컴퓨터공학 석사</strong>',
          '메인 - Drone Trajectory Optimization',
          '서브 - Hubo Controller'
        ]
      }
    ]
  },
  detailContents: {
    '(주) 사운들리': {
      'date': '2017.01 - 현재',
      'info': '비가청 음파를 수신하는 Android SDK 를 이용한 다양한 서비스를 진행하는 스타트업',
      'service': [
        '<strong>Bitsound SDK</strong><br/> - Homepage: <a href="http://bitsound.io/">http://bitsound.io/</a> <br/> - Android SDK GitHub: <a href="https://github.com/Soundlly/BitsoundSDK-Android">https://github.com/Soundlly/BitsoundSDK-Android</a><br/> - Android SDK Documents: <a href="https://docs.bitsound.io/docs/android-overview">https://docs.bitsound.io/docs/android-overview</a><br/><br/>',
      ],
      'project': {
        'project': [
          {
            'date': '2017.01 - 현재',
            'title': 'Bitsound Android SDK',
            'contents': [
              '<strong>Bitsound Android SDK 구현 및 유지보수</strong>',
              '설계 / 구현 / 테스트 / 배포 / 문서화 / 버전관리 / 이슈 트래킹 / 샘플 및 개발 가이드 / 기술지원 / 성능 개선',
              '<br/>',
              '- Android O 지원',
              '- 기존 파편화된 Soundlly SDK 통합 (멀티 모듈)',
              '- 외부 의존성 최소화',
              '- 실기기 테스트를 위한 디바이스 컨트롤러 구축 (FCM)',
              '- 버전 관리 및 트래킹을 위한 스크립트 작성 (Groovy)',
              '- 커스텀 기능을 한 번에 빌드하여 각각 제공 (Groovy)',
              '- API 기능 동작 테스트앱 구현 (Kotlin, Firebase, Rx)',
              '- 실사용 테스트앱 구현 (Kotlin, Firebase, Rx)',
              '- SDK 동작 모니터링 (Kibana)',
              '- 기여도: 90%, 대부분 단독진행',
              'Stack: Java, Kotlin, Firebase, RxAndroid, ...'
            ]
          },
          {
            'date': '2018.06',
            'title': 'KT 로드쇼 LTE 시연앱',
            'contents': [
              '<strong>KT 로드쇼 LTE 시연앱 개발 및 문서화</strong>',
              'UI 전체 / 포그라운드 서비스 동작',
              '<br/>',
              '- Android P 지원(Jetpack)',
              '- APN 무료망 전환 프로토콜 연동',
              '- 신호 수신에 따른 망 전환',
              '- 기여도: 100%, 단독진행',
              'Stack: Kotlin, RxAndroid, Bitsound SDK'
            ]
          },
          {
            'date': '2017.09 - 2018.05',
            'title': '사운들리 기술블로그',
            'contents': [
              '<strong>개발자 스터디 활성화를 위한 기술블로그 구현 및 운영</strong>',
              'UI 전체 / 디자인 / 페이스북 공유 / 댓글 (DISQUS)',
              '<br/>',
              '- Jekyll on GitHub Pages',
              '- 기여도: 100%, 단독진행',
              'Stack: Ruby, Jekyll, ...'
            ]
          }
        ]
      }
    }
  },
  contents: {
    '상세 역량': [
      {
        'date': 'Languages',
        'title': '사용 언어 (숙련도 순)',
        'contents': [
          '<strong>상</strong> : Kotlin / Java / Python / JavaScript(ES6)',
          '<strong>중</strong> : HTML / CSS / SASS / Ruby / C / C++',
          '<strong>하</strong> : Ocaml / Scheme / Action Script',
          '그외 관심 : Scala / TypeScript / Rust',
        ]
      },
      {
        'date': 'Frameworks',
        'title': '사용 프레임워크 (숙련도 순)',
        'contents': [
          '<strong>상</strong> : Android',
          '<strong>중</strong> : Django / Rails / Jekyll',
          '<strong>하</strong> : Processing',
          '그외 관심 : TensorFlow',
        ]
      },
      {
        'date': 'Libraries',
        'title': '사용 라이브러리 (영역별 숙련도 순)',
        'contents': [
          '<strong>Android</strong>',
          'Google: ConstraintLayout / DataBinding / AAC / ...',
          'Firebase: Analytics / Authentication / Cloud Messaging / Firestore / Crashlytics / Remote Config',
          'Third Party: RxAndroid / Retrofit2 / OkHttp3 / Stetho / Gson / Lottie / Glide / Picasso / Timber / OneSignal / ...',
          '<strong>FrontEnd</strong>',
          'React / Redux / Material UI / ESLint / Webpack / PostCSS / jQuery / ...',
          '<strong>Backend</strong>',
          'PEP8 / Faker / MailChimp / Slacker / ...',
          '그외 관심 : Android JetPack / Realm / Redux Saga'
        ]
      },
      {
        'date': 'Tools / System',
        'title': '사용 툴 및 시스템 (빈도 순)',
        'contents': [
          '<strong>상</strong> : Git(GitKraken) / GitHub / AndroidStudio / PyCharm / Slack / Asana / Confluence / Papaly / ...',
          '<strong>중</strong> : Kibana / Zeplin / Sublime Text / Atom / AWS / Circle CI / Notion / ...',
          '<strong>하</strong> : IntelliJ / WebStorm / Postman / Vim / Jenkins / ...',
          '그외 관심 : JIRA / VSCode / Docker / Additor',
        ]
      },
      {
        'date': 'Design',
        'title': '사용 디자인 (개발 숙련도 순)',
        'contents': [
          '<strong>상</strong> : Material Design (Android) / Bootstrap 3',
          '<strong>중</strong> : Material UI (React) / Materialize.css (CSS)',
          '<strong>하</strong> : Atlassian / Spectre',
          '그외 관심 : Typography / Editorial Design',
        ]
      },
    ],
    '기타 경력 및 개인 프로젝트': [
      {
        'date': '2017.08 - 현재',
        'title': '마인딩',
        'contents': [
          '마음습관 형성 서비스 "마인딩" 개발 및 기술자문<br/><br/>',
          '- Homepage (<a href="https://minding.today/">Link</a>)',
          '- PlayStore (<a href="https://play.google.com/store/apps/details?id=today.minding">Link</a>)',
          '- 프로젝트 초기 설계 및 스택 선정',
          '- 코드 리뷰 및 기술 자문',
          '- Stack(Android): Kotlin, RxAndroid, Firebase, AAC, MVVM, Databinding',
          '- Stack(Web): Django (+ REST Framework), React + Redux, AWS',
        ]
      },
      {
        'date': '2017.02 - 2017.03',
        'title': 'Kotlin Device Intel',
        'contents': [
          '테스트용 단말의 모델명, OS 버전 등 여러 정보를 쉽게 보여주는 앱<br/><br/>',
          '- PlayStore (<a href="https://play.google.com/store/apps/details?id=io.pjhjohn.kotlin.deviceintel">Link</a>)',
          '- GitHub (<a href="https://github.com/pjhjohn/kotlin-device-intel">Link</a>)',
          '- Open Source (1 Contributor)'
        ]
      },
      {
        'date': '2016.07 - 2016.11',
        'title': '삼천원',
        'contents': [
          '문화예술 플랫폼 "삼천원" 개발<br/><br/>',
          '- 웹사이트 (<a href="https://3000won.com/">Link</a>)',
          '- 프로젝트 설계 및 팀 리딩',
          '- 기여도: 60%, 4인 개발 (기간 범위 기준)',
          '- Stack(front-end): React + Redux on Express',
          '- Stack(back-end): Django REST Framework'
        ]
      },
      {
        'date': '2015.04 - 2016.01',
        'title': 'JSONPlaceholder Client',
        'contents': [
          'React & Redux REST API Boilerplate<br/><br/>',
          '- GitHub (<a href="https://github.com/pjhjohn/jsonplaceholder-client">Link</a>)',
          '- JSONPlaceholder Fack REST API 기반(<a href="http://jsonplaceholder.typicode.com/">Link</a>)',
          '- Open Source (4 Contributors)'
        ]
      },
      {
        'date': '2015.04 - 2016.01',
        'title': 'Papyruth',
        'contents': [
          '서울대학교 강의평가 서비스<br/><br/>',
          '- <del>PlayStore (<a href="https://play.google.com/store/apps/details?id=com.papyruth.android">Link</a>): 서비스 종료</del>',
          '- GitHub (<a href="https://github.com/pjhjohn/papyruth-android">Link</a>)',
          '- 안드로이드 프로젝트 구현',
          '- 기여도: 60%, 2인 개발'
        ]
      }
    ],
    '개인 활동': [
      {
        'date': '2018.02.02',
        'title': 'GDG Korea Android LT',
        'contents': [
          'GDG Korea Android Lightening Talk 발표',
          '- 행사(<a href="https://sites.google.com/view/gdg-and-2018-lt/">Link</a>)',
          '- 발표자료(<a href="https://speakerdeck.com/pjhjohn/sdk-gaebaljaro-salanamneun-beob">Link</a>)'
        ]
      },
      {
        'date': '2017, 2018',
        'title': 'Google I/O Extended',
        'contents': [
          '2017, 2018 스태프'
        ]
      },
      {
        'date': '2016.11',
        'title': '시티즌맵',
        'contents': [
          '집회 예정 장소의 위치정보 및 현재상황 제보 플랫폼',
          '- 구글 검색(<a href="https://goo.gl/dsXpxt">Link</a>)',
          '- 개발 참여',
        ]
      },
      {
        'date': '2016.09 - 현재',
        'title': '1일 1인디',
        'contents': [
          '인디 뮤지션을 알리기 위한 페이스북 페이지 운영',
          '- 페이스북 페이지(<a href="https://www.facebook.com/indieperday/">Link</a>)',
          '- 아티스트 / 레이블 승인 후 페이지에 게시'
        ]
      },
      {
        'date': '2014.04 - 현재',
        'title': '멋쟁이 사자처럼',
        'contents': [
          '2기 : 서울대&연세대 튜터',
          '&nbsp;&nbsp;- 전체 커리큘럼 및 수업자료 제작',
          '3기 : 중앙 운영진',
          '4기 : 서울대학교 운영진',
          '&nbsp;&nbsp;- 자체 커리큘럼 및 수업자료 제작, 수업 진행',
          '5기, 6기 : 서울대학교 운영진 고문',
        ]
      }
    ],
    '학력 사항': [
      {
        'date': '2015 - 2017',
        'title': '서울대학교 석사',
        'contents': ['운동연구실']
      },
      {
        'date': '2009 - 2015',
        'title': '서울대학교 학사',
        'contents': ['컴퓨터공학 주전공', '전기공학 부전공']
      },
      {
        'date': '2006 - 2009',
        'title': '상문고등학교',
        'contents': ['-']
      }
    ]
  }
};
