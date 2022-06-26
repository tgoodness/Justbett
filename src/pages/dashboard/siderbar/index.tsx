import misc from '../../../helpers/misc';
import { IMAGES } from '../../../constant';
import { IGroup } from '../../../interfaces/game';
import Group from './Group';
import SearchBar from './SearchBar';
import searchLogic from './core/SearchLogic';
import './style.scss';

function Sidebar() {
  const groups = [
    {
      id: '1',
      player: '5',
      remaining: 2,
      gameType: 'soccer',
      category: {
        id: 1,
        name: 'Emerald',
        amount: 1000,
        icon: IMAGES.emerald,
      },
    },
    {
      id: '2',
      player: '3',
      remaining: 2,
      gameType: 'color',
      category: {
        id: 2,
        name: 'Silver',
        amount: 1000,
        icon: IMAGES.silver,
      },
    },
    {
      id: '3',
      player: '5',
      remaining: 2,
      gameType: 'pool',
      category: {
        id: 2,
        name: 'Perriodt',
        amount: 1000,
        icon: IMAGES.perridot,
      },
    },
  ];

  const { searchTerm, handleSearch, inputRef, handleClear, isSearch, toggleSearch, searchResults } =
    searchLogic(groups);

  return (
    <div className="active-games animate__animated animate__fadeIn">
      <SearchBar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        inputRef={inputRef}
        handleClear={handleClear}
        isSearch={isSearch}
        toggleSearch={toggleSearch}
      />
      <div
        className="pb-pending-games"
        id="scrollbar"
        style={{ minHeight: misc.sideBarContent() - 60, maxHeight: misc.sideBarContent() - 60 }}
      >
        {searchResults.map((item: IGroup, index: number) => {
          return (
            <Group
              id={item.id}
              remaining={item.remaining}
              gameType={item.gameType}
              category={item.category}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
