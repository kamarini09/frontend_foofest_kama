import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useRefreshRedirect = (redirectPath) => {
  const router = useRouter();

  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        // Page reloaded or refreshed
        router.push(redirectPath);
      }
    }
  }, [redirectPath, router]);
};

export default useRefreshRedirect;
