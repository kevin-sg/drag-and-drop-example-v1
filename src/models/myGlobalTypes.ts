// *******************************************************
//                Interface type JSON
// *******************************************************

import { ButtonHTMLAttributes, ReactElement } from 'react';
import { FileError } from 'react-dropzone';

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
//                Interface type context state
// *******************************************************

export interface IStateContextProps {
  stateData: InitialGlobalState;
  onReset: Function;
  setSateData: Function;
}

export interface IStateProviderProps {
  children: ReactElement | ReactElement[];
}

export interface InitialGlobalState {
  formData: [];
}

// *******************************************************
//                Interface type props of components
// *******************************************************

export interface ICardPlayerProps extends ISelection {
  index: number;
}

export interface ICardContainerProps {
  id: string;
  team: ISelection[];
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: 'submit' | 'button';
  action: 'success' | 'reset';
}

export interface IDropzoneInputProps {
  maxSize?: number;
  getRootProps: Function;
  getInputProps: Function;
}

export interface IFileHeaderProps {
  filename: string;
  porcentage: number;
  status?: 'success' | 'error';
  onDelete?: () => void;
}

export interface IProgressBarProps {
  porcentage: number;
  status?: 'success' | 'error';
}

export interface IDropzoneContainerProps {
  handleChange: Function;
}

export interface ISingleFileUploadProps {
  file: File;
  onUpload: (file: File, url: string) => void;
  onDelete: (file: File) => void;
}

export interface IUploadErrorProps {
  file: File;
  progress?: number;
  errors: FileError[];
  onDelete: (file: File) => void;
}

// *******************************************************
//                Interfaces type data of utilities
// *******************************************************

export interface IListSelection {
  team: ISelection[];
}

export interface IListSelectionState {
  team: ISelection[];
}

export interface IUploadFile {
  file: File;
  url?: string;
  errors: FileError[];
}

// *******************************************************
//                Interfaces type form state
// *******************************************************

export interface InitialFormState {
  formData: IUploadFile[] | [];
}
