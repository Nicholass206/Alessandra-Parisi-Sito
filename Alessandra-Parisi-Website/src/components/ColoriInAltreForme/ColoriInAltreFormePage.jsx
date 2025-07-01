import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import coloriInAltreForme from "../../data/ColoriInAltreforme.js";
import { SlideshowLightbox } from "lightbox.js-react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import PageTransition from "../PageTransition/PageTransition";
import './ColoriInAltreFormePage.css';

function ColoriInAltreFormePage() {
  const { coloriPath } = useParams();
  const [colori, setColori] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      const foundColori = coloriInAltreForme.find(
        (col) => col.path === `/Colori/${coloriPath}`
      );
      setColori(foundColori);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [coloriPath]);

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

  if (!colori) {
    return (
      <PageTransition trigger={coloriPath}>
        <div className="CategoryPageSection">
          <div className="container">
            <h1 className="Rox text-center">Category Not Found</h1>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition trigger={coloriPath}>
      <div className="CategoryPageSection">
        <div className="container">
          <h1 className="Rox text-center">{colori.title}</h1>
          <div className="images row">
            <SlideshowLightbox className="row align-items-center justify-content-center slideshow">
              {colori.images.map((image, index) => (
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
      </div>
    </PageTransition>
  );
}

export default ColoriInAltreFormePage;
