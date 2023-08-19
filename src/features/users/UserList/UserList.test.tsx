import { store } from '@/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import UserList from './UserList';

describe('TESTING the UserList component', () => {
	describe('GIVEN a fetch request to the api', () => {
		describe('WHEN the api is still loading data', () => {
			it('THEN shows a loading indicator', () => {
				const { queryByRole } = renderComponent();
				const loader = queryByRole('status');
				expect(loader).toBeInTheDocument();
			});
		});

		describe('WHEN the api returns data', () => {
			it('THEN returns list of users', async () => {
				const { findByText, queryByText } = renderComponent();
				const user1 = await findByText(/Test Name 1/i);
				const user2 = await findByText(/Test Name 2/i);
				const noUsersContent = queryByText('No users found');

				expect(user1).toBeInTheDocument();
				expect(user2).toBeInTheDocument();
				expect(noUsersContent).not.toBeInTheDocument();
			});
		});
	});
});

function renderComponent() {
	return render(
		<Provider store={store}>
			<UserList />
		</Provider>,
	);
}
