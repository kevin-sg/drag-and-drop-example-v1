import { useContext } from 'react';

import { useForm } from '@/hooks';
import { StateContext } from '@/context';
import { Button, CardItem, DropzoneContainer } from '@/components';

function FormContainer(): React.ReactElement {
  const { stateData, onReset } = useContext(StateContext);

  const { handleChange, handleSubmit } = useForm();

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <DropzoneContainer handleChange={handleChange} />
      </form>

      {stateData?.formData.map((data, idx) => (
        <CardItem key={idx} {...data} />
      ))}

      {stateData.formData.length ? (
        <div className="w-full mx-auto flex justify-center items-center">
          <Button type="button" text="Clear List" action="reset" onClick={() => onReset()} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default FormContainer;
