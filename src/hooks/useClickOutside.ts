import { MutableRefObject, useEffect } from 'react';

const useClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  handler: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const element = ref.current;

      if (!element || element.contains(target)) return;

      handler(event);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, handler]);
};

export default useClickOutside;
