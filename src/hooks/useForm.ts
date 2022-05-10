import { StateContext } from '@/context';
import { FormEvent, useContext, useState } from 'react';
import { FileError } from 'react-dropzone';

interface IUploadFile {
  file: File;
  url?: string;
  errors: FileError[];
}

interface InitialState {
  formData: IUploadFile[] | [];
}

function useForm() {
  const { setSateData } = useContext(StateContext);

  const [formData, setFormData] = useState({} as InitialState);

  function handleChange(upload: IUploadFile[]) {
    setFormData((prev) => ({ ...prev, formData: upload }));
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    setSateData(formData);
    resetForm();
  }

  function resetForm(): void {
    setFormData((prev) => ({ ...prev, formData: [] }));
  }

  return { formData, handleChange, handleSubmit, resetForm };
}

export default useForm;
