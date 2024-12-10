
import { useState, useEffect } from 'react';
import { useDebounce } from './use-debounce';

export function useSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearchValue) {
      setIsSearching(true);
      // Implement your search logic here
      // For example: fetch search results from API
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [debouncedSearchValue]);

  return {
    searchValue,
    setSearchValue,
    isSearching,
    debouncedSearchValue
  };
}
