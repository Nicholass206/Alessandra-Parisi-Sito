import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import categories from "../../data/Categories.js";
import { SlideshowLightbox } from "lightbox.js-react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import PageTransition from "../PageTransition/PageTransition";
import '../../Pages/GalleriaIconePage.css'

function CategoryPage() {
  const { categoryPath } = useParams();
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      const foundCategory = categories.find(
        (cat) => cat.path === `/${categoryPath}`
      );
      setCategory(foundCategory);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [categoryPath]);

  if (isLoading) {
    return (
      <div className="CategoryPageSection">
        <div className="container">
          <div className="gallery-loading">
            <LoadingSpinner size="large" />
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <PageTransition trigger={categoryPath}>
        <div className="CategoryPageSection">
          <div className="container">
            <h1 className="Rox text-center">Category Not Found</h1>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition trigger={categoryPath}>
      <div className="CategoryPageSection">
        <div className="container">
          <h1 className="Rox text-center">{category.headLine}</h1>
          <p>{category.description}</p>
          <SlideshowLightbox className="row align-items-center justify-content-center slideshow">
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
    </PageTransition>
  );
}

export default CategoryPage;
