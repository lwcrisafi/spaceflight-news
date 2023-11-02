import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ArticleDetails() {
  const { id, summary } = useParams();

  // Fetch article details using the 'id' and display them here

  return (
    <div>
      <h2>Article Details</h2>
      <p>Article ID: {id}</p>
      
      
    {/* Fetch and display the detailed article information here */}
   
   <Link to="/">Back to Homepage</Link>
    </div>
  );
}
