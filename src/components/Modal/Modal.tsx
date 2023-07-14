import useOutsideAlerter from '@/utils/useClickOutside';
import { ReactNode, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  url?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, url }) => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const handleOnClose = () => {
    if (url) navigate(url, { replace: true });
    onClose();
  };

  useOutsideAlerter(ref, () => {
    handleOnClose();
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-40 inset-0 overflow-y-auto flex items-center justify-center">
      <div
        ref={ref}
        className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-6-0 mt-2-4 text-2-5"
      >
        <button onClick={handleOnClose} className="absolute right-0 top-0 m-2-0">
          X
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
