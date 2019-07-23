import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
//const { API_URL } = publicRuntimeConfig

export const env = publicRuntimeConfig
