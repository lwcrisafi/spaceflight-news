import React from "react";
import Article from "./Article";


export default function ArticleList({ articles }) {
console.log('Articles:', articles);

    return (
      <div className="article-list">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    );
  };

