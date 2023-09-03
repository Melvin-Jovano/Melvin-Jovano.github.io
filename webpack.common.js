const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // TODO
    // new WorkboxWebpackPlugin.GenerateSW({
    //   swDest: './sw.bundle.js',
    //   runtimeCaching: [
    //     {
    //       urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/list'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'restaurant-catalogue-list',
    //       },
    //     },
    //     {
    //       urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/detail/'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'restaurant-catalogue-detail',
    //       },
    //     },
    //     {
    //       urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/small/'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'restaurant-catalogue-image-small',
    //       },
    //     },
    //     {
    //       urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'restaurant-catalogue-image-medium',
    //       },
    //     },
    //     {
    //       urlPattern: ({ url }) => url.href.startsWith('https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'restaurant-catalogue-image-loading',
    //       },
    //     },
    //   ],
      
    // }),
    // END TODO

    new ImageminWebpackPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
            ignore: ['**/images/**'],
          },
        },
      ],
    }),
  ],
};
