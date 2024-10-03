import React, { useEffect, useRef } from 'react';
import Preview from '@/lib/codeblock';
import styles from './Post.module.scss';
import Link from 'next/link';

interface Props {
  markdown: string;
  prevPost?: string; // Use optional chaining
  nextPost?: string; // Use optional chaining
}

const PostContent: React.FC<Props> = ({ markdown, prevPost, nextPost }) => {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window; // Destructure scrollY
      if (scrollY > 200) {
        topRef.current?.classList.add(styles.visible);
      } else {
        topRef.current?.classList.remove(styles.visible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling to top
  };

  return (
    <div className={`${styles['post__content']} post-content`}>
      <div 
        className={styles.top} 
        onClick={moveToTop} 
        ref={topRef} 
        role="button" // Adding role for accessibility
        tabIndex={0} // Make it focusable
        onKeyDown={(e) => { // Allow keyboard interaction
          if (e.key === 'Enter' || e.key === ' ') {
            moveToTop();
          }
        }}
        aria-label="Scroll to top" // Accessibility label
      >
        <span>• ᴥ •</span>
        <span>つ TOP </span>
      </div>
      <Preview markdown={markdown} />
      <div className={styles.navigation}>
        {prevPost && (
          <Link key={`blog-${prevPost}`} href={`/post/${prevPost}`} passHref>
            ← prev post
          </Link>
        )}
        {nextPost && (
          <Link key={`blog-${nextPost}`} href={`/post/${nextPost}`} passHref>
            next post →
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostContent;
