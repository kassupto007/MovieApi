import Link from 'next/link';
import TmLogo from './../assets/tmdblogo.svg';

const Footer = () => {
  return (
    <footer className='flex h-14 items-center justify-between px-5 text-sm'>
      <p>&#169; 2021 PIE LLC</p>
      <div className='flex'>
        <p className='mr-2'>Movie data provided by</p>
        <TmLogo />
      </div>
    </footer>
  );
};

export default Footer;
