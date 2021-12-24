// usually many routes here
import React from 'react';
import MainView from '../@views/MainView';
import { AppLayout } from './AppLayout';

export const AppContainer = () => {
  return (
    <AppLayout>
      <MainView />
    </AppLayout>
  );
};
