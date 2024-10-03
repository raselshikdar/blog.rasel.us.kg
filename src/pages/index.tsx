import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import Posts from '@/components/Posts/Posts';
import { getAllPosts } from '@/lib/blog';
import Head from 'next/head';
import { createOgImage } from '@/lib/createOgImage';
import DarkMode from '@/components/DarkMode/DarkMode'; // Import DarkMode component

interface Post {
  slug: string;
  title: string;
  desc: string;
  date: string;
  note: string;
  type: string;
  tags?: [string];
}

interface Props {
  posts: Post[];
}

const Blog: React.FC<Props> = ({ posts }) => {
  const title = 'Personal Blog';
  const ogImage = createOgImage({
    title,
    meta: ['Rasel Shikdar', 'a web dev interested in productivity'].join('・'),
  });

  return (
    <>
      <Head>
        <title>Rasel Shikdar - Blog</title>
        <meta content="Rasel Shikdar | Web Developer" name="description" />
        <meta name="keyword" content="blog, javascript, frontend, developer, engineer" />
        <meta property="og:description" content="Jii | Web Developer" />
        <meta property="og:url" content="https://blog.rasel.us.kg" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:title" content="Rasel Shikdar" />
        <meta property="twitter:description" content={title} />
        <meta property="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      </Head>

      {/* Adding Dark Mode Toggle to the Header or above it */}
      <Header />
      <DarkMode /> {/* You can move this into Header if you want it globally accessible */}
      <ProgressBar />
      <Posts posts={posts} />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  let posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
