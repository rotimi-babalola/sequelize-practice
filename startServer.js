import server from './server';

/* eslint no-undef:0 */
const port = process.env.PORT || 5000;

/* eslint no-console:0 */
server.listen(port, () => console.log('Server is live!!!'));
