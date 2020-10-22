import React, { useEffect, useState } from 'react';
import Layout from 'layouts/Layout';
import Axios from 'axios';
import { Avatar, Container, Grid } from '@material-ui/core';

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      // eslint-disable-next-line no-shadow
      const { data } = await Axios.get(
        'https://rickandmortyapi.com/api/character',
      );

      setData(data);
      setLoading(false);
    })();
  }, []);

  return (
    <Layout>
      <br />
      <Container>
        {loading && !data && 'Loading...'}
        {!loading && data && (
          <Grid container spacing={2}>
            {data?.results.map((character) => (
              <Grid item xs={6} md={1} key={character.image}>
                <Avatar
                  src={character.image}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Layout>
  );
};

export default Blog;
