import clsx from 'clsx';

interface SpinnerProps {
  isLoading: boolean;
}

const Spinner = ({ isLoading }: SpinnerProps) => {
  if (isLoading) {
    return (
      <div
        className={clsx(
          'flex justify-center items-center z-50',
          'fixed top-50-percent left-50-percent -translate-x-50-percent -translate-y-50-percent'
        )}
      >
        <div className="animate-spin rounded-50-percent h-30-0 w-30-0 border-r-[10px] border-t-[5px] border-secondary"></div>
      </div>
    );
  }
  return null;
};

export default Spinner;
