export const API_KEY = '87ac5b27a3cb22f36786626ff9eeba82';

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w780/';
export const BASE_IMG_URL_MED = 'https://image.tmdb.org/t/p/w300/';

export const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80';

export const TRENDING_MOVIES =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=87ac5b27a3cb22f36786626ff9eeba82';

export const UPCOMING_MOVIES =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=87ac5b27a3cb22f36786626ff9eeba82&language=en-US&page=1';

export const TRENDING_TV_SHOWS =
  'https://api.themoviedb.org/3/trending/tv/day?api_key=87ac5b27a3cb22f36786626ff9eeba82';

export const MULTI_SEARCH = `https://api.themoviedb.org/3/search/multi?api_key=87ac5b27a3cb22f36786626ff9eeba82&language=en-US&page=1&include_adult=false&query=`;

export const getList = async (type) => {
  let url = '';
  switch (type) {
    case 'TRENDING_MOVIES':
      url = TRENDING_MOVIES;
      break;
    case 'UPCOMING_MOVIES':
      url = UPCOMING_MOVIES;
      break;
    case 'TRENDING_TV_SHOWS':
      url = TRENDING_TV_SHOWS;
      break;
    default:
      url = TRENDING_MOVIES;
  }

  const resjson = await fetch(url);
  const res = await resjson.json();
  const list = res?.results || [];
  return list;
};

export const getRandomPosterMedia = (data) => {
  const list = [...data[0], ...data[1], ...data[2]];
  const length = list.length;
  const randomNumber = Math.floor(Math.random() * length);

  return list[randomNumber];
};
