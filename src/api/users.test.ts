import { setIsLoading, setUsers } from '@/features/users/userSlice';
import { fetchUsers } from './users';
import { mockData } from '../../mocks/mockData';

afterEach(() => {
	jest.restoreAllMocks();
});

describe('TESTING fetchUsers api call', () => {
	describe('WHEN the api call is successful', () => {
		it('THEN returns user data and dispatches correct actions', async () => {
			const dispatch = jest.fn();

			await fetchUsers()(dispatch);
			expect.assertions(3);

			expect(dispatch).toHaveBeenCalledWith(setIsLoading(true));
			expect(dispatch).toHaveBeenCalledWith(setUsers(mockData));
			expect(dispatch).toHaveBeenCalledWith(setIsLoading(false));
		});

		describe('WHEN the api call returns an exception', () => {
			it('THEN throws an error', async () => {
				const dispatch = jest.fn();

				try {
					await fetchUsers()(dispatch);
				} catch (error) {
					const mockError = new Error(`Fetch error: ${error}`);
					jest.fn().mockRejectedValue(mockError);
					expect(error).toBe(mockError);
				}
			});
		});
	});
});
