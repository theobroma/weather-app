import type { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    ...createStyles({
      grow: {
        flexGrow: 1,
      },
      title: {
        display: 'none',
        color: '#fff',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
    }),
  };
});
