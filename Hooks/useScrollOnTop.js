import { useEffect, useState } from 'react';

const useScrollOnTop = () => {
  const [isViewOnTop, setIsViewOnTop] = useState(false);

  useEffect(() => {
    scrollTopHandler();
    window.addEventListener('scroll', scrollTopHandler);
    return () => {
      window.removeEventListener('scroll', scrollTopHandler);
    };
  }, []);

  const scrollTopHandler = () => {
    // when the user scrolls, check the pageYOffset
    if (window.pageYOffset > 0) {
      // user is scrolled
      setIsViewOnTop(false);
    } else {
      // user is at top of page
      setIsViewOnTop(true);
    }
  };
  return isViewOnTop;
};

export default useScrollOnTop;
