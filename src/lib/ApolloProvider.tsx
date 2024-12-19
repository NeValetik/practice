'use client';

import { ApolloProvider as Provider } from '@apollo/client';
import { ReactNode } from 'react';
import client from './client';

interface ApolloProviderProps {
  children: ReactNode;
}

export default function ApolloProvider({ children } : ApolloProviderProps) {
  return (
    <Provider client={client}>
      {children}
    </Provider>
  );
}