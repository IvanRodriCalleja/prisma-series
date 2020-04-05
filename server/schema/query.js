const { queryType } = require('@nexus/schema');

const query = queryType({
	definition(t) {
		t.crud.serie({ filtering: true });
		t.crud.series({ filtering: true, ordering: true });
	}
});

module.exports = { query };
