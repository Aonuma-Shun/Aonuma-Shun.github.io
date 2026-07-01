import { useState, type ReactNode } from 'react'
import './App.css'

type NewsItem = {
  date: string
  title: string
  text: ReactNode
  image?: string
  imageAlt?: string
}

type Publication = {
  title: string
  authors: ReactNode
  venue: string
  year: string
  role: string
  status: string
  description: string
  image?: string
  tags?: string[]
  links?: {
    label: string
    url: string
  }[]
}

type Moment = {
  title: string
  category: string
  description: string
  image: string
}

type Language = 'en' | 'zh'

const news: NewsItem[] = [
  {
    date: 'Jun 2026',
    title: 'IEEE TSP',
    text: (
      <>
        First-authored paper accepted and published in{' '}
        <strong className="journalName">IEEE Transactions on Signal Processing</strong>.
      </>
    ),
    image: '/images/news/TSP-2026.png',
    imageAlt: 'Overview figure for the IEEE TSP paper',
  },
  {
    date: 'Apr 2026',
    title: 'CUHK Visit',
    text: (
      <>
        <strong>Prof. Anthony So</strong>, an IEEE Fellow from The Chinese University of Hong
        Kong, visited our group and delivered a seminar titled{' '}
        <em>Universal Gradient Descent Ascent Method for Smooth Minimax Optimization</em>.
      </>
    ),
    image: '/images/news/So-2026.jpg',
    imageAlt: 'Seminar poster for Prof. Anthony So',
  },
  {
    date: 'Feb 2026',
    title: 'JSSC',
    text: (
      <>
        First-authored paper accepted and published in{' '}
        <strong className="journalName">Journal of Systems Science and Complexity</strong>.
      </>
    ),
    image: '/images/news/JSSC-2026.png',
    imageAlt: 'Figure from the JSSC paper',
  },
  {
    date: 'Mar 2025',
    title: 'UofT Visit',
    text: (
      <>
        <strong>Prof. Lacra Pavel</strong>, an IEEE Fellow from the University of Toronto,
        visited our group and delivered a seminar titled{' '}
        <em>On System Theory for Learning in Games</em>.
      </>
    ),
    image: '/images/news/Pavel-2025.jpg',
    imageAlt: 'Seminar poster for Prof. Lacra Pavel',
  },
  {
    date: 'Sep 2024',
    title: 'M.Eng. at BIT',
    text: (
      <>
        Began working toward the M.Eng. degree in Control Engineering at Beijing Institute
        of Technology under the supervision of <strong>Prof. Xianlin Zeng</strong>.
      </>
    ),
    image: '/images/news/MEng-2024.jpg',
    imageAlt: 'Group photo at the Pattern Recognition Research Group',
  },
  {
    date: 'Jun 2024',
    title: 'B.Eng. Graduation',
    text: 'Graduated from Beijing Institute of Technology with a B.Eng. degree in automation!!',
    image: '/images/news/Grad-2024.jpg',
    imageAlt: 'Graduation ceremony at Beijing Institute of Technology',
  },
]

