import type { DropResult } from 'react-beautiful-dnd';

// *******************************************************
//                This types items Selection
// *******************************************************

export interface ISelection {
  id: number;
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

export interface ICardPlayerProps extends ISelection {
  index: number;
}

export interface ICardContainerProps {
  columnId: string;
  column: IValuesBackendData;
  direction?: 'horizontal' | 'vertical';
}

// *******************************************************
//                This types list data custo JSON
// *******************************************************

export interface IListSelection {
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
  items: ISelection[] | [];
}

export interface IColumnsFromBackendData {
  [x: string]: IValuesBackendData;
}

// *******************************************************
//                This type useDragEnd Custom hook
// *******************************************************

export interface IDragEndArg {
  (result: DropResult, columns: IColumnsFromBackendData, setColumns: Function): void;
}

export interface IDragEndCustomHook {
  onDragEnd: IDragEndArg;
}
