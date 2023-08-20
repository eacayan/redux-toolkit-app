import { rest } from 'msw';
import { mockUserData } from './mockData';

export const handlers = [
	rest.get('https://jsonplaceholder.typicode.com/users', (_, res, ctx) => {
		return res(ctx.json(mockUserData), ctx.delay(150));
	}),
];
