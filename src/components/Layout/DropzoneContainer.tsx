import { FileRejection, useDropzone } from 'react-dropzone';
import { useCallback, useEffect, useState } from 'react';

import type { IDropzoneContainerProps, IUploadFile } from '@/models';
import { DropzoneInput, SingleFileUpload, UploadFileError, Button } from '@/components';

function DropzoneContainer({ handleChange }: IDropzoneContainerProps): React.ReactElement {
  const maxSize = 5242880;

  const [files, setFiles] = useState([] as IUploadFile[]);

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((prev) => [...prev, ...mappedAcc, ...rejFiles]);
  }, []);

  useEffect(() => {
    handleChange([...files]);
  }, [files]);

  function onUpload(file: File, url: string) {
    // Add url image
    setFiles((prev) => prev.map((fw) => (fw.file === file ? { ...fw, url } : fw)));
  }

  function onDelete(file: File) {
    setFiles((prev) => prev.filter((fw) => fw.file !== file));
  }

  function handleReset() {
    setFiles([]);
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': [], 'image/png': [], 'image/jpg': [], 'image/gif': [] },
    maxFiles: 4,
    maxSize,
  });

  return (
    <div className="w-full h-full grid gap-5 grid-cols-1 place-content-center place-items-center">
      <div className="w-72 my-5">
        <DropzoneInput maxSize={maxSize} getRootProps={getRootProps} getInputProps={getInputProps} />
      </div>

      {files?.length ? (
        <div className="w-72 py-2 bg-gray-900 rounded-lg">
          <p className="text-xl text-center  font-semibold my-2">⬇️ List item</p>
        </div>
      ) : (
        <></>
      )}

      {files?.length ? (
        <div className="w-72 bg-gray-800 p-4 leading-6 mx-auto grid grid-cols-1 divide-y divide-slate-700 rounded-lg">
          {files?.map(({ file, errors }, idx) => (
            <div key={idx}>
              {errors?.length ? (
                <UploadFileError file={file} errors={errors} onDelete={onDelete} />
              ) : (
                <SingleFileUpload file={file} onUpload={onUpload} onDelete={onDelete} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}

      {files?.length ? (
        <div className="w-72 mx-auto flex justify-around items-center">
          <Button type="submit" text="Submit" action="success" />
          <Button type="button" text="Reset" action="reset" onClick={handleReset} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DropzoneContainer;
