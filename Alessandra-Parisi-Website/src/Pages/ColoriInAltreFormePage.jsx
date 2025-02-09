import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import coloriInAltreForme from "../data/ColoriInAltreforme.js";
import { SlideshowLightbox } from "lightbox.js-react";

function ColoriInAltreFormePage() {
  const { coloriPath } = useParams();
  const [colori, setColori] = useState(null);

  useEffect(() => {
    const foundColori = coloriInAltreForme.find(
      (col) => col.path === `/Colori/${coloriPath}`
    );
    setColori(foundColori);
  }, [coloriPath]);

  if (!colori) {
    return <div>Category Not Found</div>;
  }

  return (
    <div className="CategoryPageSection">
      <div className="container">
        <h1 className="Rox">{colori.title}</h1>
        <div className="images row">
          <SlideshowLightbox className="row align-items-center justify-content-center gap-3">
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
  );
}

export default ColoriInAltreFormePage;
