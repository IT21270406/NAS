import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loading from "./Loading";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Apod() {
  const [searchDate, setSearchDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [photoData, setPhotoData] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  async function fetchMarsRoverPhotos(date) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch Mars rover photos");
      }
      const data = await res.json();
      setPhotoData(data.photos);
    } catch (error) {
      console.error("Error fetching Mars rover photos:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isValidDate(searchDate)) {
      fetchMarsRoverPhotos(searchDate);
    } else {
      alert("Please enter a valid date in the format YYYY-MM-DD");
    }
  }

  function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  }

  useEffect(() => {
    fetchMarsRoverPhotos(getCurrentDate());
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Remove scroll
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Restore scroll
  };

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

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
          <div className="container mx-auto flex flex-wrap justify-center">
            {photoData.length > 0 ? (
              photoData.map((photo) => (
                <div
                  key={photo.id}
                  className="card m-4"
                  onClick={() => openModal(photo)}
                >
                  <img
                    src={photo.img_src}
                    alt={`Mars Rover Photo ${photo.id}`}
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <p className="photo1">Photo {photo.id}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="warning flex-1">
                <p>No Mars rover photos available for the selected date.</p>
              </div>
            )}
          </div>
          <Footer />
          {isModalOpen && (
            <div className="modal-backdrop" onClick={handleModalClick}>
              <div className="modal-content">
                <img
                  src={selectedPhoto.img_src}
                  alt={`Mars Rover Photo ${selectedPhoto.id}`}
                  className="img-fluid"
                  style={{ maxWidth: "100%", maxHeight: "100%" }} // Fit within card size
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
