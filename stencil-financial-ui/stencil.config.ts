import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-financial-ui',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
