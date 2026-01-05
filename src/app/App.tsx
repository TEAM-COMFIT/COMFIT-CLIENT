import { useEffect } from 'react';

import { HomePage } from '@pages/home/home-page';
import { useAuthStore } from '@shared/model/auth';

const App = () => {
  const syncFromStorage = useAuthStore((s) => s.actions.syncFromStorage);

  useEffect(() => {
    syncFromStorage();
  }, [syncFromStorage]);

  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
