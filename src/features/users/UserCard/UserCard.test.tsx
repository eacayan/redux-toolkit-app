import { fireEvent } from '@testing-library/react';
import UserCard from './UserCard';
import { deleteUser } from '../userSlice';
import { mockStoreData, mockUserData } from '../../../../mocks/mockData';
import { setupStore } from '@/store';
import { renderWithProviders } from '@/utils/test-utils';

describe('TESTING the UserCard component', () => {
	describe('GIVEN a user card with an id', () => {
		describe('WHEN delete button of the given card is clicked', () => {
			it('THEN dispatches deleteUser action', () => {
				const store = setupStore({ users: mockStoreData });
				const { getByText } = renderWithProviders(<UserCard {...mockUserData[0]} />, { store });

				const deleteButton = getByText('Delete');
				expect(store.getState().users.usersArray).toHaveLength(2);

				fireEvent.click(deleteButton);
				store.dispatch(deleteUser(mockUserData[0].id));
				expect(store.getState().users.usersArray).toHaveLength(1);
			});
		});
	});
});
