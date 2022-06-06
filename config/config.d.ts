declare module 'config' {

  export const CORS: boolean;
  export const DEVELOPMENT: boolean;

  export const POSTGRES: {
    readonly HOST: string;
    readonly USERNAME: string;
    readonly PASSWORD: string;
    readonly PORT: number;
    readonly DB: string;
    readonly RETRY_ATTEMPTS: number;
    readonly RETRY_DELAY: number;
  };

  export const NODE_ENV: string;

  export const API: {
    readonly PORT: number;
  };

  export const COOKIES_OPTIONS: {
    readonly SECURE: boolean;
    readonly SAME_SITE: boolean | 'lax' | 'strict' | 'none';
  };

  export const JWT: {
    readonly ALGORITHM: 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'none'
    | 'RS512' | 'ES256' | 'ES384' | 'ES512' | 'PS256' | 'PS384' | 'PS512';
    readonly EXPIRATION: string | number;
    readonly SECRET_KEY: string;
  };

}
