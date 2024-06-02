import { useContext } from 'react';

import { UserContext } from '@providers/UserProvider';

export function useUser() {
  return useContext(UserContext);
}
