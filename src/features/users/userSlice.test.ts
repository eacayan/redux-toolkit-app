import { mockData } from '../../../mocks/mockData';
import { userSlice } from './userSlice';

const userReducer = userSlice.reducer;

describe('TESTING userSlice reducer functions', () => {
	describe('GIVEN setUsers function', () => {
		describe('WHEN there are new users', () => {
			it('THEN setUsers should run', () => {
				const initialState = { usersArray: [], searchInput: '', isLoading: false };
				const newState = userReducer(initialState, {
					type: 'users/setUsers',
					payload: mockData,
				});

				expect(newState.usersArray).toHaveLength(2);
				expect(newState.usersArray[0].name).toBe('Test Name 1');
				expect(newState.isLoading).toBe(false);
			});
		});
	});

	describe('GIVEN deleteUsers function', () => {
		describe('WHEN an id is set as payload to be deleted', () => {
			it('THEN deleteUsers should delete the id', () => {
				const initialState = {
					usersArray: mockData,
					isLoading: false,
					searchInput: '',
				};
				const newState = userReducer(initialState, {
					type: 'users/deleteUser',
					payload: 1,
				});

				expect(newState.usersArray).toHaveLength(1);
				expect(newState.usersArray[0].id).toBe(2);
			});
		});
	});

	describe('GIVEN setSearchInput function', () => {
		describe('WHEN an input value is given', () => {
			it('THEN the setSearchInput function should set a new search input', () => {
				const initialState = {
					usersArray: mockData,
					isLoading: false,
					searchInput: '',
				};
				const newState = userReducer(initialState, {
					type: 'users/setSearchInput',
					payload: 'test input',
				});

				expect(newState.searchInput).toBe('test input');
			});
		});
	});

	describe('GIVEN setLoading function', () => {
		describe('WHEN loading state changes', () => {
			it('THEN setLoading function should change the loading state', () => {
				const initialState = {
					usersArray: mockData,
					isLoading: false,
					searchInput: '',
				};
				const newState = userReducer(initialState, {
					type: 'users/setIsLoading',
					payload: true,
				});

				expect(newState.isLoading).toBe(true);
			});
		});
	});
});
