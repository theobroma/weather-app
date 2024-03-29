import React from 'react';

import { List, ListItem, Typography } from '@material-ui/core';

import type { SearchPlaceItemType } from '../../../@types';

import { useStyles } from './SearchOutput.styles';

interface Props {
  searchData: SearchPlaceItemType[];
  onClick: (lat: number, lon: number) => void;
}

const SearchOutput = ({ searchData = [], onClick }: Props) => {
  const classes = useStyles();

  return (
    <List className={classes.root} aria-labelledby="nested-list-subheader">
      {searchData.map((item: SearchPlaceItemType) => {
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
