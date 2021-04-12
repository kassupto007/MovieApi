// const path = require('path');
// const withReactSvg = require('next-react-svg');

// module.exports = withReactSvg({
//   include: path.resolve(__dirname, 'src/assets'),
//   trailingSlash: true,
//   webpackDevMiddleware: (config) => {
//     config.watchOptions = {
//       poll: 1000,
//       aggregateTimeout: 300,
//     };
//     return config;
//   },
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'src/styles')],
//   },
// });

//option2
// const withImages = require('next-images');
// module.exports = withImages();

//option3

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org', 'images.unsplash.com'],
  },
};
