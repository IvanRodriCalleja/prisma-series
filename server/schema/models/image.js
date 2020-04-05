const { objectType } = require('@nexus/schema');

const image = objectType({
	name: 'Image',
	definition(t) {
		t.model.medium();
		t.model.original();
	}
});

module.exports = { image };
