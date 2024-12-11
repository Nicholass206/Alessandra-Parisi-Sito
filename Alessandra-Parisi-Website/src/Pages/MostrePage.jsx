import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Mostre from "../data/Mostre.js";


function MostrePage() {
  const { mostrePath } = useParams();
  const [mostre, setmostre] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const foundMostre = Mostre.find((col) => col.path === `/${mostrePath}`);
    setmostre(foundMostre);
  }, [mostrePath]);  

  if (!mostre) {
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
        <h1 className="Rox">{mostre.title}</h1>
        <p className="Rox">{mostre.description}</p>
        <div className="images row">
          {mostre.images.map((image, index) => (
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

export default MostrePage;
