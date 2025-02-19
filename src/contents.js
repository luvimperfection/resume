module.exports = {
  profile: {
    name: '최정인 (JungIn Choi)',
    description: 'Android Developer',
    dateOfBirth: '1996.7.7',
    email: 'luvimperfection@gmail.com',
    links: [
      {name: 'Github', href: 'https://github.com/luvimperfection'},
      {name: 'Instagram', href: 'https://www.instagram.com/jc_jungin_choi/'},
      {name: 'Tistory', href: 'https://jin-choi.tistory.com/'},
    ]
  },
  introduction: `
    치밀한 협업을 통한 팀의 성장을 중요하게 생각하며, 협업의 질을 높이기 위한 다양한 자동화를 설계하고 실천합니다.<br>
    자발적인 참여가 모일 때 최고의 아웃풋이 나온다고 생각하며, 이를 위해 먼저 목표를 설정하고 커뮤니케이션합니다.<br>
    주도적으로 환경에 적응하되 맹목적으로 순응하지는 않습니다. 더 나은 상태를 위해 끊임없이 고민하고 실험합니다.<br>
    문제의 핵심에 집중해서 비즈니스 임팩트를 내는 것과 지속적인 효과가 발생하는 시스템을 설계하는 것을 좋아합니다.<br>
    단편적인 지식전달 보다는 잘 듣고, 함께 고민하면서 좋은 질문을 던지는 것을 지향합니다.<br>
    `
  ,
  summary: {
    '경력 요약': [
      {
        'date': ['2021.04', '현재'],
        'title': '(주) 나인투원',
        'contents': [
          '일레클 Android 개발'
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
          '<strong>Kotlin / Java</strong> / Python / JavaScript(ES6) / C / C++ ...',
        ]
      },
      {
        'date': 'Frameworks',
        'title': '사용 프레임워크',
        'contents': [
          '<strong>Android</strong> / Django / React / HTML / CSS ...',
        ]
      },
      {
        'date': 'Tools / System',
        'title': '툴 및 시스템 (빈도 순)',
        'contents': [
          '<strong>AndroidStudio / Slack / Notion / Asana / Figma</strong>  ...'
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
        'date': '2018.11-2018.12',
        'title': '클린 모드',
        'contents': [
          '기사 내용만 깔끔하게 보여주는 읽기모드를 지원하는 확장앱<br><br>',
          '- WhaleStore (<a href="https://store.whale.naver.com/detail/fcgonohilehipjoehihinppmfefepbdh">Link</a>)',
          '- 자바스크립트 프로젝트',
        ]
      }
    ],
    '개인 활동': [
       {
        'date': '2018.05-',
        'title': '에티 ETI',
        'contents': [
          '국내외 기술동향 & 스타트업 뉴스레터',
          '- Facebook (<a href="https://www.facebook.com/etinow/">Link</a>)',
          '- Blog (<a href="https://etinow.me/"></a>)',
          '- Press (<a href="https://www.snu.ac.kr/snunow/snu_story?md=v&bbsidx=125393">Link</a>)'
	]
      }
    ],
    '학력 사항': [
      {
        'date': '2015 - 2020',
        'title': '서울대학교 학사',
        'contents': ['산업공학 주전공', '컴퓨터공학 복수전공']
      },
      {
        'date': '2012 - 2014',
        'title': '하나고등학교',
        'contents': ['-']
      }
    ]
  }
};
