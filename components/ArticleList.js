import articleStyles from '../styles/Article.module.css';
import React from 'react';
import ArticleItem from '../components/ArticleItem';

function ArticleList({articles}) {
  return (
    <div className={articleStyles.grid}>
      {articles.map(article => (
        <ArticleItem article={article} key={article.id}/>
      ))}
    </div>
  )
}

export default ArticleList