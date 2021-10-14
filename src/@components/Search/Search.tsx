import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../@hooks/useDebounce';
import { getForecastTC } from '../../@store/forecast/slice';
import { searchDataSelector } from '../../@store/search/selectors';
import { clearDataAC, searchTC } from '../../@store/search/slice';
import { setCoordinatesAC } from '../../@store/сoordinates/slice';
import SearchOutput from './SearchOutput';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(searchDataSelector);
  const [searchVal, setSearchVal] = useState('');
  const debouncedSearchTerm = useDebounce(searchVal, 300);

  const onPlaceClick = useCallback(
    (lat: number, lon: number) => {
      dispatch(setCoordinatesAC({ lat, lon }));
      const days = 3; // Limited for free plan
      dispatch(getForecastTC({ days }));
      dispatch(clearDataAC());
      setSearchVal('');
    },
    [dispatch],
  );

  useEffect(() => {
    // API response only for 3 characters
    if (debouncedSearchTerm.length > 2) dispatch(searchTC(debouncedSearchTerm));
  }, [debouncedSearchTerm, dispatch]);

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.currentTarget.value.trim());
  };

  return (
    <Box p={3}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="search-input">Search</InputLabel>
        <OutlinedInput
          id="search-input"
          value={searchVal}
          onChange={handleChange()}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>

      {searchData.length > 0 && (
        <SearchOutput searchData={searchData} onClick={onPlaceClick} />
      )}
    </Box>
  );
};

export default Search;
