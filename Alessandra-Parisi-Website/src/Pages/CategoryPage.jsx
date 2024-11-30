import React, { useState } from "react";
import { useParams } from "react-router-dom";
import categories from "../Categories.js";

function CategoryPage() {
  const { categoryPath } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const category = categories.find((cat) => cat.path === `/${categoryPath}`);

  if (!category) {
    return <h1>Category not found!</h1>;
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
        <h1 className="Rox">{category.headLine}</h1>
        <p>{category.description}</p>
        <div className="images row">
          {category.images.map((image, index) => (
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

export default CategoryPage;
