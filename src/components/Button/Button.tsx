import { ReactNode, useState } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  full?: boolean;
  bg?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, full, bg }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (!isDisabled) {
      setIsDisabled(true);
      onClick();
      setTimeout(() => setIsDisabled(false), 300);
    }
  };

  return (
    <button
      className={clsx(
        `px-1-2 flex items-center justify-center text-white rounded-0-8 h-4-0 w-fit bg-primary text-1-2`,
        full && '!w-full',
        `!bg-${bg}`
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
