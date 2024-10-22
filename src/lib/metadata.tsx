type Metadata = {
  owner: {
    [index: string]: any
  }
  work_exp: {
    [index: string]: any
  }
  work: {
    [index: string]: any
  }
  blog: {
    [index: string]: any
  }
  education: {
    [index: string]: any
  }
  contacts: {
    [index: string]: any
  }
}

export const metadata: Metadata = {
  owner: {
    name: 'Rasel Shikdar',
    role: 'Frontend Developer',
    email: 'info@rasel.us.kg',
  },
  work_exp: {
    0: {
      year: '2024.07~',
      role: '',
      company: 'working',
    },
    1: {
      year: '2021-2023',
      role: 'Frontend Dev',
      company: 'Aikomi Inc.',
      link: 'https://aikomi.co.jp/',
    },
    2: {
      year: '2020-2021',
      role: 'FLT',
      company: 'BorderLink Inc.',
      link: 'https://www.borderlink.co.jp/alt/',
    },
    3: {
      year: 'Winter 2017',
      role: 'Frontend Dev. Intern',
      company: 'FASTech LLC.',
    },
    4: {
      year: '2014-2016',
      role: 'Computer Lab Aide',
      company: 'Riverside City College',
      link: 'https://www.rcc.edu/student-support/ccc-lab.html',
    },
  },
  work: {
    98: {
      year: '2024.04',
      project: 'shigan',
      desc: ' - CLI Time Tracker (Rust)',
      link: 'https://github.com/rolemadelen/shigan',
    },
    99: {
      year: '2024.03',
      project: 'pomosh',
      desc: ' - CLI Pomodoro Timer (Rust)',
      link: 'https://github.com/rolemadelen/pomosh',
    },
    100: {
      year: '2024.02',
      project: 'YourTrack',
      desc: ' - Monthly Spotify Highlights',
      link: 'https://github.com/rolemadelen/yourtrack',
    },
    150: {
      year: '2023.09',
      project: 'Portfolio v2.0',
      link: 'https://github.com/rolemadelen/portfolio_v2',
    },
    200: {
      year: '2023.08',
      project: 'Asayake Taiko',
      desc: ' - Website Renewal',
      link: 'https://github.com/rolemadelen/asayake',
    },
    300: {
      year: '2023.07',
      project: 'Things I Want',
      link: 'https://github.com/rolemadelen/things-i-want',
    },
    400: {
      year: '2023.06',
      project: 'Portfolio v1.0',
      link: 'https://github.com/rolemadelen/rolemadelen.github.io',
    },
    500: {
      year: '2023.03',
      project: 'Artlog',
      link: 'https://github.com/rolemadelen/artlog',
    },
    600: {
      year: '2022.07',
      project: 'ghostvatar',
      link: 'https://github.com/rolemadelen/ghost-vatar',
    },
    700: {
      year: '2020.05',
      project: 'Baekjoon Online Judge CLI',
      link: 'https://github.com/rolemadelen/boj-solvedac',
    },
    800: {
      year: '2016.04',
      project: 'TUI Chess',
      link: 'https://github.com/rolemadelen/chess',
    },
  },
  blog: {
    0: {
      year: '2023.06',
      project: 'Next.js - Minimalist Blog (current)',
      link: 'https://github.com/rolemadelen/minimalist-blog',
    },
    1: {
      year: '2023.04',
      project: 'Next.js - Zettelkasten Blog',
      link: 'https://github.com/rolemadelen/blog-v2',
    },
    2: {
      year: '2022.05',
      project: 'Next.js - Blog (Sorted by relevance)',
      link: 'https://github.com/rolemadelen/blog-v1',
    },
    3: {
      year: '2020.08',
      project: 'Vue.js - Multilingual Blog',
      link: 'https://github.com/rolemadelen/vue-blog',
    },
    4: {
      year: '2020.03',
      project: 'Next.js - Multilingual Blog',
      link: 'https://github.com/rolemadelen/bluelog',
    },
    5: {
      year: '2019.09',
      project: 'Jekyll - Multilingual Blog (modified a theme)',
      link: 'https://github.com/rolemadelen/euisblue.github.io?tab=readme-ov-file',
    },
  },
  education: {
    0: {
      year: '2019',
      school: 'UC San Diego - B.S. Human-Computer Interaction',
    },
    1: {
      year: '2016',
      school: 'Riverside City College - A.S. Computer Science',
    },
  },
  contacts: {
    github: {
      name: 'GitHub',
      handle: 'raselshikdar',
      link: 'https://github.com/raselshikdar',
    },
    website: {
      name: 'Website',
      handle: 'rasel.us.kg',
      link: 'https://rasel.us.kg',
    },
  },
}
