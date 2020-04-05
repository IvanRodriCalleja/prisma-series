const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');
const { nexusPrismaPlugin } = require('nexus-prisma');
const { makeSchema } = require('@nexus/schema');

const { schema } = require('./schema/index');

const prisma = new PrismaClient();

new GraphQLServer({
	schema: makeSchema({
		types: schema,
		plugins: [nexusPrismaPlugin()],
		outputs: {
			schema: __dirname + '/schema/schema.graphql',
			typegen: __dirname + '/generated/nexus.ts'
		}
	}),
	context: { prisma }
}).start({ playground: '/playground', endpoint: '/graphql', port: 4000 }, ({ port }) =>
	console.log(`🚀 Server ready at: http://localhost:${port} ⭐️ `)
);
