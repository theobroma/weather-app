import React, { useEffect } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Footer from '../../@components/Footer';
import { SimpleAppBar } from '../../@components/AppBar/AppBar';

const MainView: React.FC = () => {
  //   const dispatch = useDispatch();
  //   const {
  //     data: { page, total_pages, results: trendingAllmovies },
  //     isLoading,
  //   } = useSelector(trendingSelector);

  //   const handlePageChange = (
  //     event: React.ChangeEvent<unknown>,
  //     value: number,
  //   ) => {
  //     dispatch(setPageAC(value));
  //     // Scroll to top when page changes
  //     window.scroll(0, 0);
  //   };

  //   useEffect(() => {
  //     dispatch(getTrendingAllTC({ page }));
  //   }, [dispatch, page]);

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <SimpleAppBar />
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
              item1
            </Grid>
            {/* {trendingAllmovies?.map((movie) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                {isLoading ? (
                  <SingleContentSkeleton />
                ) : (
                  <SingleContent movie={movie} />
                )}
              </Grid>
            ))} */}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MainView;
