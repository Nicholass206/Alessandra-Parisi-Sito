import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import categories from "../data/Categories.js";
import { SlideshowLightbox } from "lightbox.js-react";

function CategoryPage() {
  const { categoryPath } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const foundCategory = categories.find(
      (cat) => cat.path === `/${categoryPath}`
    );
    setCategory(foundCategory);
  }, [categoryPath]);

  if (!category) {
    return <div></div>;
  }

  return (
    <div className="CategoryPageSection">
      <div className="container">
        <h1 className="Rox">{category.headLine}</h1>
        <p>{category.description}</p>
        <SlideshowLightbox className="row align-items-center justify-content-center gap-3">
          {category.images.map((image, index) => (
            <img
              src={image.src}
              alt={image.title}
              className="IconImage col-4"
              key={index}
            />
          ))}
        </SlideshowLightbox>
      </div>
    </div>
  );
}

export default CategoryPage;
