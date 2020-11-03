import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from '@material-ui/core';
import React, { ChangeEvent, useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  //   const searchData = useSelector<
  //     AppRootStateType,
  //     Array<searchPlaceResponseType>
  //   >((state) => state.search.data);

  //   const onPlaceClick = useCallback(
  //     (lat: number, lon: number) => {
  //       dispatch(getCurrentWeatherTC(lat, lon));
  //       dispatch(getForecastTC(3, lat, lon));
  //       dispatch(cleanDataAC());
  //       setSearchVal('');
  //     },
  //     [searchVal],
  //   );

  //   useEffect(() => {
  //     debouncedSearchTerm && dispatch(searchTC(searchVal));
  //   }, [debouncedSearchTerm]);

  const [searchVal, setSearchVal] = useState('');
  //   const debouncedSearchTerm = useDebounce(searchVal, 200);
  useEffect(() => {
    console.log(searchVal);
  });

  //   const handleChange = useCallback(
  //     (e: ChangeEvent<HTMLInputElement>) => {
  //       setSearchVal(e.currentTarget.value);
  //     },
  //     [searchVal],
  //   );

  //   const [values, setValues] = React.useState<any>({
  //     amount: '',
  //   });

  const handleChange = (e: any) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(event);
    setSearchVal(event.currentTarget.value);
  };

  return (
    <div className="container">
      <div className="sectionWrap">
        <h2>Search</h2>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={searchVal}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
      </div>
    </div>
  );
};

export default Search;
