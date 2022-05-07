// *******************************************************
//                This types items Selection
// *******************************************************

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

// *******************************************************
//                This types props cart container
// *******************************************************

export interface ICardPlayerProps extends ItemsFromBackendData {
  index: number;
}

export interface ICardContainerProps {
  columnId: string;
  column: IValuesBackendData;
}

// *******************************************************
//                This types list data custo JSON
// *******************************************************

export interface IListSelection {
  team: ISelection[];
}

export interface IListSelectionState {
  team: ISelection[];
}

// *******************************************************
//                This types data columns & items
// *******************************************************

export interface ItemsFromBackendData {
  id: string;
  content: string;
}

export interface IValuesBackendData {
  name: string;
  items: ItemsFromBackendData[] | [];
}

export interface IColumnsFromBackendData {
  [x: string]: IValuesBackendData;
}
