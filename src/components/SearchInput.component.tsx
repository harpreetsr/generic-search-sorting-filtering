import { useEffect, useState } from "react";
import { useDebounce } from "../hooks";

interface IProps {
  setSearchQuery: (searchQuery : string) => void;
}

export const SearchInput = ({setSearchQuery}: IProps) => {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery])

  return (
    <>
      <label htmlFor='search' className='mt-3'>Search! Try me!</label>
      <input
        id='search'
        className='form-control full-width'
        type="search"
        placeholder='Search...'
        aria-label='Search'
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  )
}