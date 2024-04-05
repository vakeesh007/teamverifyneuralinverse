import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [top100Films, setTop100Films] = useState([{}]);

  const handleSearchClick = () => {
    if (text.trim() === '') {
      console.log("Please enter a movie name.");
      return;
    }

    let searchedMovie = null;
    for (let i = 0; i < top100Films.data.length; i++) {
      if (top100Films.data[i].Work_ID=== text) {
        searchedMovie = top100Films.data[i];
        break;
      }
    }
    if (searchedMovie) {
      console.log("Movie found:", searchedMovie);
      // Navigate to the display page with the movie details
      navigate("/Display", { state: searchedMovie });
    } else {
      console.log("Movie not found!");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://script.google.com/macros/s/AKfycbzpu_YplfOgFWS27Lvmx9xiV3JqCR3nM5r9smYpIMoGZEKbIADqW6vkvwHWnhxQ1zAC/exec");
        setTop100Films(response.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(top100Films.data);

  return (
    <div>
      <form>
        <label>Movie Name:</label>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button type="button" onClick={handleSearchClick}>Search</button>
      </form>
    </div>
  );
}

export default SignIn;