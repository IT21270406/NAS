import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loading from "./Loading";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Apod() {
  const [searchDate, setSearchDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [photoData, setPhotoData] = useState(null);

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function handleSearchDateChange(event) {
    setSearchDate(event.target.value);
  }

  async function fetchApod(date) {
    setLoading(true);
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`
    );
    const data = await res.json();

    if (res.ok) {
      setPhotoData(data);
    } else {
      setPhotoData(null);
      alert("APOD data not available for the current date.");
    }

    setLoading(false);
  }

  function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isValidDate(searchDate)) {
      const currentDate = getCurrentDate();
      if (searchDate > currentDate) {
        alert("Please enter a date equal to or before the current date.");
      } else {
        fetchApod(searchDate);
      }
    } else {
      alert("Please enter a valid date in the format YYYY-MM-DD");
    }
  }

  useEffect(() => {
    fetchApod(getCurrentDate());
  }, []);

  return (
    <div>
      {!loading ? (
        <>
          <NavBar />
          <br />
          <br />
          <br />
          <div className="container mx-auto flex">
            <form onSubmit={handleSubmit} className="my-8">
              <label htmlFor="searchDate" className="block text-white mb-2">
                Search by Date:
              </label>
              <input
                id="searchDate"
                type="text"
                placeholder="YYYY-MM-DD"
                value={searchDate}
                onChange={handleSearchDateChange}
                className="px-3 py-2 rounded-md border border-gray-300"
                style={{ width: "200px" }}
              />
              <button
                type="submit"
                className="btn btn-lg text-cyan-50 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500"
              >
                Search
              </button>
            </form>
          </div>
          {photoData ? (
            <>
              <div className="container mx-auto flex">
                <div className="title">{photoData.title}</div>
              </div>
              <div className="container mx-auto flex">
                <p className="date">{photoData.date}</p>
              </div>
              <br />
              <div className="container mx-auto flex">
                {photoData && (
                  <img
                    src={photoData.url}
                    alt={photoData.title}
                    className="photo"
                    style={{ maxWidth: "32%" }} // Reduce image size
                  />
                )}
                <div className="explanation flex-1">
                  <p>{photoData.explanation}</p>
                </div>
              </div>
              <Footer />
            </>
          ) : (
            <div className="warning flex-1">
              <p>
                Astronomy Picture of today is currently unavailable. Search by
                Date or Please check back later!!!
              </p>
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
