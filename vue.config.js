module.exports = {
  publicPath: process.env.NODE_ENV === '/public/'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/'
}
