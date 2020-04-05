const { objectType } = require('@nexus/schema');

const serie = objectType({
	name: 'Serie',
	definition(t) {
		t.model.id();
		t.model.title();
		t.model.language();
		t.model.image();
		t.model.actors();
		t.model.seasons();
	}
});

module.exports = { serie };
