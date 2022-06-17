import { Box } from '@material-ui/core';
import React from 'react';
import SimpleAppBar from '../@components/AppBar';
import Footer from '../@components/Footer';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
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
