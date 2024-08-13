import type { AxiosRequestConfig } from 'axios';
import type { CacheOptions } from 'axios-cache-interceptor';

export interface ClientOptions extends AxiosRequestConfig {
  /**
   * **Axios Cache Options**
   * Options for cache.
   * @see https://axios-cache-interceptor.js.org/#/pages/configuration
   */
  cacheOptions?: Partial<CacheOptions>;
}
