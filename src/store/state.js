import apiRootPath from '../config.js'

// Default state
export default {
	hydrated: false,
	hydratingError: null,
	latency: [],
	currentUser: {},
	bookmarks: [],
	sidebars: {
		nav: false,
		info: false
	},
	queue: [],
	currentProjectKey: null,
	projects: null,
	apiRootPath
};
