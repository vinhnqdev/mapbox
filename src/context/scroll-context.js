import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const [isScrollAtBottom, setIsScrollAtBottom] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > document.body.clientHeight - 3000) {
      setIsScrollAtBottom(true);
    } else {
      setIsScrollAtBottom(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollContext.Provider value={{ isScrollAtBottom, scrollToTop }}>
      {children}
    </ScrollContext.Provider>
  );
};
