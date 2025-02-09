import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mostre from "../data/Mostre.js";
import { SlideshowLightbox } from "lightbox.js-react/SlideshowLightbox";

function MostrePage() {
  const { mostrePath } = useParams();
  const [Mostre, setMostre] = useState(null);

  useEffect(() => {
    const foundMostre = mostre.find(
      (mos) => mos.path === `/Mostre/${mostrePath}`
    );

    setMostre(foundMostre);
  }, [mostrePath]);

  if (!Mostre) {
    return <div>Category Not Found</div>;
  }
  return (
    <div className="CategoryPageSection">
      <div className="container">
        <h1 className="Rox">{Mostre.title}</h1>
        <p className="Rox">{Mostre.description}</p>
        <div className="images row">
          <SlideshowLightbox className="row align-items-center justify-content-center gap-3">
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
  );
}

export default MostrePage;
