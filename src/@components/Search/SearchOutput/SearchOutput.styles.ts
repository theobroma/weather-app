import type { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    ...createStyles({
      root: {
        position: 'absolute',
        maxHeight: 430,
        width: '100%',
        overflowY: 'auto',
        background: 'white',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.22)',
        zIndex: 2,
      },
      item: {
        height: 60,
        padding: theme.spacing(1),
        paddingLeft: 20,

        [theme.breakpoints.down('sm')]: {
          height: 90,
        },
      },
      title: {
        fontWeight: 500,
        color: '#000',
      },
    }),
  };
});
