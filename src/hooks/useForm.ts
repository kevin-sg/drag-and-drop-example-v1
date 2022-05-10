import { FormEvent, useContext, useState } from 'react';

import { StateContext } from '@/context';
import type { InitialFormState, IUploadFile } from '@/models';

function useForm() {
  const { setSateData } = useContext(StateContext);

  const [formData, setFormData] = useState({} as InitialFormState);

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
