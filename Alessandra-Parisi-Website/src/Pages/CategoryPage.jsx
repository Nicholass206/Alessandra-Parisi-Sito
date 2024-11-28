import { useParams } from "react-router-dom";
import categories from "../Categories.js";

function CategoryPage() {
  const { categoryPath } = useParams();

  const category = categories.find((cat) => cat.path === `/${categoryPath}`);

  if (!category) {
    return <h1>Category not found!</h1>;
  }

  return (
    <div className="CategoryPageSection ">
      <div className="container">
      <h1 className="Rox">{category.headLine}</h1>
      <p>{category.description}</p>
      <div className="images row">
        {category.images.map((image, index) => (
          <div key={index} className="image-item col-3">
            <img src={image.src} alt={image.title} className="IconImage"/>
            <p>{image.title}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default CategoryPage;
