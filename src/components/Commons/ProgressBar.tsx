import type { IProgressBarProps } from '@/models';

function ProgressBar({ porcentage, status = 'success' }: IProgressBarProps): React.ReactElement {
  const typeStatus = status === 'success' ? 'bg-blue-600' : 'bg-red-600';

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
      <div className={`${typeStatus} h-1.5 rounded-full transition-[width]`} style={{ width: `${porcentage}%` }}></div>
    </div>
  );
}

export default ProgressBar;
