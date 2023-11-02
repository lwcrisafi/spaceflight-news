import React, { useState, useEffect} from "react";
import Article from "./Article";
import { Routes, Route } from "react-router-dom";
import ArticleDetails from "./ArticleDetails"; // Import the new component
import ArticleList from "./ArticleList";


export default function Homepage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const articlesPerPage = 10;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_sort=publishedAt%3Adesc&_start=" +
          page
      );
      const data = await response.json();
      
      setArticles(data);
      // console.log(data); //for details of the array
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };
  // This useEffect fetches data when the component initially loads and when the page changes
  useEffect(() => {
    fetchData(); //// Call fetchData when the page changes
  }, [page]);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h1>Spaceflight News</h1>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <Routes>
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/articles" element={<ArticleList articles={articles} />} />
        <Route path="/*" element={<ArticleList articles={articles} />} />
      </Routes>
    </div>
  );
}