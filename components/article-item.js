import React from 'react'

const ArticleItem = ({ body, id, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default ArticleItem
