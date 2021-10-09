// usually many routes here
import React from 'react';
import MainView from '../@views/MainView';
import { GuestLayout } from './Layouts';

export const AppContainer: React.FC = () => {
  return (
    <GuestLayout>
      <MainView />
    </GuestLayout>
  );
};
