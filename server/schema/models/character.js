const { objectType } = require('@nexus/schema');

const character = objectType({
	name: 'Character',
	definition(t) {
		t.model.id();
		t.model.name();
		t.model.image();
	}
});

module.exports = { character };
