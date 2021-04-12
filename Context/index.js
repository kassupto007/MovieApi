import { createContext, useContext, useState } from 'react';
const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);

const ContextWrapper = ({ children }) => {
  const [isSearchOpen, setSearchModal] = useState(false);
  const closeSearch = () => setSearchModal(false);
  const openSearch = () => setSearchModal(true);
  return <SearchContext.Provider value={{ isSearchOpen, openSearch, closeSearch }}>{children}</SearchContext.Provider>;
};

export default ContextWrapper;
