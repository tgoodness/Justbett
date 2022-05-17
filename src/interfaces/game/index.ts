export type IGroup = {
  id: string;
  player?: string;
  remaining: number;
  gameType: string;
  category: {
    id?: number;
    name: string;
    amount: number;
    icon: string;
  }
}

export type ITeam = {
  peerId: number;
  teamA: {
    id: number;
    name: string;
    icon: string;
  };
  teamB: {
    id: number;
    name: string;
    icon: string;
  };
};

export type IOngoingGroupSearchBar = {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  handleClear: () => void;
  isSearch: boolean;
  toggleSearch: () => void;
};

export type IPlayer = { id: string; label: string; user: number | string };
export type ICategory = { id: string; name: string; amount: number; icon: string };