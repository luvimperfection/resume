module.exports = {
  profile: {
    name: '박준호 (JoonHo Park)',
    description: 'Android Developer',
    dateOfBirth: '1990.11.27',
    email: 'pjhjohn@gmail.com',
    links: [
      {name: 'Github', href: 'https://github.com/pjhjohn'},
      {name: 'Facebook', href: 'https://www.facebook.com/pjhjohn1127'},
      {name: 'SpeakerDeck', href: 'https://speakerdeck.com/pjhjohn'},
    ]
  },
  introduction: `
    2011년 부터 안드로이드를 메인으로 개발을 계속해 오고 있습니다.<br>
    DAU 300만 이상의 SDK 및 1억 이상 다운로드, 20개 이상 언어로 서비스 중인 APP 개발 경험이 있습니다.<br>
    치밀한 협업을 통한 팀의 성장을 중요하게 생각하며, 협업의 질을 높이기 위한 다양한 자동화를 설계하고 실천합니다.<br>
    자발적인 참여가 모일 때 최고의 아웃풋이 나온다고 생각하며, 이를 위해 먼저 목표를 설정하고 커뮤니케이션합니다.<br>
    주도적으로 환경에 적응하되 맹목적으로 순응하지는 않습니다. 더 나은 상태를 위해 끊임없이 고민하고 실험합니다.<br>
    문제의 핵심에 집중해서 비즈니스 임팩트를 내는 것과 지속적인 효과가 발생하는 시스템을 설계하는 것을 좋아합니다.<br>
    단편적인 지식전달 보다는 잘 듣고, 함께 고민하면서 좋은 질문을 던지는 것을 지향합니다.<br>`
  ,
  summary: {
    '경력 요약': [
      {
        'date': ['2018.09', '현재'],
        'title': '(주) 하이퍼커넥트',
        'contents': [
          '메인 - Azar Android 개발',
          '서브 - Developer Relations'
        ]
      },
      {
        'date': ['2017.01', '2018.09'],
        'title': '(주) 사운들리',
        'contents': [
          '메인 - Android SDK 개발',
          '서브 - Productivity Admin'
        ]
      },
    ]
  },
  detailContents: {
    '(주) 하이퍼커넥트': {
      'date': '2018.09.28 - 현재',
      'info': '자체 기술 개발을 중시하고, 혁신 기술을 기반으로 제품을 만들어가는 기술 중심 회사. WebRTC를 모바일 플랫폼에 최초로 적용하여 탄생한 ‘아자르’, 스트리밍 서비스로 가파르게 성장 중인 ‘하쿠나’와 함께 지속적인 성장 동력을 발굴하고 있습니다.',
      'service': [
        '<strong>Azar</strong> - <a href="https://play.google.com/store/apps/details?id=com.azarlive.android" target="_blank">PlayStore</a><br>Azar allows you to talk and make friends with people from over 190 countries.<br>',
      ],
      'project': {
        'project': [
          {
            'date': '2018.09.28 - 현재',
            'title': 'Azar',
            'contents': [
              '<strong>Azar Android 앱 구현 및 유지보수</strong>',
              'Feature 개발 / I18N / L10N / A11Y / Multi Module / ...',
              '<br>',
              '<strong>Extras</strong>',
              '리소스 관리',
              '- Drawable Validator by Density',
              '- String Validator by Translation',
              '- Localized Number Formatter',
              '디자인 시스템 설계 및 구현',
              '- Apply Color Palette',
              '- Rollout Vector Drawables',
              '- Rollout Ripple Effect',
              '- Rollout Design Components',
              '- Rollout DarkMode',
            ]
          },
          {
            'date': '2019.07 - 현재',
            'title': 'Developer Relations',
            'contents': [
              '<strong>사내/외 개발 문화 고안</strong>',
              '- 기술 블로그 담당 (<a href="https://hyperconnect.github.io/" target="_blank">Link</a>)',
              '- 내부 개발자 밋업 지원',
              '- 내부 개발자 스터디 지원',
              '- 외부 개발자 행사 컨텐츠 지원',
              '- Notion for Developers',
            ]
          },
          {
            'date': '2019.09 - 현재',
            'title': 'Notion Advisor',
            'contents': [
              '<strong>Notion 도입 지원</strong>',
              '- Merge Workspaces for Pricing',
              '- Notion as Companywide Knowledge Base',
            ]
          }
        ]
      }
    },
    '(주) 사운들리': {
      'date': '2017.01.02 - 2018.09.21',
      'info': '비가청 음파를 수신하는 Android SDK 를 이용한 다양한 서비스를 진행하는 스타트업',
      'service': [
        '<strong>Bitsound SDK (Sadly, no longer available)</strong><br> - Homepage: <del><a href="http://bitsound.io/" target="_blank">http://bitsound.io/</a></del> <br> - Android SDK GitHub: <del><a href="https://github.com/Soundlly/BitsoundSDK-Android" target="_blank">https://github.com/Soundlly/BitsoundSDK-Android</a></del><br> - Android SDK Documents: <del><a href="https://docs.bitsound.io/docs/android-overview" target="_blank">https://docs.bitsound.io/docs/android-overview</a></del><br><br>',
      ],
      'project': {
        'project': [
          {
            'date': '2017.01 - 2018.09',
            'title': 'Bitsound Android SDK',
            'contents': [
              '<strong>Bitsound Android SDK 구현 및 유지보수</strong>',
              '설계 / 구현 / 테스트 / 배포 / 문서화 / 버전관리 / 이슈 트래킹 / 샘플 및 개발 가이드 / 기술지원 / 성능 개선',
              '<br>',
              '- Android O 지원',
              '- 기존 파편화된 Soundlly SDK 통합 (멀티 모듈)',
              '- 외부 의존성 최소화',
              '- 실기기 테스트를 위한 디바이스 컨트롤러 구축 (FCM)',
              '- 버전 관리 및 트래킹을 위한 스크립트 작성 (Groovy)',
              '- 커스텀 기능을 한 번에 빌드하여 각각 제공 (Groovy)',
              '- API 기능 동작 테스트앱 구현 (Kotlin, Firebase, RxJava2)',
              '- 실사용 테스트앱 구현 (Kotlin, Firebase, RxJava2)',
              '- SDK 동작 모니터링 (Kibana)',
              '- 기여도: 90%, 대부분 단독진행',
              'Stack: Java, Kotlin, Firebase, RxJava2, ...'
            ]
          },
          {
            'date': '2018.06',
            'title': 'KT 로드쇼 LTE 시연앱',
            'contents': [
              '<strong>KT 로드쇼 LTE 시연앱 개발 및 문서화</strong>',
              'UI 전체 / 포그라운드 서비스 동작',
              '<br>',
              '- Android P 지원(Jetpack)',
              '- APN 무료망 전환 프로토콜 연동',
              '- 신호 수신에 따른 망 전환',
              '- 기여도: 100%, 단독진행',
              'Stack: Kotlin, RxJava2, Bitsound SDK'
            ]
          },
          {
            'date': '2017.09 - 2018.05',
            'title': '사운들리 기술블로그',
            'contents': [
              '<strong>개발자 스터디 활성화를 위한 기술블로그 구현 및 운영</strong>',
              'UI 전체 / 디자인 / 페이스북 공유 / 댓글 (DISQUS)',
              '<br>',
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
        'title': '사용 언어',
        'contents': [
          '<strong>Kotlin / Java</strong> / Python / JavaScript(ES6) / Ruby / HTML / CSS / C / C++ ...',
        ]
      },
      {
        'date': 'Frameworks',
        'title': '사용 프레임워크',
        'contents': [
          '<strong>Android</strong> / Django / Rails / React / Jekyll / Gatsby / Processing / ...',
        ]
      },
      {
        'date': 'Tools / System',
        'title': '툴 및 시스템 (빈도 순)',
        'contents': [
          '<strong>AndroidStudio / Slack / Jira / Notion / Confluence / Zeplin</strong> / VSCode / Sublime Text / PyCharm / WebStorm / Asana / Figma / Jenkins / Circle CI / ...'
        ]
      },
      {
        'date': 'Design',
        'title': '디자인 (관심도 순)',
        'contents': [
          '<strong>Design System</strong> / Material Design / Typography / Branding / ...',
        ]
      },
    ],
    '기타 경력 및 개인 프로젝트': [
      {
        'date': '2017.08 - 2019.04',
        'title': '마인딩',
        'contents': [
          '마음습관 형성 서비스 "마인딩" 개발 및 기술 자문<br><br>',
          '- Links: <a href="https://minding.today/" target="_blank">Web</a> / <a href="https://play.google.com/store/apps/details?id=today.minding" target="_blank">Android</a> / <a href="https://apps.apple.com/kr/app/id1447465396" target="_blank">iOS</a>',
          '- 프로젝트 기초 설계 및 스택 선정',
          '- 코드 리뷰 및 기술 자문',
          '- Stack(Web): Django (+ REST Framework), React + Redux, AWS',
          '- Stack(Android): Kotlin, RxJava2, Firebase, AAC, MVVM, Databinding, Koin, LiveData, ...',
        ]
      },
      {
        'date': '2017.02 - 2017.03',
        'title': 'Kotlin Device Intel',
        'contents': [
          '단말의 모델명, OS 버전 등 여러 정보를 쉽게 보여주는 앱<br><br>',
          '- PlayStore (<a href="https://play.google.com/store/apps/details?id=io.pjhjohn.kotlin.deviceintel" target="_blank">Link</a>)',
          '- GitHub (<a href="https://github.com/pjhjohn/kotlin-device-intel" target="_blank">Link</a>)',
          '- Open Source (1 Contributor)'
        ]
      },
      {
        'date': '2016.07 - 2016.11',
        'title': '삼천원',
        'contents': [
          '문화예술 플랫폼 "삼천원" 개발<br><br>',
          '- 웹사이트 (<a href="https://3000won.com/" target="_blank">Link</a>)',
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
          'React & Redux REST API Boilerplate<br><br>',
          '- GitHub (<a href="https://github.com/pjhjohn/jsonplaceholder-client" target="_blank">Link</a>)',
          '- JSONPlaceholder Fake REST API 기반(<a href="http://jsonplaceholder.typicode.com/" target="_blank">Link</a>)',
          '- Open Source (4 Contributors)'
        ]
      },
      {
        'date': '2015.04 - 2016.01',
        'title': 'Papyruth',
        'contents': [
          '서울대학교 강의평가 서비스<br><br>',
          '- <del>PlayStore (<a href="https://play.google.com/store/apps/details?id=com.papyruth.android" target="_blank">Link</a>): 서비스 종료</del>',
          '- GitHub (<a href="https://github.com/pjhjohn/papyruth-android" target="_blank">Link</a>)',
          '- 안드로이드 프로젝트 구현',
          '- 기여도: 60%, 2인 개발'
        ]
      }
    ],
    '개인 활동': [
      {
        'date': '2019.08.04',
        'title': 'Android Conference Speaker',
        'contents': [
          'Android Conference "우리 회사는 이렇게 개발해요" 발표',
          '- 행사(<a href="https://event-us.kr/ted/event/8421" target="_blank">Link</a>)',
          '- 발표자료(<a href="https://speakerdeck.com/pjhjohn/dandanhan-geulrobeol-seobiseu-mandeulgi" target="_blank">Link</a>)'
        ]
      },
      {
        'date': '2018.02.02',
        'title': 'GDG Korea Android LT',
        'contents': [
          'GDG Korea Android Lightening Talk 발표',
          '- 행사(<a href="https://sites.google.com/view/gdg-and-2018-lt/" target="_blank">Link</a>)',
          '- 발표자료(<a href="https://speakerdeck.com/pjhjohn/sdk-gaebaljaro-salanamneun-beob" target="_blank">Link</a>)'
        ]
      },
      {
        'date': '2016.11',
        'title': '시티즌맵',
        'contents': [
          '집회 예정 장소의 위치정보 및 현재상황 제보 플랫폼',
          '- 구글 검색(<a href="https://goo.gl/dsXpxt" target="_blank">Link</a>)',
          '- 개발 참여',
        ]
      },
      {
        'date': '2016.09 - 2019.01',
        'title': '1일 1인디',
        'contents': [
          '인디 뮤지션을 알리기 위한 페이스북 페이지 운영',
          '- 페이스북 페이지(<a href="https://www.facebook.com/indieperday/" target="_blank">Link</a>)',
          '- 아티스트 / 레이블 승인 후 페이지에 참조하여 게시',
        ]
      },
      {
        'date': '2014.04 - 현재',
        'title': '멋쟁이 사자처럼',
        'contents': [
          '2기 : 서울대&연세대 튜터 - 자체 커리큘럼 제작, 수업 진행',
          '3기 : 중앙 운영진',
          '4기 : 서울대학교 운영진 - 자체 커리큘럼 제작, 수업 진행',
          '5기 ~ : 서울대학교 운영진 고문',
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
