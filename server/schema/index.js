const { models } = require('./models');
const { query } = require('./query');

module.exports = { schema: [...models, query] };
