Add file creds.js and creds.dev.js in root dir with: 
*example*
const creds = {
  DB_NAME: 'node-todo',
  USER_NAME: 'root',
  PASSWORD: password,
  host: 'localhost'
};
module.exports = creds;

npm run watch
or
npm run start
