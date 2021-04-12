import Link from 'next/link';
import Logo from './../assets/logo.svg';
import useScrollOnTop from '../Hooks/useScrollOnTop';
import Search from './../assets/search.svg';
import SearchModal from './SearchModal';
import { useState } from 'react';
import { useSearchContext } from './../Context';

const Header = () => {
  const { isSearchOpen, closeSearch, openSearch } = useSearchContext();
  const isViewOnTop = useScrollOnTop();

  // CONDITIONAL CSS
  const bgdark = !isViewOnTop ? 'bg-dark' : '';
  return (
    <header
      className={`${bgdark}  h-14 w-full bg-transparent top-0 z-10 fixed flex px-6 justify-between items-center transition-all duration-300 ease-in-out`}
    >
      <Link href='/'>
        <a href='/'>
          <Logo />
        </a>
      </Link>
      <button onClick={openSearch}>
        <Search width={24} height={24} fill='#fff' />
      </button>
      {isSearchOpen && <SearchModal onCloseSearch={closeSearch} />}
    </header>
  );
};

export default Header;
