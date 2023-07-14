import { useEffect, RefObject } from 'react';

function useOutsideAlerter(ref: RefObject<HTMLElement>, func: () => void): void {
  useEffect(() => {
    function handleClickOutside(event: Event): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        func();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideAlerter;
