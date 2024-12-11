import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import coloriInAltreForme from '../data/ColoriInAltreforme.js';

function ColoriInAltreFormePage() {
  const { coloriPath } = useParams();
  const [colori, setColori] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const foundColori = coloriInAltreForme.find((col) => col.path === `/${coloriPath}`);
    setColori(foundColori);
  }, [coloriPath]);  

  if (!colori) {
    return <div></div>;  
  }

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="CategoryPageSection">
      <div className="container">
        <h1 className="Rox">{colori.title}</h1>
        <div className="images row">
          {colori.images.map((image, index) => (
            <div
              key={index}
              className="image-item col-3"
              onClick={() => openModal(image)}
            >
              <img src={image.src} alt={image.title} className="IconImage" />
              <p>{image.title}</p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColoriInAltreFormePage;
