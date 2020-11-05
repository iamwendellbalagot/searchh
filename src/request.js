
const CX = '2a9ea88cd30ecb264'
const API_KEY = 'AIzaSyBl17AmrHtYvNaypazP3WtSvOORouBWNcM'

const URI = (item) => `https://customsearch.googleapis.com/customsearch/v1?cx=${CX}&q=${item}&key=${API_KEY}`;

export default URI;