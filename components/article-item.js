import Link from 'next/link'
import articleStyles from '../styles/article.module.scss'

const ArticleItem = ({ id, body, title }) => {
  return (
    <Link href="/article/[id]" as={`/article/${id}`}>
      <a className={articleStyles.card}>
        <h3>{title} &rarr;</h3>
        <p>{body}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
