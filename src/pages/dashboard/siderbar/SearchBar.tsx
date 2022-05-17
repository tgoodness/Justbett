import { ArrowBack, Close, SearchOutlined } from '@material-ui/icons';
import { IOngoingGroupSearchBar } from '../../../interfaces/game';

function SearchBar(props: IOngoingGroupSearchBar) {
  const { searchTerm, handleSearch, inputRef, handleClear, toggleSearch } = props;

  return (
    <div className="search-container">
      <div className="search-input">
        <div>
          {searchTerm ? (
            <ArrowBack className="arrow-back-icon" onClick={toggleSearch} />
          ) : (
            <SearchOutlined />
          )}
          <input
            type="text"
            placeholder="Search"
            ref={inputRef}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {searchTerm && <Close className="close-icon" onClick={handleClear} />}
      </div>
    </div>
  );
}

export default SearchBar;
