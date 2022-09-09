import React from 'react';

import { createStyles, makeStyles, Typography } from '@material-ui/core';

type Props = {
  location: {
    name: string;
    region: string;
    country: string;
  };
};

const useStyles = makeStyles(() => {
  return {
    ...createStyles({
      title: {
        fontSize: 30,
        fontWeight: 300,
      },
    }),
  };
});

const Location = ({ location }: Props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title} component="h2" variant="h6">
        {location.name}, {location.region}, {location.country}
      </Typography>
    </div>
  );
};
export { Location };
