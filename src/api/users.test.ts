import { fetchUsers } from './users';
import { mockUserData } from '../../mocks/mockData';

afterEach(() => {
	jest.clearAllMocks();
});
const dispatch = jest.fn();

describe('TESTING fetchUsers api call', () => {
	describe('WHEN the api call is successful', () => {
		it('THEN returns user data and dispatches correct actions', async () => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: () => Promise.resolve(mockUserData),
				}),
			);
			const call = await fetchUsers()(dispatch);
			expect(call).toEqual(mockUserData);
		});

		describe('WHEN the api call returns an exception', () => {
			it('dispatches the correct actions on fetch error', async () => {
				global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject('Error found'));
				const call = await fetchUsers()(dispatch);
				expect(call).toEqual(null);
			});
		});
	});
});
