module.exports = {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || 'http://localhost:1337',
    NODE_ENV: process.env.NODE_ENV,
  }
}
