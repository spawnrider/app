import { SDK } from '@directus/sdk-js/dist/esm/index.js';
import apiRootPath from './config.js'

const client = new SDK({
	mode: 'cookie',
	url: apiRootPath
});

export default client;