const newsZh: NewsItem[] = [
  {
    date: '2026 年 6 月',
    title: 'IEEE TSP',
    text: (
      <>
        第一作者论文被{' '}
        <strong className="journalName">IEEE Transactions on Signal Processing</strong>{' '}
        录用并发表。
      </>
    ),
    image: '/images/news/TSP-2026.png',
    imageAlt: 'IEEE TSP 论文示意图',
  },
  {
    date: '2026 年 4 月',
    title: '苏文藻教授来访',
    text: (
      <>
        香港中文大学 IEEE Fellow <strong>苏文藻教授</strong>来访课题组，并作题为{' '}
        <em>Universal Gradient Descent Ascent Method for Smooth Minimax Optimization</em>{' '}
        的学术报告。
      </>
    ),
    image: '/images/news/So-2026.jpg',
    imageAlt: '苏文藻教授学术报告海报',
  },
  {
    date: '2026 年 2 月',
    title: 'JSSC',
    text: (
      <>
        第一作者论文被{' '}
        <strong className="journalName">Journal of Systems Science and Complexity</strong>{' '}
        录用并发表。
      </>
    ),
    image: '/images/news/JSSC-2026.png',
    imageAlt: 'JSSC 论文示意图',
  },
  {
    date: '2025 年 3 月',
    title: 'Lacra Pavel 教授来访',
    text: (
      <>
        多伦多大学 IEEE Fellow <strong>Lacra Pavel 教授</strong>来访课题组，并作题为{' '}
        <em>On System Theory for Learning in Games</em> 的学术报告。
      </>
    ),
    image: '/images/news/Pavel-2025.jpg',
    imageAlt: 'Lacra Pavel 教授学术报告海报',
  },
  {
    date: '2024 年 9 月',
    title: '攻读硕士学位',
    text: (
      <>
        开始在北京理工大学攻读控制工程硕士学位，导师为<strong>曾宪琳教授</strong>。
      </>
    ),
    image: '/images/news/MEng-2024.jpg',
    imageAlt: '模式识别课题组合影',
  },
  {
    date: '2024 年 6 月',
    title: '本科毕业',
    text: '本科顺利毕业于北京理工大学自动化专业!!',
    image: '/images/news/Grad-2024.jpg',
    imageAlt: '北京理工大学毕业典礼',
  },
]

const publications: Publication[] = [
  {
    title:
      'Hessian-Inverse-Free Prediction-Correction Method for Time-Varying Convex Optimization',
    authors: (
  <>
    <strong className="myName">Zhonghao Lin</strong>, Jie Hou
    <sup className="correspondingAuthor" title="Corresponding author">
      *
    </sup>
    , Xianlin Zeng
  </>
),
    venue: '2026 IEEE Conference on Decision and Control',
    year: '2026',
    role: 'First author',
    status: 'Submitted to CDC · Under review',
    description:
      'A Hessian-inverse-free prediction-correction method that uses an auxiliary flow to track time-varying convex optimization solutions without explicit matrix inversion.',
    tags: ['CDC', 'Time-varying optimization', 'Hessian-inverse-free'],
  },
  {
    title:
      'Optimal Prediction-Correction Algorithm Using Sparse Linear Extrapolation for Time-Varying Optimization',
    authors: (
  <>
    <strong className="myName">Zhonghao Lin</strong>, Jie Hou
    <sup className="correspondingAuthor" title="Corresponding author">
      *
    </sup>
    , Xianlin Zeng
  </>
),
    venue: 'IEEE Transactions on Signal Processing',
    year: '2026',
    role: 'First author',
    status: 'Accepted in Jun. 2026 · Published in Jun. 2026',
    description:
      'An optimal sparse linear extrapolation based prediction-correction algorithm for efficient and high-order tracking in strongly convex time-varying optimization.',
    image: '/images/publications/TSP-SEPC.png',
    tags: ['IEEE TSP', 'Time-varying optimization', 'Prediction-correction'],
    links: [
      {
        label: 'IEEE Xplore',
        url: 'https://ieeexplore.ieee.org/document/11563734/',
      },
      {
        label: 'PDF',
        url: '/files/tsp-2026.pdf',
      },
    ],
  },
  {
    title:
      'Primal-Dual Prediction-Correction Method with Tunable Memory for Linearly Constrained Time-Varying Convex Optimization',
    authors: (
  <>
    <strong className="myName">Zhonghao Lin</strong>, Xianlin Zeng, Jie Hou
    <sup className="correspondingAuthor" title="Corresponding author">
      *
    </sup>
    , Jian Sun, Jie Chen
  </>
),
    venue: 'Journal of Systems Science and Complexity',
    year: '2026',
    role: 'First author',
    status: 'Accepted in Feb. 2026 · Published in Apr. 2026',
    description:
      'A primal-dual prediction-correction method with tunable memory for linearly constrained time-varying convex optimization.',
    image: '/images/publications/JSSC-PDPC.png',
    tags: ['JSSC', 'Primal-dual method', 'Constrained optimization'],
    links: [
      {
        label: 'Springer',
        url: 'https://link.springer.com/article/10.1007/s11424-026-5499-7',
      },
      {
        label: 'PDF',
        url: '/files/jssc-2026.pdf',
      },
    ],
  },
]

