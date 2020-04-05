const { objectType } = require('@nexus/schema');

const actor = objectType({
	name: 'Actor',
	definition(t) {
		t.model.id();
		t.model.name();
		t.model.image();
		t.model.character();
	}
});

module.exports = { actor };
