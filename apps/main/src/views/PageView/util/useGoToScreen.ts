import { useRouter } from 'next/router';
import { ScreenRoutes } from '../types';

export const useGoToScreen = (route: ScreenRoutes) => {
  const { replace } = useRouter();

  const goToScreen = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    await replace(route);
    return;
  };

  return {
    goToScreen,
  };
};