const publicationsZh: Publication[] = [
  {
    title:
      'Hessian-Inverse-Free Prediction-Correction Method for Time-Varying Convex Optimization',
    authors: (
      <>
        <strong className="myName">林仲豪</strong>，侯洁
        <sup className="correspondingAuthor" title="通讯作者">
          *
        </sup>
        ，曾宪琳
      </>
    ),
    venue: '2026 IEEE Conference on Decision and Control',
    year: '2026',
    role: '第一作者',
    status: '已投稿至 CDC 2026 · 审稿中',
    description:
      '提出一种无需 Hessian 逆矩阵的预测-校正方法，通过辅助流跟踪时变凸优化问题的最优解，避免显式矩阵求逆。',
    tags: ['CDC', '时变优化', '无需 Hessian 逆'],
  },
  {
    title:
      'Optimal Prediction-Correction Algorithm Using Sparse Linear Extrapolation for Time-Varying Optimization',
    authors: (
      <>
        <strong className="myName">林仲豪</strong>，侯洁
        <sup className="correspondingAuthor" title="通讯作者">
          *
        </sup>
        ，曾宪琳
      </>
    ),
    venue: 'IEEE Transactions on Signal Processing',
    year: '2026',
    role: '第一作者',
    status: '2026 年 6 月录用并发表',
    description:
      '提出一种基于稀疏线性外推的最优预测-校正算法，用于强凸时变优化中的高效高阶跟踪。',
    image: '/images/publications/TSP-SEPC.png',
    tags: ['IEEE TSP', '时变优化', '预测-校正'],
    links: [
      {
        label: 'IEEE Xplore',
        url: 'https://ieeexplore.ieee.org/document/11563734/',
      },
      {
        label: 'PDF',
        url: '/files/tsp-2026.pdf',
      },
    ],
  },
  {
    title:
      'Primal-Dual Prediction-Correction Method with Tunable Memory for Linearly Constrained Time-Varying Convex Optimization',
    authors: (
      <>
        <strong className="myName">林仲豪</strong>，曾宪琳，侯洁
        <sup className="correspondingAuthor" title="通讯作者">
          *
        </sup>
        ，孙健，陈杰
      </>
    ),
    venue: 'Journal of Systems Science and Complexity',
    year: '2026',
    role: '第一作者',
    status: '2026 年 2 月录用 · 2026 年 4 月发表',
    description:
      '提出一种带可调记忆项的原始-对偶预测-校正方法，用于线性约束时变凸优化问题。',
    image: '/images/publications/JSSC-PDPC.png',
    tags: ['JSSC', '原始-对偶方法', '约束优化'],
    links: [
      {
        label: 'Springer',
        url: 'https://link.springer.com/article/10.1007/s11424-026-5499-7',
      },
      {
        label: 'PDF',
        url: '/files/jssc-2026.pdf',
      },
    ],
  },
]

function groupPublications(papers: Publication[]) {
  return papers.reduce<Array<{ papers: Publication[]; year: string }>>((groups, paper) => {
    const group = groups.find((item) => item.year === paper.year)

    if (group) {
      group.papers.push(paper)
    } else {
      groups.push({ year: paper.year, papers: [paper] })
    }

    return groups
  }, [])
}

const pavelDinner: Moment = {
  title: 'Dinner with Prof. Pavel',
  category: 'Group Life',
  description:
    'Dinner with my advisor Prof. Xianlin Zeng, Prof. Pavel, and my senior Jie Hou after the seminar.',
  image: '/images/moments/pavel/dining/pavel-dinner.jpg',
}

const pavelSeminar: Moment = {
  title: 'Seminar with Prof. Pavel',
  category: 'Seminar',
  description: 'A research discussion during Prof. Pavel\'s visit.',
  image: '/images/moments/pavel/pavel-seminar.jpg',
}

