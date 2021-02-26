import Head from 'next/head'
import ArticleList from '../components/article-list'

const url = `https://jsonplaceholder.typicode.com/posts?_limit=6`

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="web development, web design, software engineering, progressive web apps, jamstack, api"
        />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(url)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
