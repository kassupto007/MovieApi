import { useEffect } from 'react';
import Head from 'next/head';
import Detail from '../../components/Detail';
import Layout from '../../components/Layout';
import { API_KEY } from './../../lib';
import { useSearchContext } from './../../Context';
export async function getServerSideProps(context) {
  const id = context.query.id;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const data = await (await fetch(url)).json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const MovieDetail = ({ data }) => {
  const { title, release_date, vote_average, poster_path, overview, runtime } = data;
  const { closeSearch } = useSearchContext();
  useEffect(() => {
    closeSearch();
  }, []);
  return (
    <Layout className='flex justify-center'>
      <Head>
        <title>Movie | {title} </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Detail
        title={title}
        overview={overview}
        poster_path={poster_path}
        year={`${release_date}`.split('-')[0]}
        vote_average={vote_average}
        runtime={runtime}
        media_type='movie'
      />
    </Layout>
  );
};

export default MovieDetail;
