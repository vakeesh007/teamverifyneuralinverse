import React, { useState } from 'react';
import './MoviePage.css'; 

const MoviePage = (props) => {
  const [selectedSeats, setSelectedSeats] = useState(0);
  const [totalCapacity, setTotalCapacity] = useState(450);

  const handleIncrement = () => {
    
      setSelectedSeats(selectedSeats + 1);
      setTotalCapacity(prevTotalCapacity => prevTotalCapacity - 1);
    
  };

  const handleDecrement = () => {
    
      setSelectedSeats(selectedSeats - 1);
      setTotalCapacity(prevTotalCapacity => prevTotalCapacity + 1);
    
  };

  

  const confirm=()=>
  {
    alert("Ticket Booked Successfully!")
    alert("Check Email For Confirmation")
  };

  return (
    <div className="movie-page-container">
      <h1>Select Your Seats ! </h1>
      <div className="movie-details">
        <h2> {props.data}</h2>
        <p className="text">Selected Seats: {selectedSeats}</p>
        <p className="text">Total Remaining Seats: {totalCapacity}</p>
        <button className="button" onClick={handleIncrement}>Add</button>
        <button className="button" onClick={handleDecrement}>Remove</button>
        <button className="button" onClick={confirm}>Book Now</button>
      </div>
    </div>
  );
};

export default MoviePage;
