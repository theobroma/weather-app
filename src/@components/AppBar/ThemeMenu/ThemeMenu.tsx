// https://stackoverflow.com/a/55533600/3988363
import React, { useState } from 'react';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { IconButton } from '@material-ui/core';
import { StyledMenu, StyledMenuItem } from './ThemeMenu.styles';

const options = [
  'Show some love to Material-UI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

export default function ThemeMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClickListItem = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
      >
        <FormatColorFillIcon onClick={(e) => handleClickListItem(e)} />
      </IconButton>
      <StyledMenu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <StyledMenuItem
            key={option}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {index === selectedIndex ? (
              <RadioButtonCheckedIcon
                fontSize="small"
                style={{ marginRight: '8px' }}
              />
            ) : (
              <RadioButtonUncheckedIcon
                fontSize="small"
                style={{ marginRight: '8px' }}
              />
            )}
            {option}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
