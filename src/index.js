module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-postform-base'),
    require.resolve('./rules'),
  ],
};
