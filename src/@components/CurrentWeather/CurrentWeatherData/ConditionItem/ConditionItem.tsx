// https://ozzie.sh/passing-icons-as-props-in-a-consistent-way-using-react
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

interface Props {
  title: string;
  icon: IconDefinition;
}

const useStyles = makeStyles(() => ({
  title: {
    marginLeft: 10,
  },
  label: {
    minWidth: 135,
    display: 'flex',
    alignItems: 'center',
  },
}));

export const ConditionItem: React.FC<Props> = ({ title, icon, children }) => {
  const classes = useStyles();
  return (
    <Box my={2} display="flex" alignItems="center">
      <Box className={classes.label}>
        <Typography color="textSecondary" display="inline">
          <FontAwesomeIcon icon={icon} />
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          display="inline"
        >
          {title}
        </Typography>
      </Box>
      <Typography variant="subtitle1" align="center" display="inline">
        {children}
      </Typography>
    </Box>
  );
};

export default ConditionItem;
