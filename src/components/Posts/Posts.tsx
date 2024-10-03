import React, { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { atom, useAtom } from 'jotai'
import styles from './Posts.module.scss'

// State atoms for managing view modes and filters
export const modeAtom = atom('normal')
export const techAtom = atom(true)
export const nonTechAtom = atom(false)

// Type definitions for posts
type View = {
  slug: string
  title: string
  desc: string
  date: string
  note: string
  type: string
  tags?: string[] // Changed to string[] for better flexibility
}

type Props = {
  posts: View[]
}

const Posts: React.FC<Props> = ({ posts }) => {
  const [mode, setMode] = useAtom(modeAtom)
  const [displayTech, setDisplayTech] = useAtom(techAtom)
  const [displayNonTech, setDisplayNonTech] = useAtom(nonTechAtom)
  const router = useRouter()
  const year = useRef('')
  const month = useRef<null | string>(null)

  // Function to display year if it's different from the last displayed year
  const displayYear = (postYear: string) => {
    if (year.current === postYear) {
      return null // No need to display the year again
    } else {
      year.current = postYear
      return <div className={styles['date__year']} key={postYear}>{postYear}</div>
    }
  }

  // Function to check if a new month is being displayed
  const isNewMonth = (m: number) => {
    const months = [
      '', 'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const isNew = months[m] !== month.current
    if (isNew) {
      month.current = months[m]
    }

    return isNew
  }

  // Function to append the correct suffix to a day
  const appendSuffix = (day: number) => {
    if (day >= 11 && day <= 13) return day + 'th'
    switch (day % 10) {
      case 1: return day + 'st'
      case 2: return day + 'nd'
      case 3: return day + 'rd'
      default: return day + 'th'
    }
  }

  // Function to format date into year, month, and day
  const formatDate = (date: string) => {
    const [year, month, day] = date.split('-')
    const fyear = displayYear(year)
    const fday = appendSuffix(+day)

    return { fyear, fmonth: month, fday }
  }

  // Component for Normal View
  const NormalView = ({ slug, title, date }: View) => {
    date = date.split(' ')[0]
    const { fyear, fmonth, fday } = formatDate(date)

    return (
      <div>
        {fyear}
        {isNewMonth(+fmonth) && <div className={styles['date__month']}>{month.current}</div>}
        <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
          <div className={styles.post}>
            <div className={styles['post__title']}>{title}</div>
            <div className={styles['post__day']}>{fday}</div>
          </div>
        </Link>
      </div>
    )
  }

  // Component for Detail View
  const DetailView = ({ slug, title, desc, date, tags }: View) => {
    const formattedDate = date.split(' ')[0]

    return (
      <div className={styles.simple}>
        <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
          <div className={styles.simple__post}>
            <div className={styles.simple__title}>{title}</div>
            <div className={styles.simple__date}>{formattedDate}・{desc}</div>
            <div className={styles.tags}>
              {tags?.map(tag => (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </div>
    )
  }

  // Factory function to determine which view to render
  const viewFactory = (post: View) => {
    if ((displayTech && post.type !== 'tech') || (displayNonTech && post.type !== 'non-tech')) return null

    return mode === 'normal' ? DetailView(post) : NormalView(post)
  }

  // Function to open a random post
  const openRandomPost = () => {
    const randomIndex = Math.floor(Math.random() * posts.length)
    const { slug } = posts[randomIndex]
    router.push(`/post/${slug}`)
  }

  return (
    <main className={styles.posts}>
      <div className={styles.options}>
        <div>
          <button type="button" onClick={openRandomPost}>
            Random 🪄
            <span className={styles.accio__note}>📃</span>
          </button>
        </div>
        <div className={styles.options_group}>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="detailView"
              id="detailView"
              checked={mode === 'detail'}
              onChange={() => setMode(mode === 'normal' ? 'detail' : 'normal')}
            />
            <label htmlFor="detailView">Simple</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="tech"
              id="tech"
              checked={displayTech}
              onChange={() => {
                setDisplayNonTech(!displayTech)
                setDisplayTech(prev => !prev)
              }}
            />
            <label htmlFor="tech">Tech</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="nontech"
              id="nontech"
              checked={displayNonTech}
              onChange={() => {
                setDisplayTech(!displayNonTech)
                setDisplayNonTech(prev => !prev)
              }}
            />
            <label htmlFor="nontech">Non-Tech</label>
          </div>
        </div>
      </div>

      {posts.map((data) => (
        <React.Fragment key={data.slug}>{viewFactory(data)}</React.Fragment>
      ))}
    </main>
  )
}

export default Posts
