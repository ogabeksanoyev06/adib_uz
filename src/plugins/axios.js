import https from "https";

export default function({ $axios, error, i18n }) {
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  $axios.onRequest(config => {
//    if (process.env.dev) {
    config.httpsAgent = agent;
//    }
  });

  $axios.interceptors.request.use((config) => {
    const locale = i18n.locale
    $axios.setHeader('Language', locale)
    return config
  })

  $axios.onError((responseError) => {
    if (responseError.response.status === 404) {
      error({ statusCode: 404 })
    }
    if (responseError.response.status === 500) {
      error({ statusCode: 500})
    }
    if (responseError.response.status === 401) {
      error({ statusCode: 401})
    }

  })
}


