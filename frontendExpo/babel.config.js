module.exports = function (api) {
  api.cache(true);
  api.cache(true);
  api.cache(true);
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          jsxImportSource: 'nativewind'
        }
      ],
      'nativewind/babel'
    ],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],

          alias: {
            '@': './',
            'tailwind.config': './tailwind.config.js'
          }
        }
      ]
    ]
  };
};
