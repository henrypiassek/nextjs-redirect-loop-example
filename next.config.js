module.exports = {
  trailingSlash: true,
  rewrites: async() => {
    return [
      {
        source: '/pretty-url/',
        destination: '/demo/'
      }
    ]
  }
}