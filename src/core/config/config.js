import routes from './routes';
import fb from './fb';
export let config = {
    ORGS_URL: 'https://api.github.com/orgs'
};
config.routes = routes;
config.fb = fb;
export default config;

