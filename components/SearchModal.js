import React, { useRef, useState } from 'react';
import useLockBodyScroll from '../Hooks/useLockBodyScroll';
import { MULTI_SEARCH, BASE_IMG_URL, DEFAULT_IMG } from './../lib';
import CloseIcon from './../assets/times.svg';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

const SearchModal = ({ onCloseSearch }) => {
  const [results, setResults] = useState([]);
  const cancelToken = useRef(null);
  // Call hook to lock body scroll
  useLockBodyScroll();

  const onSearch = (e) => {
    const { value } = e.target;
    if (!!cancelToken.current) {
      cancelToken.current.cancel('Canceling the previous req.');
    }
    cancelToken.current = axios.CancelToken.source();

    axios
      .get(`${MULTI_SEARCH}${value}`, {
        cancelToken: cancelToken.current.token,
      })
      .then((response) => {
        const list = [...response.data.results];
        const filtered = list.filter((o) => ['movie', 'tv'].includes(o.media_type));
        setResults(filtered);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
      });
  };
  return (
    <div className='search-modal absolute inset-0 h-screen px-6'>
      <div className='flex justify-end mt-4  ' onClick={onCloseSearch}>
        <span className='cursor-pointer rounded-full hover:bg-gray-700  w-[42px] h-[42px] flex justify-center items-center transition duration-150'>
          <CloseIcon width={24} fill='#fff' />
        </span>
      </div>
      <div>
        <input
          className='bg-transparent border-b-2 outline-none p-2 w-full text-2xl'
          type='search'
          onChange={onSearch}
          placeholder='search'
        />
      </div>
      <div className='overflow-y-scroll pr-2 h-[88vh]'>
        {results.map((obj) => (
          <SearchItem key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

const SearchItem = ({ id, media_type, backdrop_path, title, name }) => {
  const url = backdrop_path ? `${BASE_IMG_URL}${backdrop_path}` : DEFAULT_IMG;
  return (
    <Link href={`/${media_type}/${id}`}>
      <a href={`/${media_type}/${id}`} className='flex border-b-[1px] py-4 items-center'>
        <Image src={url} width={180} height={95} alt={title || name} />
        <p>{title || name}</p>
        <h4 className='text-4xl uppercase ml-auto'>{media_type}</h4>
      </a>
    </Link>
  );
};

export default SearchModal;
