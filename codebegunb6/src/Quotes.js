import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Quotes.css"; // Import CSS for styling

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/quotes")
      .then((response) => {
        setQuotes(response.data.quotes);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching quotes");
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Inspirational Quotes</h1>
      {loading && <p className="loading">Loading quotes...</p>}
      {error && <p className="error">{error}</p>}

      <div className="quote-container">
        {quotes.map((quote) => (
          <div key={quote.id} className="quote-card">
            <p className="quote-text">"{quote.quote}"</p>
            <h4 className="quote-author">- {quote.author}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;