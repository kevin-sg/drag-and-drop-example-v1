import * as Io from 'react-icons/io';

import type { IUploadErrorProps } from '@/models';
import { FileHeader, ProgressBar } from '@/components';

function UploadFileError({ file, progress = 100, errors, onDelete }: IUploadErrorProps): React.ReactElement {
  return (
    <div className="w-full py-4">
      <FileHeader filename={file.name} status="error" porcentage={progress} onDelete={() => onDelete(file)} />
      <ProgressBar porcentage={progress} status="error" />

      {errors?.map((error, idx) => (
        <div
          key={idx}
          className="flex p-2 my-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <Io.IoMdAlert className="inline flex-shrink-0 mr-3 w-5 h-5" />
          <div>
            <span className="text-left font-medium capitalize">{error.code.replace(/-/gi, ' ')}!</span>
            <br />
            <span className="text-left">{file.name} </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UploadFileError;
