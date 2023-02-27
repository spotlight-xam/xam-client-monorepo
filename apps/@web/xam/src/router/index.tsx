import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Text, View } from '@components/common';
import { useGlobalState } from '@hooks/queries';

import { LoginScreen } from '../screens/index';
// import * as auth from '@screens/auth';
// import * as main from '@screens/main';

export function Router() {
  // const [accessToken, setAccessToken] = useGlobalState(['accessToken'], '');

  const router = createBrowserRouter([
    // for auth
    {
      path: '/auth',
      element: (
        <View>
          <Text>auth</Text>
        </View>
      ),
    },

    // for main
    {
      path: '/',
      element: (
        <View>
          <Text>main</Text>
        </View>
      ),
    },

    {
      path: '/login',
      element: (
        <View>
          <LoginScreen />
        </View>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
