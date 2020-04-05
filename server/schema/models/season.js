const { objectType } = require('@nexus/schema');

const season = objectType({
	name: 'Season',
	definition(t) {
		t.model.id();
		t.model.seasonNumber();
		t.model.episodes();
	}
});

module.exports = { season };
