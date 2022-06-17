import { Box, CircularProgress, Grid, GridProps } from '@material-ui/core';
import React from 'react';

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
