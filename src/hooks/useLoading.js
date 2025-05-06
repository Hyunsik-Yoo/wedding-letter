import { useState, useEffect } from 'react';

const useLoading = (initialLoadingTime = 3000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialLoadingTime);

    return () => clearTimeout(timer);
  }, [initialLoadingTime]);

  return isLoading;
};

export default useLoading; 