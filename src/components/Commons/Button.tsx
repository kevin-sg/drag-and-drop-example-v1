import type { IButtonProps } from '@/models';

function Button({ type = 'button', action = 'success', text, ...props }: IButtonProps): React.ReactElement {
  const customClass =
    action === 'success'
      ? 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      : 'bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800';

  return (
    <button
      type={type}
      className={`${customClass} text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 focus:outline-none`}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
