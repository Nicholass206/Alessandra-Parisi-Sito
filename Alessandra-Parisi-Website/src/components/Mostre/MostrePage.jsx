import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mostre from "../../data/Mostre.js";
import { SlideshowLightbox } from "lightbox.js-react/SlideshowLightbox";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import PageTransition from "../PageTransition/PageTransition";
import './MostrePage.css';

function MostrePage() {
  const { mostrePath } = useParams();
  const [Mostre, setMostre] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      const foundMostre = mostre.find(
        (mos) => mos.path === `/Mostre/${mostrePath}`
      );
      setMostre(foundMostre);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [mostrePath]);

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

  if (!Mostre) {
    return (
      <PageTransition trigger={mostrePath}>
        <div className="CategoryPageSection">
          <div className="container">
            <h1 className="Rox text-center">Category Not Found</h1>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition trigger={mostrePath}>
      <div className="CategoryPageSection">
        <div className="container">
          <h1 className="Rox text-center">{Mostre.title}</h1>
          <p className="Rox">{Mostre.description}</p>
          <div className="images row">
            <SlideshowLightbox className="row align-items-center justify-content-center slideshow">
              {Mostre.images.map((image, index) => (
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

export default MostrePage;
