import { useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './ImageWithLoader.css';

const ImageWithLoader = ({ 
  src, 
  alt, 
  className = '', 
  onLoad, 
  onError,
  showSpinner = true,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e) => {
    setIsLoading(false);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError(e);
  };

  return (
    <div className={`image-with-loader ${className}`}>
      {isLoading && showSpinner && (
        <div className="image-loading-overlay">
          <LoadingSpinner size="small" />
        </div>
      )}
      
      {hasError ? (
        <div className="image-error-placeholder">
          <span>Image not available</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${isLoading ? 'loading' : 'loaded'} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithLoader;
