// Get the API root URL
const path = window.location.pathname;
const parts = path.split('/');
const adminIndex = parts.indexOf('admin');
const apiRootPath = parts.slice(0, adminIndex).join('/') + '/';

export default apiRootPath;