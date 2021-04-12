import PropTypes from 'prop-types';
import './../styles/global.scss';
// import 'tailwindcss/tailwind.css';

import 'swiper/swiper.scss';
import ContextWrapper from './../Context';

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />;
    </ContextWrapper>
  );
}

export default MyApp;
