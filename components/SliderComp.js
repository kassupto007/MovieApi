import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { DEFAULT_IMG, BASE_IMG_URL_MED } from './../lib';
// Import Swiper styles
import SwiperCore, { Navigation } from 'swiper';
import useViewport from '../Hooks/useViewPort';

SwiperCore.use([Navigation]);

const breakpoints = {
  // when window width is >= 320px
  320: {
    slidesPerView: 2,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3,
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 4,
  },
  960: {
    slidesPerView: 8,
  },
};
const SliderComp = ({ title = 'Movies', list = [] }) => {
  const { sliderGroupNo } = useViewport();
  return (
    <div className='mt-6'>
      <h1 className='text-2xl uppercase  mb-3'>{title}</h1>
      <Swiper spaceBetween={20} className='  h-36' navigation breakpoints={breakpoints} slidesPerGroup={sliderGroupNo}>
        {list.map((obj, i) => {
          const { backdrop_path, media_type } = obj;
          const title = obj.media_type === 'tv' ? obj?.name : obj?.title;
          const url = backdrop_path ? `${BASE_IMG_URL_MED}${backdrop_path}` : DEFAULT_IMG;
          return (
            <SwiperSlide className=' ' key={obj.id}>
              <Link key={obj.id} href={`/${media_type || 'movie'}/${obj.id}`} passHref={true}>
                <a className='slider-child flex flex-col h-full'>
                  <div className='h-full  transform duration-200 hover:scale-105 transition-transform'>
                    <Image src={url} layout='fill' alt={title} />
                  </div>
                  <p className='text-white truncate leading-7 pr-4 mt-2 text-xs'>{title}</p>
                </a>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderComp;
