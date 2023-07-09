import { ReactNode, useCallback } from 'react';
import { debounce } from 'lodash'; // lodash is a popular utility library that has a debounce function

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  const debouncedOnClick = useCallback(debounce(onClick, 300), [onClick]);

  return (
    <button
      className="px-1-2 flex items-center text-white rounded-1-2 h-5-0 w-fit bg-primary"
      onClick={debouncedOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
