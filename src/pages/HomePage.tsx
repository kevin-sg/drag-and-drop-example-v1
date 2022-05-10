import { FormContainer } from '@/components';

function HomePage(): React.ReactElement {
  return (
    <div className="container mx-auto py-2 flex justify-center items-center flex-col">
      <div className="my-4">
        <h1 className="text-4xl text-center font-bold uppercase mb-2">😎 Dropzone</h1>
        <h3 className="text-xl text-center font-semibold uppercase">Upload Cloudinary</h3>
      </div>

      <FormContainer />
    </div>
  );
}

export default HomePage;
