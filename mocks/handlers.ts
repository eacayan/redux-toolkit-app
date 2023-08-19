import { rest } from 'msw';
import { mockData } from './mockData';

export const handlers = [
	rest.get('https://jsonplaceholder.typicode.com/users', (_, res, ctx) => {
		return res(ctx.json(mockData), ctx.delay(150));
	}),
];
