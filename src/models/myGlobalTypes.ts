export interface ISelection {
  id: string;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: Birth;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

enum Birth {
  Date = 'date',
  Place = 'place',
  Country = 'country',
}

export interface ICardPlayerProps extends ISelection {
  index: number;
}

export interface ICardContainerProps {
  id: string;
  team: ISelection[];
}

export interface IListSelection {
  team: ISelection[];
}

export interface IListSelectionState {
  team: ISelection[];
}