const pavelVisits: Moment[] = [
  {
    title: 'Visit Photo 01',
    category: 'Academic Visit',
    description: 'Exploring Beijing together after the seminar.',
    image: '/images/moments/pavel/visits/pavel1.jpg',
  },
  {
    title: 'Visit Photo 02',
    category: 'Academic Visit',
    description: 'Exploring Beijing together after the seminar.',
    image: '/images/moments/pavel/visits/pavel2.jpg',
  },
  {
    title: 'Visit Photo 03',
    category: 'Academic Visit',
    description: 'Exploring Beijing together after the seminar.',
    image: '/images/moments/pavel/visits/pavel3.jpg',
  },
  {
    title: 'Visit Photo 04',
    category: 'Academic Visit',
    description: 'Exploring Beijing together after the seminar.',
    image: '/images/moments/pavel/visits/pavel4.jpg',
  },
  {
    title: 'Visit Photo 05',
    category: 'Academic Visit',
    description: 'Exploring Beijing together after the seminar.',
    image: '/images/moments/pavel/visits/pavel5.jpg',
  },
  {
    title: 'Visit Photo 06',
    category: 'Academic Visit',
    description: 'Exploring Beijing together after the seminar.',
    image: '/images/moments/pavel/visits/pavel6.jpg',
  },
]

const groupMoments: Moment[] = [
  {
    title: 'Teachers\' Day 2024',
    category: 'Research Group',
    description: 'Group photo celebrating Teachers\' Day in 2024.',
    image: '/images/moments/Group/Group-2024.jpg',
  },
  {
    title: 'Graduation Season 2025',
    category: 'Research Group',
    description: 'Group photo with graduating students in 2025.',
    image: '/images/moments/Group/Group-grad-2025.jpg',
  },
  {
    title: 'Teachers\' Day 2025',
    category: 'Research Group',
    description: 'Group photo celebrating Teachers\' Day in 2025.',
    image: '/images/moments/Group/Group-2025.jpg',
  },
  {
    title: 'Graduation Season 2026',
    category: 'Research Group',
    description: 'Group photo with graduating students in 2026.',
    image: '/images/moments/Group/Group-grad-2026.jpg',
  },
]

const pavelDinnerZh: Moment = {
  ...pavelDinner,
  title: '与 Pavel 教授共进晚餐',
  category: '课题组生活',
  description: '报告结束后，与导师曾宪琳教授、Pavel 教授和师姐侯洁一起共进晚餐。',
}

const pavelSeminarZh: Moment = {
  ...pavelSeminar,
  title: 'Pavel 教授学术报告',
  category: '学术报告',
  description: 'Pavel 教授来访期间的学术交流现场。',
}

const pavelVisitsZh: Moment[] = pavelVisits.map((moment, index) => ({
  ...moment,
  title: `北京访问照片 ${String(index + 1).padStart(2, '0')}`,
  category: '学术访问',
  description: '报告结束后的北京之行。',
}))

const groupMomentsZh: Moment[] = [
  {
    ...groupMoments[0],
    title: '2024 教师节合照',
    category: '课题组合影',
    description: '2024 年教师节课题组合影。',
  },
  {
    ...groupMoments[1],
    title: '2025 届毕业合影',
    category: '课题组合影',
    description: '与 2025 届毕业生一起留下的课题组合影。',
  },
  {
    ...groupMoments[2],
    title: '2025 教师节合照',
    category: '课题组合影',
    description: '2025 年教师节课题组合影。',
  },
  {
    ...groupMoments[3],
    title: '2026 届毕业合影',
    category: '课题组合影',
    description: '与 2026 届毕业生一起留下的课题组合影。',
  },
]

type ActionIconName = 'mail' | 'github' | 'download' | 'switch'

