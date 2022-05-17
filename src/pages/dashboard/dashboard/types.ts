export type GameProps = {
  remaining: number;
  status: string;
  category: {
    name: string;
    amount: number;
    icon: string;
  };
};

export type IGame = {
  item: {
    date: string;
    data: GameProps;
  };
};


type FiatProps = {
  amount: number;
  type: string;
  icon: React.ReactElement<SVGElement>;
};

export type IFiat = {
  item: {
    date: string;
    data: FiatProps;
  };
};