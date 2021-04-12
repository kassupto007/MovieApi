import { useState, useEffect } from 'react';
const useViewport = () => {
  const [width, setWidth] = useState(0);
  const [sliderGroupNo, setSliderGroupNo] = useState(1);
  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth;
      let sliderNo = 1;
      if (width >= 960) {
        sliderNo = 8;
      } else if (width >= 640) {
        sliderNo = 4;
      } else if (width >= 480) {
        sliderNo = 3;
      } else if (width >= 320) {
        sliderNo = 2;
      } else {
        sliderNo = 1;
      }
      setSliderGroupNo(sliderNo);
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width, sliderGroupNo };
};
export default useViewport;

//  // when window width is >= 320px
//  320: {
//     slidesPerView: 2,
//   },
//   // when window width is >= 480px
//   480: {
//     slidesPerView: 3,
//   },
//   // when window width is >= 640px
//   640: {
//     slidesPerView: 4,
//   },
//   960: {
//     slidesPerView: 8,
//   },
