// libs
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SrollToTop
 */
const SrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default SrollToTop;
