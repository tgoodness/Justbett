import { useState, useRef, useEffect } from 'react';
import { IGroup } from '../../../../interfaces/game';

function SearchLogic(groups: Array<IGroup>) {
  const [isSearch, setIsSearch] = useState(false);

  const toggleSearch = () => {
    setIsSearch(!isSearch);
  };
  
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (isSearch) inputRef?.current?.focus();
  }, [isSearch]);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearch(true);
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
    inputRef.current?.focus();
  };

  const [searchResults, setSearchResults] = useState<IGroup[]>([]);
  useEffect(() => {
    const result = groups.filter(
      (g) =>
        g.category.name.toLowerCase().includes(searchTerm) ||
        g.category.amount.toString().includes(searchTerm) ||
        g.remaining.toString().includes(searchTerm)
    );
    setSearchResults(result);
  }, [searchTerm]);

  return { searchTerm, handleSearch, inputRef, handleClear, isSearch, toggleSearch, searchResults };
}

export default SearchLogic;
