import Head from 'next/head';
import { API_KEY } from './../../lib';
import Detail from '../../components/Detail';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import { useSearchContext } from './../../Context';
export async function getServerSideProps(context) {
  const id = context.query.id;
  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
  const data = await (await fetch(url)).json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const TvShowDetail = ({ data }) => {
  const { name, first_air_date, vote_average, poster_path, overview } = data;
  const { closeSearch } = useSearchContext();
  useEffect(() => {
    closeSearch();
  }, []);
  return (
    <Layout className='flex justify-center'>
      <Head>
        <title>Tv | {name} </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Detail
        title={name}
        overview={overview}
        poster_path={poster_path}
        year={`${first_air_date}`.split('-')[0]}
        vote_average={vote_average}
        media_type='movie'
      />
    </Layout>
  );
};

export default TvShowDetail;
