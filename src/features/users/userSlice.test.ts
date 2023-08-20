import { userSlice } from './userSlice';
import { mockStoreData, mockUserData } from '../../../mocks/mockData';

const userReducer = userSlice.reducer;

describe('TESTING userSlice reducer actions', () => {
	describe('GIVEN setUsers action', () => {
		describe('WHEN there are new users', () => {
			it('THEN setUsers action should run', () => {
				const initialState = { usersArray: [], searchInput: '', isLoading: false };
				const newState = userReducer(initialState, {
					type: 'users/setUsers',
					payload: mockUserData,
				});

				expect(newState.usersArray).toHaveLength(2);
				expect(newState.usersArray[0].name).toBe('Test Name 1');
				expect(newState.isLoading).toBe(false);
			});
		});
	});

	describe('GIVEN deleteUsers action', () => {
		describe('WHEN an id is set as payload to be deleted', () => {
			it('THEN deleteUsers action should delete the user from the users list', () => {
				const initialState = mockStoreData;
				const newState = userReducer(initialState, {
					type: 'users/deleteUser',
					payload: 1,
				});

				expect(newState.usersArray).toHaveLength(1);
				expect(newState.usersArray[0].id).toBe(2);
			});
		});
	});

	describe('GIVEN setSearchInput action', () => {
		describe('WHEN an input value is given', () => {
			it('THEN the setSearchInput actuib should set a new search input', () => {
				const initialState = mockStoreData;
				const newState = userReducer(initialState, {
					type: 'users/setSearchInput',
					payload: 'test input',
				});

				expect(newState.searchInput).toBe('test input');
			});
		});
	});

	describe('GIVEN setLoading action', () => {
		describe('WHEN loading state changes', () => {
			it('THEN setLoading action should change the loading state', () => {
				const initialState = mockStoreData;
				const newState = userReducer(initialState, {
					type: 'users/setIsLoading',
					payload: true,
				});

				expect(newState.isLoading).toBe(true);
			});
		});
	});
});
