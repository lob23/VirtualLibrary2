"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../api/home/route";

export default function ReaderHome() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        console.log( result );
        setBooks(result);
        setLoading(false);
      } catch (error) {
        // Handle error
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      {loading ? (
        // Loading state
        <p>Loading...</p>
      ) : (
        // Display books
        <ul>
          {books.map((book) => (
            <li key={book._id} style={{ color: 'black' }}>
              <h3>{book.BDetail_title}</h3>
              <p style={{ color: 'black' }}>Genre: {book.BDetail_genre}</p>
              <p style={{ color: 'black' }}>Author: {book.BDetail_authorID}</p>
              <p style={{ color: 'black' }}>Average Rating: {book.BDetail_averageRating}</p>
              {book.BDetail_image && (
                <img
                  src={`data:image/png;base64,${book.BDetail_image}`}
                  alt={`Book cover for ${book.BDetail_title}`}
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
              )}
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
