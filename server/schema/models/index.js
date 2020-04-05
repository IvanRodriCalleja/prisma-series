const { actor } = require('./actor');
const { character } = require('./character');
const { episode } = require('./episode');
const { image } = require('./image');
const { season } = require('./season');
const { serie } = require('./serie');

module.exports = { models: [actor, character, episode, image, season, serie] };
