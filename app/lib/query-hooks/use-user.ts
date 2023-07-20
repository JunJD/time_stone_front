import useSWR from 'swr';

import userFetcher from '../query';

export default function useUser(body: Object) {
  const { data, mutate, error } = useSWR('auth/login', (url) =>
    userFetcher(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }),
  );

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
