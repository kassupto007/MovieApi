import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, className }) => {
  return (
    <div className='layout min-h-screen flex flex-col'>
      <Header />
      <div className={`content flex-grow ${className}`}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
