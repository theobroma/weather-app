import React from 'react';

import type { GridProps } from '@material-ui/core';
import { Box, CircularProgress, Grid } from '@material-ui/core';

type Props = {
  loading: boolean;
} & GridProps;

const GridProgress = ({ loading, children, ...gridProps }: Props) => {
  return (
    <Grid {...gridProps}>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={200}
          width="100%"
        >
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </Grid>
  );
};

export default GridProgress;
