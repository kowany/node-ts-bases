const axios = require('axios')
// Para el caso de peticiones con autorización
const buildHttpClient = (headers) => {
  return {
    get: async (url) => {
      const { data } = await axios.get(url, headers)
      return data
      // return await response.json()
      // const response = await fetch(url)
      // return await response.json()
    },
    post: async (url, body) => {},
    put: async (url, body) => {},
    delete: async (url) => {}
  }
}

// Para el caso de autorizaciones públicas
const httpClientPlugin = {
  get: async (url) => {
    const { data } = await axios.get(url)
    return data
    // return await response.json()
    // const response = await fetch(url)
    // return await response.json()
  },
  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {}
}

module.exports = {
  http: httpClientPlugin
}
