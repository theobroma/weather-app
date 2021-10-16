import { Box, CircularProgress, Grid, GridProps } from '@material-ui/core';
import React from 'react';

type GridProgressProps = {
  loading: boolean;
} & GridProps;

const GridProgress: React.FC<GridProgressProps> = ({
  loading,
  children,
  ...gridProps
}) => {
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
        <>{children}</>
      )}
    </Grid>
  );
};

export default GridProgress;
