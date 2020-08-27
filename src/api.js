import { SDK } from '@directus/sdk-js/dist/esm/index.js';
import apiRootURL from './config.js'

const client = new SDK({
	mode: 'cookie',
	url: apiRootURL
});

export default client;
