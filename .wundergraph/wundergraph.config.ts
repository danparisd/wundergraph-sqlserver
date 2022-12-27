import { configureWunderGraphApplication, cors, EnvironmentVariable, introspect, templates } from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';

const db = introspect.sqlserver({
	apiNamespace: 'db',
	databaseURL: process.env.SQL_CONN_STR || 'oops, you should set env SQL_CONN_STR',
	introspection: {
	  pollingIntervalSeconds: 5,
	},
});
  
configureWunderGraphApplication({
	apis: [db],
	server,
	security: {
		enableGraphQLEndpoint: true,
	},
});