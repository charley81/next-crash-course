import articleStyles from '../styles/article.module.scss'
import ArticleItem from './article-item'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map(article => (
        <ArticleItem key={article.id} {...article} />
      ))}
    </div>
  )
}

export default ArticleList
