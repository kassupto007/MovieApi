import Link from 'next/link';
import React from 'react';

import { BASE_IMG_URL, DEFAULT_IMG } from './../lib';

const t = 'Avengers: Endgame';
const d = `After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the
Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo
Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in
store.`;
const u = 'fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg';
const Poster = ({ media_type = 'movie', id, title = t, overview = d, backdrop_path = u }) => {
  const url = backdrop_path ? `${BASE_IMG_URL}${backdrop_path}` : DEFAULT_IMG;
  return (
    <>
      <Link href={`/${media_type}/${id}`}>
        <a href={`/${media_type}/${id}`}>
          <div className='bg-overlay relative h-96 w-full'>
            <div className='absolute bottom-0 pl-6 flex flex-col w-8/12 md:w-2/5  overflow-x-hidden'>
              <h1 className='text-4xl mb-3'>{title}</h1>
              <p className='h-24 overflow-hidden overflow-ellipsis mb-3'>{overview}</p>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .bg-overlay {
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url});
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </>
  );
};

export default Poster;
