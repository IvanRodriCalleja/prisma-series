const { objectType } = require('@nexus/schema');

const episode = objectType({
	name: 'Episode',
	definition(t) {
		t.model.id();
		t.model.title();
		t.model.image();
	}
});

module.exports = { episode };
