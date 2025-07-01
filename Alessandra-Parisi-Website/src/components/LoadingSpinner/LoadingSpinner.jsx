import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', color = '#705936' }) => {
  return (
    <div className={`loading-spinner-container ${size}`}>
      <div 
        className="loading-spinner" 
        style={{ borderTopColor: color }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
