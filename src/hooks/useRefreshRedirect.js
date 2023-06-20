import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useRefreshRedirect = (redirectPath) => {
  const router = useRouter();

  useEffect(() => {
    const shouldRedirect = window.performance && performance.navigation.type === 1;

    if (shouldRedirect && router.pathname !== redirectPath) {
      router.push(redirectPath);
    }
  }, [redirectPath, router]);
};

export default useRefreshRedirect;
