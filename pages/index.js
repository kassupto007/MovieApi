import Head from 'next/head';
import Poster from '../components/Poster';
import SliderComp from '../components/SliderComp';
import { getList, getRandomPosterMedia } from '../lib';
import Layout from './../components/Layout';

export async function getServerSideProps(context) {
  // const trendingMoviesList = await getList('TRENDING_MOVIES');
  const data = await Promise.all([
    getList('UPCOMING_MOVIES'),
    getList('TRENDING_MOVIES'),
    getList('TRENDING_TV_SHOWS'),
  ]);

  const randomMedia = getRandomPosterMedia(data);
  return {
    props: { data, randomMedia }, // will be passed to the page component as props
  };
}
const App = ({ data, randomMedia }) => {
  const posterMediaType = randomMedia?.media_type ? randomMedia?.media_type : 'movie';
  const posterTitle = posterMediaType === 'movie' ? randomMedia?.title : randomMedia?.name;

  return (
    <Layout>
      <Head>
        <title>Home Pie Movies | Tv Shows</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Poster
        id={randomMedia?.id}
        title={posterTitle}
        media_type={posterMediaType}
        overview={randomMedia.overview}
        backdrop_path={randomMedia.backdrop_path}
      />
      <div className='mx-6 mb-24'>
        <SliderComp title='Upcoming Movies' list={data[0]} />
        <SliderComp title='Trending Movies' list={data[1]} />
        <SliderComp title='Trending Tv Shows' list={data[2]} />
      </div>
    </Layout>
  );
};

export default App;
