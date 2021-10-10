import { Box } from '@material-ui/core';
import React from 'react';
import SimpleAppBar from '../@components/AppBar';
import Footer from '../@components/Footer';

interface ILayout {
  // All other props
  [x: string]: any;
}

export const GuestLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="HolyGrail">
      <SimpleAppBar />
      <main className="HolyGrail-content">
        <Box mt={2} mb={2}>
          {children}
        </Box>
      </main>
      <Footer />
    </div>
  );
};
