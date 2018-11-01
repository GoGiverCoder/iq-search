//Environment
export const APP_ENV_DEVELOP = 'env_develop'
export const APP_ENV_PRODUCTION = 'env_production'
export const APP_ENV = (process.env.NODE_ENV === 'production') 
                        ? APP_ENV_PRODUCTION 
                        : APP_ENV_DEVELOP
export const APP_ENV_IS_DEVELOP = APP_ENV === APP_ENV_DEVELOP
export const APP_ENV_IS_PRODUCTION = APP_ENV === APP_ENV_PRODUCTION

//Site URL
export const URL_SITE = APP_ENV_IS_DEVELOP
                  ? 'http://localhost:3000'
                  : 'http://localhost:3010'

//Base APIs
export const URL_SEARCH_API = APP_ENV_IS_DEVELOP 
                        ? 'http://localhost:3011/api' 
                        : 'http://localhost:3011/api'

//Authentication 
export const URL_AUTH_CALLBACK = URL_SITE+'/callback'