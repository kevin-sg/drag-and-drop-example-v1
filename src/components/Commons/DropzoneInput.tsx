import * as Ai from 'react-icons/ai';

import type { IDropzoneInputProps } from '@/models';

function DropzoneInput({ maxSize = 0, getRootProps, getInputProps }: IDropzoneInputProps): React.ReactElement {
  return (
    <div
      {...getRootProps()}
      className="bg-gray-800 p-4 border-2 border-gray-600 rounded-lg flex justify-center items-center w-full"
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-sky-600 dark:hover:border-sky-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <Ai.AiOutlineCloudUpload className="mb-3 w-10 h-10 text-sky-400" />
          <p className="mb-2 text-sm text-gray-500 dark:text-sky-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 mb-1 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
            MAX SIZE: {maxSize / Math.pow(1024, 2)} MB
          </p>
        </div>
        <input name="file" {...getInputProps()} />
      </label>
    </div>
  );
}

export default DropzoneInput;
