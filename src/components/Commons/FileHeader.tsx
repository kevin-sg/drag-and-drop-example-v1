import * as Ai from 'react-icons/ri';

import type { IFileHeaderProps } from '@/models';

function FileHeader({ filename, porcentage, status = 'success', onDelete }: IFileHeaderProps) {
  return (
    <div className="flex justify-between mb-1">
      <span className="text-base font-normal text-blue-700 dark:text-white">{filename}</span>

      <div className="flex gap-2 justify-center items-center">
        {status === 'success' && (
          <span className="text-sm font-medium text-blue-700 dark:text-white">{porcentage}%</span>
        )}

        <button type="button" onClick={onDelete}>
          {''}
          <Ai.RiCloseFill className="text-xl text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default FileHeader;
