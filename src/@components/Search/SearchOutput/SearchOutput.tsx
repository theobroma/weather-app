import React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';
import { useStyles } from './SearchOutput.styles';
import { searchPlaceResponseType } from '../../../@types';

interface Props {
  searchData: searchPlaceResponseType[];
  onClick: any;
}

const SearchOutput: React.FC<Props> = ({ searchData = [], onClick }) => {
  const classes = useStyles();

  return (
    <List className={classes.root} aria-labelledby="nested-list-subheader">
      {searchData.map((item: searchPlaceResponseType) => {
        return (
          <ListItem
            key={item.id}
            button
            className={classes.item}
            onClick={() => onClick(item.lat, item.lon)}
          >
            <Typography variant="body1">
              <span className={classes.title}>{item.name}</span>
            </Typography>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SearchOutput;
