export declare global {
  type AnyObject = Record<string, unknown>;

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;

      DATABASE_HOST: string;
      DATABASE_USER: string;
      DATABASE_SCHEMA: string;
      DATABASE_DATABASE: string;
      DATABASE_PASSWORD: string;
      DATABASE_PORT: string;

      JWT_SECRET: string;
      JWT_EXPIRES_TIME: string;

      CACHE_MEMORY_TTL_MS: string;
      CACHE_MEMORY_TTL_MIN: string;
    }
  }
}
