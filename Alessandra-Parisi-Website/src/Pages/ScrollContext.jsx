import { createContext, useContext, useState, useEffect } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [isHeaderVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.querySelector(".GalleriaSection ");
      if (targetSection) {
        const sectionTop = targetSection.getBoundingClientRect().top;
        setHeaderVisible(sectionTop < window.innerHeight && sectionTop >= -1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={isHeaderVisible}>
      {children}
    </ScrollContext.Provider>
  );
};
