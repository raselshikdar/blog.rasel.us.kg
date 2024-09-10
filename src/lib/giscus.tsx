import Giscus from '@giscus/react'

const Comment = () => {
  return (
    <Giscus
      id="comments"
      repo="raselshikdar/blog.rasel.us.kg"
      repoId="R_kgDOMvaoPA"
      category="General"
      categoryId="DIC_kwDOMvaoPM4CiV6f"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  )
}

export default Comment
