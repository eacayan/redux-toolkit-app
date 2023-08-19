import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore, { MockStore } from 'redux-mock-store';
import UserCard from './UserCard';
import { UserProps } from '../UserList/UserList';
import { deleteUser } from '../userSlice';
import { mockData } from '../../../../mocks/mockData';

const mockStore = configureMockStore([]);

describe('TESTING the UserCard component', () => {
	describe('GIVEN a user card with an id', () => {
		describe('WHEN delete button of the given card is clicked', () => {
			it('THEN dispatches deleteUser action and deletes the user from view', () => {
				const store: MockStore = mockStore({});

				const { getByText } = renderComponent(store);

				const deleteButton = getByText('Delete');
				fireEvent.click(deleteButton);

				const actions = store.getActions();
				const expectedAction = deleteUser(mockData[0].id);

				expect(actions).toContainEqual(expectedAction);
			});
		});
	});
});

function renderComponent(mockStore: MockStore<UserProps[]>) {
	return render(
		<Provider store={mockStore}>
			<UserCard {...mockData[0]} />
		</Provider>,
	);
}
