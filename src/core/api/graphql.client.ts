import { CONSTANTS } from 'core/env';
import {GraphQLClient} from 'graphql-request';
const url = CONSTANTS.GRAPHQL_API_BASE_URL

export const graphQLClient = new GraphQLClient(url);
