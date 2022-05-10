import type { IUploadFile } from '@/models';

function CardItem({ file, url }: IUploadFile): React.ReactElement {
  const fileName = file.name.split('.').slice(0, 1)[0];
  const currentTime = new Date(file.lastModified).toLocaleString();

  return (
    <div className="max-w-xs mx-auto my-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full h-60">
        <img
          className="w-full h-full object-cover object-center rounded-t-lg"
          src={url ?? 'https://i.ibb.co/0Jmshvb/no-image.png'}
          alt={file.name}
        />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{fileName}</h5>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">Name: {file.name}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Size: {file.size} bytes</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Type: {file.type.split('/')[1]}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          source:{' '}
          <a href={url} target="_blank" rel="noonpener" className="underline">
            view image
          </a>
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Modify: {currentTime}</p>
      </div>
    </div>
  );
}

export default CardItem;
