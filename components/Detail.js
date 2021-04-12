import Image from 'next/image';
import React from 'react';
import { BASE_IMG_URL, DEFAULT_IMG } from './../lib';
import RatingIcon from './../assets/star.svg';
import CalendarIcon from './../assets/calendar-alt.svg';
import ClockIcon from './../assets/clock.svg';

const Detail = ({ poster_path, title, media_type, overview, runtime, vote_average, year }) => {
  const url = poster_path ? `${BASE_IMG_URL}${poster_path}` : DEFAULT_IMG;

  return (
    <div className='mt-28 mb-12 w-full max-w-screen-lg md:h-[70vh] mx-10 '>
      <div className='flex detail-poster rounded md:h-full flex-col md:flex-row'>
        <div className=' poster-img md:w-1/2 relative h-56 md:h-full'>
          <Image src={url} layout='fill' objectFit='cover' alt={title} />
        </div>
        <div className=' md:w-1/2 p-8'>
          <h1 className='text-3xl'>{title}</h1>
          <div className='flex mt-3 mb-12'>
            <div className='flex'>
              <RatingIcon fill='#fff' width={22} height={22} />
              <span className='ml-2'>{vote_average}/10</span>
            </div>
            {media_type === 'movie' && (
              <div className='flex ml-4'>
                <ClockIcon fill='#fff' width={22} height={22} />
                <span className='ml-2'>{runtime} Mins</span>
              </div>
            )}
            <div className='flex ml-4'>
              <CalendarIcon fill='#fff' width={22} height={22} />
              <span className='ml-2'>{year}</span>
            </div>
          </div>
          <p>{overview}</p>
        </div>
      </div>
      <style jsx>{`
        .detail-poster {
          background-color: rgba(41, 44, 51, 1);
        }
      `}</style>
    </div>
  );
};

export default Detail;
