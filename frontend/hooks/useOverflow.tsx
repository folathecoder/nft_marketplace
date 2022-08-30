import { useEffect } from 'react';

type Props = {
  state: boolean;
};

const useOverflow = ({ state }: Props) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [state]);

  return null;
};

export default useOverflow;
