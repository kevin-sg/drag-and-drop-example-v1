import { ReactElement, useEffect, useState } from 'react';

import { uploadFile } from '@/utilities';
import type { ISingleFileUploadProps } from '@/models';
import { ProgressBar, FileHeader } from '@/components';

function SingleFileUpload({ file, onUpload, onDelete }: ISingleFileUploadProps): ReactElement {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    (async () => {
      const url = await uploadFile(file, setProgress);
      onUpload(file, url);
    })();
  }, [file]);

  return (
    <div className="w-full py-4">
      <FileHeader filename={file.name} porcentage={progress} onDelete={() => onDelete(file)} />
      <ProgressBar porcentage={progress} />
    </div>
  );
}

export default SingleFileUpload;
