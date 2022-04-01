import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/get-books").then((response) => {
      setBooks(response.data.dataBooks);
    });
  }, []);

  return (
    <div className="App">
      {books.map((book) => (
        <h1>{book.name}</h1>
      ))}
    </div>
  );
};

export default App;
