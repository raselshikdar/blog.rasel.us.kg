import React from 'react'
import Link from 'next/link'
import styles from './Post.module.scss'

interface Props {
  title: string
  date: string
  desc: string
  tags?: [string]
}

const PostHeader: React.FC<Props> = ({ title, date, desc, tags }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className={styles.post__header}>
      <h1 className={styles.post__title}>{title}</h1>
      <div className={styles.post__wrapper}>
        <span className={styles.post__date}>{formattedDate}</span>
        <Link href="/" title="Back to home">
            <span className={styles.post__goback}>
                <b>
                    <span style={{ color: 'red' }}>&larr;</span> 
                    <span style={{ color: 'tomato' }}> go back homepage</span>
                </b>
            </span>
        </Link>
      </div>
    </div>
  )
}

export default PostHeader
