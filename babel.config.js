module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/react',
    '@babel/preset-typescript',
  ],
  // plugins: ["@babel/plugin-transform-modules-commonjs"],
  // babelrcRoots: [".", "packages/*"],
};
