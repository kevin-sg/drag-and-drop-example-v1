import { StateContext } from '@/context';
import { useForm } from '@/hooks';
import { useContext } from 'react';
import { Button, CardItem } from '../Commons';
import DropzoneContainer from './DropzoneContainer';

interface IFormContainerProps {
  // children: JSX.Element | JSX.Element[];
}

function FormContainer(props: IFormContainerProps): React.ReactElement {
  const { stateData, onReset } = useContext(StateContext);

  const { handleChange, handleSubmit } = useForm();

  console.log(stateData);

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