function ActionIcon({ name }: { name: ActionIconName }) {
  if (name === 'github') {
    return (
      <svg className="actionIcon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2C6.47 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.29 9.29 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
          clipRule="evenodd"
        />
      </svg>
    )
  }

  const iconPaths = {
    mail: (
      <>
        <path d="M4 6.5h16v11H4z" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    download: (
      <>
        <path d="M12 4v10" />
        <path d="m8 10 4 4 4-4" />
        <path d="M5 19h14" />
      </>
    ),
    switch: (
      <>
        <path d="M17 2.5 21 6.5 17 10.5" />
        <path d="M3 6.5h18" />
        <path d="M7 21.5 3 17.5 7 13.5" />
        <path d="M21 17.5H3" />
      </>
    ),
  } satisfies Record<Exclude<ActionIconName, 'github'>, ReactNode>

  return (
    <svg
      className="actionIcon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const [showRealPhoto, setShowRealPhoto] = useState(false)
  const [selectedNewsImage, setSelectedNewsImage] = useState<{
    alt: string
    src: string
  } | null>(null)

  const isChinese = language === 'zh'
  const avatarSrc = showRealPhoto ? '/images/profile/profile.jpg' : '/images/profile/avatar.jpg'
  const avatarAlt = isChinese
    ? showRealPhoto
      ? '林仲豪个人照片'
      : '动漫头像'
    : showRealPhoto
      ? 'Zhonghao Lin profile photo'
      : 'Anime avatar'
  const avatarButtonText = isChinese
    ? showRealPhoto
      ? '切换为动漫头像'
      : '切换为个人照片'
    : showRealPhoto
      ? 'Switch to anime avatar'
      : 'Switch to profile photo'
  const viewLabel = isChinese ? '查看' : 'View'
  const closeLabel = isChinese ? '关闭' : 'Close'
  const visibleNews = isChinese ? newsZh : news
  const visiblePublicationGroups = groupPublications(isChinese ? publicationsZh : publications)
  const visiblePavelDinner = isChinese ? pavelDinnerZh : pavelDinner
  const visiblePavelSeminar = isChinese ? pavelSeminarZh : pavelSeminar
  const visiblePavelVisits = isChinese ? pavelVisitsZh : pavelVisits
  const visibleGroupMoments = isChinese ? groupMomentsZh : groupMoments
  const copy = {
    brand: isChinese ? '欢迎来到林仲豪的主页' : 'Welcome to Zhonghao\'s Homepage',
    languageToggle: isChinese ? 'EN' : '中文',
    languageToggleSub: isChinese ? 'Switch' : '切换',
    switchLanguageLabel: isChinese ? 'Switch to English' : '切换到中文版本',
    nav: isChinese
      ? ['新闻', '论文', '生活片段', '兴趣']
      : ['News', 'Publications', 'Moments', 'Interests'],
    siteNote: isChinese
      ? '本站仍在建设中。更多关于研究、论文、项目和个人兴趣的内容会陆续更新。'
      : 'This website is still under construction. More details about my research, publications, projects, and personal interests will be added soon.',
    eyebrow: isChinese
      ? '控制工程硕士生 · 北京理工大学'
      : 'M.Eng. Student · Control Engineering · Beijing Institute of Technology',
    intro: isChinese
      ? '我于 2024 年在北京理工大学获自动化专业工学学士学位，目前继续在北京理工大学攻读控制工程硕士学位。我的研究兴趣主要包括分布式优化、时变优化与在线优化。'
      : 'I received the B.Eng. degree in automation in 2024 from Beijing Institute of Technology, Beijing, China, where I am currently working toward the M.Eng. degree in control engineering. My current research interests focus on distributed optimization, time-varying optimization, and online optimization.',
    actions: isChinese
      ? ['邮箱', 'GitHub', '英文简历', '中文简历']
      : ['Email', 'GitHub', 'Download CV', '中文简历'],
    sections: isChinese
      ? ['新闻动态', '论文发表', '生活片段', '兴趣']
      : ['News', 'Publications', 'Moments', 'Interests'],
    publicationFallback: isChinese ? ['预览', '即将更新'] : ['Preview', 'coming soon'],
    publicationNote: isChinese ? '通讯作者。' : 'Corresponding author.',
    momentsIntro: isChinese
      ? '课题组生活、学术访问，以及研究之外的一些日常片段。'
      : 'Group life, academic visits, and the quieter memories around research.',
    pavelGroup: isChinese
      ? ['学术访问', '与 Lacra Pavel 教授']
      : ['Academic Visit', 'With Prof. Lacra Pavel'],
    pavelVisitBlock: isChinese
      ? ['学术访问', '报告后的北京之行']
      : ['Academic Visit', 'Visit in Beijing after seminar'],
    groupMemories: isChinese ? ['课题组', '课题组合影'] : ['Research Group', 'Group Memories'],
    footer: isChinese
      ? '© 2026 林仲豪。使用 React、Vite 与 GitHub Pages 构建。'
      : '© 2026 Zhonghao Lin. Built with React, Vite, and GitHub Pages.',
  }

  const toggleAvatar = () => {
    setShowRealPhoto((current) => !current)
  }

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'zh' : 'en'))
  }

  return (
    <main className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">{copy.brand}</div>

          <div className="navActions">
            <div className="navLinks">
              <a href="#news">{copy.nav[0]}</a>
              <a href="#publications">{copy.nav[1]}</a>
              <a href="#moments">{copy.nav[2]}</a>
              <a href="#interests">{copy.nav[3]}</a>
            </div>

            <button
              className="languageToggle"
              type="button"
              onClick={toggleLanguage}
              aria-label={copy.switchLanguageLabel}
            >
              <span>{copy.languageToggle}</span>
              <small>{copy.languageToggleSub}</small>
            </button>
          </div>
        </nav>

        <aside className="siteNote heroNote">{copy.siteNote}</aside>

        <section className="heroContent">
          <div className="avatarPanel">
  <img
    key={avatarSrc}
    className="avatar"
    src={avatarSrc}
    alt={avatarAlt}
    title={avatarButtonText}
    onClick={toggleAvatar}
  />

  <button className="avatarToggle" type="button" onClick={toggleAvatar}>
    <ActionIcon name="switch" />
    {avatarButtonText}
  </button>
</div>

          <div className="heroText">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{isChinese ? '林仲豪' : 'Zhonghao Lin'}</h1>
            {isChinese ? <p className="chineseName">Zhonghao Lin</p> : null}

            <p className="intro">{copy.intro}</p>

            <div className="actions">
              <a className="primaryAction" href="mailto:zhlin2002@bit.edu.cn">
                <ActionIcon name="mail" />
                {copy.actions[0]}
              </a>

              <a
                className="githubAction"
                href="https://github.com/Aonuma-Shun"
                target="_blank"
                rel="noreferrer"
              >
                <ActionIcon name="github" />
                {copy.actions[1]}
              </a>

              <a className="cvAction" href="/files/cv-en.pdf" target="_blank" rel="noreferrer">
                <ActionIcon name="download" />
                {copy.actions[2]}
              </a>

              <a
                className="zhCvAction"
                href="/files/cv-zh.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <ActionIcon name="download" />
                {copy.actions[3]}
              </a>
            </div>
          </div>
        </section>
      </header>

      <section id="news" className="section">
        <div className="sectionHeader">
          <p>01</p>
          <h2>{copy.sections[0]}</h2>
        </div>

        <div className="timeline">
          {visibleNews.map((item) => (
            <div className="timelineItem" key={`${item.date}-${item.title}`}>
              <span className="date">{item.date}</span>
              <div className="timelineContent">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              {item.image ? (
                <button
                  className="newsImageButton"
                  type="button"
                  onClick={() =>
                    setSelectedNewsImage({
                      alt: item.imageAlt ?? item.title,
                      src: item.image ?? '',
                    })
                  }
                  aria-label={`View image for ${item.title}`}
                >
                  <img src={item.image} alt={item.imageAlt ?? item.title} />
                  <span>{viewLabel}</span>
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </section>

     <section id="publications" className="section">
  <div className="sectionHeader">
    <p>02</p>
    <h2>{copy.sections[1]}</h2>
  </div>

  <div className="publicationYearList">
    {visiblePublicationGroups.map((group) => (
      <div className="publicationYearGroup" key={group.year}>
        <h3 className="publicationYear">{group.year}</h3>

        <div className="publicationList">
          {group.papers.map((paper) => (
      <article className="publication" key={paper.title}>
        <div className="publicationImage">
          {paper.image ? (
            <img src={paper.image} alt={paper.title} />
          ) : (
            <div className="publicationImageFallback">
              <span>{copy.publicationFallback[0]}</span>
              <strong>{copy.publicationFallback[1]}</strong>
            </div>
          )}
        </div>

        <div className="publicationContent">
          <div className="publicationMeta">
            <span className="roleBadge">{paper.role}</span>
            <span>{paper.status}</span>
          </div>

          <h3>{paper.title}</h3>

          <div className="publicationTags">
            {paper.tags?.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <p className="authors">{paper.authors}</p>
          <p className="venue">{paper.venue}</p>
          <p className="paperDescription">{paper.description}</p>

          {paper.links ? (
            <div className="paperLinks">
              {paper.links.map((link) => (
                <a href={link.url} key={link.label} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </article>
          ))}
        </div>
      </div>
    ))}
    </div>

  <p className="publicationNote">
    <sup>*</sup> {copy.publicationNote}
  </p>
</section>

      <section id="moments" className="section">
        <div className="sectionHeader">
          <p>03</p>
          <h2>{copy.sections[2]}</h2>
        </div>

        <p className="sectionIntro">{copy.momentsIntro}</p>

        <div className="momentSection">
          <div className="momentGroupHeader">
            <span>{copy.pavelGroup[0]}</span>
            <h3>{copy.pavelGroup[1]}</h3>
          </div>

          <div className="pavelHighlightGrid">
            <button
              className="momentCard pavelHighlight"
              type="button"
              onClick={() =>
                setSelectedNewsImage({
                  alt: visiblePavelSeminar.title,
                  src: visiblePavelSeminar.image,
                })
              }
            >
              <img src={visiblePavelSeminar.image} alt={visiblePavelSeminar.title} />
              <div className="momentOverlay">
                <span>{visiblePavelSeminar.category}</span>
                <h3>{visiblePavelSeminar.title}</h3>
                <p>{visiblePavelSeminar.description}</p>
              </div>
            </button>

            <button
              className="momentCard pavelHighlight"
              type="button"
              onClick={() =>
                setSelectedNewsImage({
                  alt: visiblePavelDinner.title,
                  src: visiblePavelDinner.image,
                })
              }
            >
              <img src={visiblePavelDinner.image} alt={visiblePavelDinner.title} />
              <div className="momentOverlay">
                <span>{visiblePavelDinner.category}</span>
                <h3>{visiblePavelDinner.title}</h3>
                <p>{visiblePavelDinner.description}</p>
              </div>
            </button>
          </div>

          <div className="visitBlock">
            <div className="visitBlockHeader">
              <span>{copy.pavelVisitBlock[0]}</span>
              <h4>{copy.pavelVisitBlock[1]}</h4>
            </div>
            <div className="pavelVisitGrid">
              {visiblePavelVisits.map((moment) => (
                <button
                  className="visitMoment"
                  type="button"
                  key={moment.image}
                  onClick={() =>
                    setSelectedNewsImage({
                      alt: moment.title,
                      src: moment.image,
                    })
                  }
                >
                  <img src={moment.image} alt={moment.title} />
                  <span>{viewLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="momentSection">
          <div className="momentGroupHeader">
            <span>{copy.groupMemories[0]}</span>
            <h3>{copy.groupMemories[1]}</h3>
          </div>

          <div className="groupGallery">
            {visibleGroupMoments.map((moment) => (
              <button
                className="momentCard groupMoment"
                type="button"
                key={moment.image}
                onClick={() =>
                  setSelectedNewsImage({
                    alt: moment.title,
                    src: moment.image,
                  })
                }
              >
                <img src={moment.image} alt={moment.title} />
                <div className="momentOverlay">
                  <span>{moment.category}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="interests" className="section">
        <div className="sectionHeader">
          <p>04</p>
          <h2>{copy.sections[3]}</h2>
        </div>

        {isChinese ? (
          <>
            <div className="interestsIntro card">
              <p>
                学术之外，我是一个重度悬疑推理爱好者。推理小说、悬疑视觉小说、
                galgame 与动画都是我长期关注的类型；我尤其喜欢精巧谜题、叙述性诡计
                和层层反转之后仍能自洽的真相。
              </p>
            </div>

            <div className="interestGrid">
              <article className="interestCard">
                <div className="interestIcon">01</div>
                <h3>推理小说</h3>
                <p>
                  我阅读过大量推理小说，喜欢的作家包括<em>埃勒里·奎因</em>、
                  <em>北山猛邦</em>和<em>白井智之</em>。其中尤其喜欢北山猛邦的
                  <em>弹丸论破：雾切</em>系列和“杀人城”系列，特别是
                  <em>《石球城杀人事件》</em>；白井智之的<em>《名侦探的献祭》</em>
                  与<em>《Elephant Head》</em>也很合我的口味。带有叙述性诡计的作品
                  对我来说总有额外的吸引力。
                </p>
              </article>

              <article className="interestCard">
                <div className="interestIcon">02</div>
                <h3>视觉小说</h3>
                <p>
                  我也看过许多悬疑推理向视觉小说。正如头像暗示的那样，最喜欢的是
                  <em>When They Cry</em> 系列，包括<em>寒蝉鸣泣之时</em>与
                  <em>海猫鸣泣之时</em>。此外，Infinity 系列中的<em>Ever17</em>和
                  <em>Remember11</em>也是我很喜欢的作品。
                </p>
              </article>

              <article className="interestCard">
                <div className="interestIcon">03</div>
                <h3>动画</h3>
                <p>
                  悬疑类动画看过很多，这里不一一列举。总体来说，我偏爱那些兼具氛围、
                  心理张力和扎实谜题结构的作品。
                </p>
              </article>
            </div>
          </>
        ) : (
          <>
            <div className="interestsIntro card">
              <p>
                Outside academia, I am a devoted fan of mystery and detective works,
                including detective fiction, visual novels, galgames, and anime. I am
                especially drawn to stories with intricate puzzles, unreliable narration,
                narrative tricks, and carefully hidden truths.
              </p>
            </div>

            <div className="interestGrid">
              <article className="interestCard">
                <div className="interestIcon">01</div>
                <h3>Detective Fiction</h3>
                <p>
                  I have read a wide range of detective novels. Some of my favorite
                  writers include Ellery Queen, Takekuni Kitayama, and Tomoyuki Shirai. I
                  particularly love Kitayama&apos;s <em>Danganronpa Kirigiri</em> series
                  and his <em>Castle</em> series, especially{' '}
                  <em>The Murder at the Stone Ball Castle</em>. I am also fond of
                  Shirai&apos;s <em>Meitantei no Ikenie</em> and <em>Elephant Head</em>.
                  Works involving narrative tricks are among my personal favorites.
                </p>
              </article>

              <article className="interestCard">
                <div className="interestIcon">02</div>
                <h3>Visual Novels</h3>
                <p>
                  I have also enjoyed many mystery-oriented visual novels. As my avatar
                  may suggest, my favorite is the <em>When They Cry</em> series, including{' '}
                  <em>Higurashi When They Cry</em> and <em>Umineko When They Cry</em>. In
                  addition, <em>Ever17</em> and <em>Remember11</em> from the Infinity
                  series are also among my favorites.
                </p>
              </article>

              <article className="interestCard">
                <div className="interestIcon">03</div>
                <h3>Anime</h3>
                <p>
                  I have watched countless mystery and suspense anime, far too many to
                  list here. In general, I enjoy works that combine atmosphere,
                  psychological tension, and well-structured mysteries.
                </p>
              </article>
            </div>
          </>
        )}
      </section>

      <footer className="footer">
        <p>{copy.footer}</p>
      </footer>

      {selectedNewsImage ? (
        <div
          className="imageLightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedNewsImage.alt}
          onClick={() => setSelectedNewsImage(null)}
        >
          <div className="imageLightboxContent" onClick={(event) => event.stopPropagation()}>
            <button
              className="imageLightboxClose"
              type="button"
              onClick={() => setSelectedNewsImage(null)}
            >
              {closeLabel}
            </button>
            <img src={selectedNewsImage.src} alt={selectedNewsImage.alt} />
          </div>
        </div>
      ) : null}
    </main>
  )
}

export default App
