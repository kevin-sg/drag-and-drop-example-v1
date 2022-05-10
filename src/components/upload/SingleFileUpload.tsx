import { uploadFile } from '@/utilities';
import { useEffect, useState } from 'react';
import { ProgressBar, FileHeader } from '../Commons';

interface ISingleFileUploadProps {
  file: File;
  onUpload: (file: File, url: string) => void;
  onDelete: (file: File) => void;
}

function SingleFileUpload({ file, onUpload, onDelete }: ISingleFileUploadProps) {
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
