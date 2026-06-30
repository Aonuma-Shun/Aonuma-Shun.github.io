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
    year: '',
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
    year: '',
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
    year: '',
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

const pavelDinner: Moment = {
  title: 'Dinner with Prof. Pavel',
  category: 'Group Life',
  description:
    'Dinner with my advisor Prof. Xianlin Zeng, Prof. Pavel, and my senior Jie Hou after the seminar.',
  image: '/images/moments/pavel/dining/pavel-dinner.jpg',
}

const pavelMoments: Moment[] = [
  {
    title: 'Visit in Beijing after seminar',
    category: 'Academic Visit',
    description: 'Exploring Beijing together after the seminar.',
    image: '/images/moments/pavel/visits/pavel1.jpg',
  },
  {
    title: 'Visit in Beijing after seminar',
    category: 'Academic Visit',
    description: 'Exploring Beijing together after the seminar.',
    image: '/images/moments/pavel/visits/pavel2.jpg',
  },
  {
    title: 'Visit in Beijing after seminar',
    category: 'Academic Visit',
    description: 'Exploring Beijing together after the seminar.',
    image: '/images/moments/pavel/visits/pavel3.jpg',
  },
  {
    title: 'Visit in Beijing after seminar',
    category: 'Academic Visit',
    description: 'Exploring Beijing together after the seminar.',
    image: '/images/moments/pavel/visits/pavel4.jpg',
  },
  {
    title: 'Visit in Beijing after seminar',
    category: 'Academic Visit',
    description: 'Exploring Beijing together after the seminar.',
    image: '/images/moments/pavel/visits/pavel5.jpg',
  },
  {
    title: 'Seminar with Prof. Pavel',
    category: 'Seminar',
    description: 'A research discussion during Prof. Pavel\'s visit.',
    image: '/images/moments/pavel/pavel-seminar.jpg',
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
  const [showRealPhoto, setShowRealPhoto] = useState(false)
  const [selectedNewsImage, setSelectedNewsImage] = useState<{
    alt: string
    src: string
  } | null>(null)

  const avatarSrc = showRealPhoto ? '/images/profile/profile.jpg' : '/images/profile/avatar.jpg'
  const avatarAlt = showRealPhoto ? 'Zhonghao Lin profile photo' : 'Anime avatar'
  const avatarButtonText = showRealPhoto ? 'Switch to anime avatar' : 'Switch to profile photo'

  const toggleAvatar = () => {
    setShowRealPhoto((current) => !current)
  }

  return (
    <main className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">Welcome to Zhonghao&apos;s Homepage</div>

          <div className="navLinks">
            <a href="#news">News</a>
            <a href="#publications">Publications</a>
            <a href="#moments">Moments</a>
            <a href="#interests">Interests</a>
          </div>
        </nav>

        <aside className="siteNote heroNote">
          This website is still under construction. More details about my research,
          publications, projects, and personal interests will be added soon.
        </aside>

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
            <p className="eyebrow">M.Eng. Student · Control Engineering · Beijing Institute of Technology</p>
            <h1>Zhonghao Lin</h1>
            <p className="chineseName">林仲豪</p>

            <p className="intro">
              I received the B.Eng. degree in automation in 2024 from Beijing Institute of
              Technology, Beijing, China, where I am currently working toward the M.Eng. degree
              in control engineering. My current research interests focus on distributed
              optimization, time-varying optimization, and online optimization.
            </p>

            <div className="actions">
              <a className="primaryAction" href="mailto:zhlin2002@bit.edu.cn">
                <ActionIcon name="mail" />
                Email
              </a>

              <a
                className="githubAction"
                href="https://github.com/Aonuma-Shun"
                target="_blank"
                rel="noreferrer"
              >
                <ActionIcon name="github" />
                GitHub
              </a>

              <a className="cvAction" href="/files/cv-en.pdf" target="_blank" rel="noreferrer">
                <ActionIcon name="download" />
                Download CV
              </a>

              <a
                className="zhCvAction"
                href="/files/cv-zh.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <ActionIcon name="download" />
                中文简历
              </a>
            </div>
          </div>
        </section>
      </header>

      <section id="news" className="section">
        <div className="sectionHeader">
          <p>01</p>
          <h2>News</h2>
        </div>

        <div className="timeline">
          {news.map((item) => (
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
                  <span>View</span>
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </section>

     <section id="publications" className="section">
  <div className="sectionHeader">
    <p>02</p>
    <h2>Publications</h2>
  </div>

  <div className="publicationList">
    {publications.map((paper) => (
      <article className="publication" key={paper.title}>
        <div className="publicationImage">
          {paper.image ? (
            <img src={paper.image} alt={paper.title} />
          ) : (
            <div className="publicationImageFallback">
              <span>Preview</span>
              <strong>coming soon</strong>
            </div>
          )}
        </div>

        <div className="publicationContent">
          <div className="publicationMeta">
            <span className="roleBadge">{paper.role}</span>
            <span>{paper.status}</span>
            {paper.year ? <span>{paper.year}</span> : null}
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

  <p className="publicationNote">
    <sup>*</sup> Corresponding author.
  </p>
</section>

      <section id="moments" className="section">
        <div className="sectionHeader">
          <p>03</p>
          <h2>Moments</h2>
        </div>

        <p className="sectionIntro">
          Group life, academic visits, and the quieter memories around research.
        </p>

        <div className="momentSection">
          <div className="momentGroupHeader">
            <span>Academic Visit</span>
            <h3>With Prof. Lacra Pavel</h3>
          </div>

          <div className="pavelGallery">
            <button
              className="momentCard pavelFeature"
              type="button"
              onClick={() =>
                setSelectedNewsImage({
                  alt: pavelDinner.title,
                  src: pavelDinner.image,
                })
              }
            >
              <img src={pavelDinner.image} alt={pavelDinner.title} />
              <div className="momentOverlay">
                <span>{pavelDinner.category}</span>
                <h3>{pavelDinner.title}</h3>
                <p>{pavelDinner.description}</p>
              </div>
            </button>

            <div className="pavelVisitGrid">
              {pavelMoments.map((moment) => (
                <button
                  className="momentCard compactMoment"
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
                  <div className="momentOverlay compactOverlay">
                    <span>{moment.category}</span>
                    <h3>{moment.title}</h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="momentSection">
          <div className="momentGroupHeader">
            <span>Research Group</span>
            <h3>Group Memories</h3>
          </div>

          <div className="groupGallery">
            {groupMoments.map((moment) => (
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
    <p>05</p>
    <h2>Interests</h2>
  </div>

  <div className="interestsIntro card">
    <p>
      Outside academia, I am a devoted fan of mystery and detective works, including
      detective fiction, visual novels, galgames, and anime. I am especially drawn to
      stories with intricate puzzles, unreliable narration, narrative tricks, and
      carefully hidden truths.
    </p>
  </div>

  <div className="interestGrid">
    <article className="interestCard">
      <div className="interestIcon">01</div>
      <h3>Detective Fiction</h3>
      <p>
        I have read a wide range of detective novels. Some of my favorite writers
        include Ellery Queen, Takekuni Kitayama, and Tomoyuki Shirai. I particularly
        love Kitayama&apos;s <em>Danganronpa Kirigiri</em> series and his
        <em> Castle</em> series, especially <em>The Murder at the Stone Ball Castle</em>.
        I am also fond of Shirai&apos;s <em>Meitantei no Ikenie</em> and
        <em> Elephant Head</em>. Works involving narrative tricks are among my
        personal favorites.
      </p>
    </article>

    <article className="interestCard">
      <div className="interestIcon">02</div>
      <h3>Visual Novels</h3>
      <p>
        I have also enjoyed many mystery-oriented visual novels. As my avatar may
        suggest, my favorite is the <em>When They Cry</em> series, including
        <em> Higurashi When They Cry</em> and <em>Umineko When They Cry</em>.
        In addition, <em>Ever17</em> and <em>Remember11</em> from the Infinity series
        are also among my favorites.
      </p>
    </article>

    <article className="interestCard">
      <div className="interestIcon">03</div>
      <h3>Anime</h3>
      <p>
        I have watched countless mystery and suspense anime, far too many to list here.
        In general, I enjoy works that combine atmosphere, psychological tension, and
        well-structured mysteries.
      </p>
    </article>
  </div>
</section>

      <footer className="footer">
        <p>© 2026 Zhonghao Lin. Built with React, Vite, and GitHub Pages.</p>
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
              Close
            </button>
            <img src={selectedNewsImage.src} alt={selectedNewsImage.alt} />
          </div>
        </div>
      ) : null}
    </main>
  )
}

export default App
