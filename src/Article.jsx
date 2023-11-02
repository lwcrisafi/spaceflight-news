import React from "react";
import { Link } from "react-router-dom";


function Article ({ article }) {
  return (
    <div className="article">
      <h2>
        <Link to={`/articles/${article.id}`}>{article.title}</Link>
      </h2>
      <p>{article.url}</p>
      
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default Article;
