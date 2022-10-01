
interface IProps {
  setSearchQuery: (searchQuery : string) => void;
}

export const SearchInput = ({setSearchQuery}: IProps) => {
    return (
      <>
        <label htmlFor='search' className='mt-3'>Search! Try me!</label>
        <input
         id='search'
         className='form-control full-width'
         type="search"
         placeholder='Search...'
         aria-label='Search'
         onChange={(e) => setSearchQuery(e.target.value)}
        />
      </>
    )
}